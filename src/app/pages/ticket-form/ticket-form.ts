import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from '../../services/ticket';
import { Ticket } from '../../models/ticket.model';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ticket-form.html',
  styleUrl: './ticket-form.css'
})
export class TicketForm {
  titulo = '';
  descricao = '';

  constructor(private ticketService: TicketService, private router: Router) {}

  salvar() {
    this.ticketService.addTicket(this.titulo, this.descricao);
    this.router.navigate(['/tickets']);
  }
}