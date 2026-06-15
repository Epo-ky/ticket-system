import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket.model';

@Injectable({providedIn: 'root',
})
export class TicketService {
  private tickets: Ticket[] = [
    {id: 1, titulo: 'Erro no login', descricao: 'Usuário não consegue logar', status: 'aberto', criadoEm: new Date()},
    {id: 2, titulo: 'Dashboard não carrega', descricao: 'Dashboard não carrega', status: 'em_andamento', criadoEm: new Date()},
    {id: 3, titulo: 'Botão quebrado', descricao: 'Botão de salvar não funciona', status: 'fechado', criadoEm: new Date()}
  ];

  getTickets(): Ticket[] {
    return this.tickets;
  }

}
