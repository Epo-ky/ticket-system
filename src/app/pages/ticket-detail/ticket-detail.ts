import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../../services/ticket';
import { Ticket } from '../../models/ticket.model';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-ticket-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ticket-detail.html',
  styleUrl: './ticket-detail.css'
})
export class TicketDetail implements OnInit {
  ticket: Ticket | undefined;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ticket = this.ticketService.getTickets().find(t => t.id === id);
  }

  voltar() {
    this.router.navigate(['/tickets']);
  }

  editando = false;
  tituloEdit = '';
  descricaoEdit = '';

editar() {
  this.editando = true;
  this.tituloEdit = this.ticket!.titulo;
  this.descricaoEdit = this.ticket!.descricao;
}

salvar() {
  this.ticket!.titulo = this.tituloEdit;
  this.ticket!.descricao = this.descricaoEdit;
  this.ticket!.atualizadoEm = new Date();
  this.editando = false;
}

cancelar() {
  this.editando = false;
}

deletar() {
  if (confirm('Tem certeza que deseja deletar este ticket?')) {
    this.ticketService.deleteTicket(this.ticket!.id);
    this.router.navigate(['/tickets']);
  }
}

}