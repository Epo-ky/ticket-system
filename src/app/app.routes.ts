import { Routes } from '@angular/router';
import {TicketList} from './pages/ticket-list/ticket-list';
import { TicketForm } from './pages/ticket-form/ticket-form';
import { TicketDetail } from './pages/ticket-detail/ticket-detail';


export const routes: Routes = [
  { path: '', redirectTo: 'tickets', pathMatch: 'full' },
  { path: 'tickets', component: TicketList },
  { path: 'tickets/novo', component: TicketForm },
  { path: 'tickets/:id', component: TicketDetail }
];


