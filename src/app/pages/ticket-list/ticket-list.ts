import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ticket } from '../../models/ticket.model';
import { TicketService } from '../../services/ticket';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-list.html',
  styleUrl: './ticket-list.css'
})
export class TicketList {
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) {
    this.tickets = this.ticketService.getTickets();
  }
}