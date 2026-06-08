import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ticket } from '../../models/ticket.model';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './ticket-list.html',
  styleUrl: './ticket-list.css',
})
export class TicketList {
  tickets: Ticket[] = [
    { id: 1, titulo: 'Erro no login', descricao: 'Usuário não consegue logar', status: 'aberto', criadoEm: new Date() },
    { id: 2, titulo: 'Tela em Branco', descricao: 'Dashboard não carrega', status: 'em_andamento', criadoEm: new Date() },
    { id: 3, titulo: 'Botão quebrado', descricao: 'O botão de salvar não funciona', status: 'fechado', criadoEm: new Date() },  
  ];
}