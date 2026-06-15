import { CommonModule } from '@angular/common';
import { Ticket } from '../../models/ticket.model';
import { TicketService } from '../../services/ticket';
import { RouterModule } from '@angular/router';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule, RouterModule, DragDropModule],
  templateUrl: './ticket-list.html',
  styleUrl: './ticket-list.css'
})
export class TicketList implements OnInit {
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) {
    this.tickets = this.ticketService.getTickets();
    
  }

  abertos: Ticket[] = [];
  emAndamento: Ticket[] = [];
  fechados: Ticket[] = [];

ngOnInit() {
  const todos = this.ticketService.getTickets();
  this.abertos = todos.filter(t => t.status === 'aberto');
  this.emAndamento = todos.filter(t => t.status === 'em_andamento');
  this.fechados = todos.filter(t => t.status === 'fechado');
}

drop(event: CdkDragDrop<Ticket[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
}