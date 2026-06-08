import { Routes } from '@angular/router';
import {TicketList} from './pages/ticket-list/ticket-list';
import { TicketForm } from './pages/ticket-form/ticket-form';

export const routes: Routes = [
  { path: '', redirectTo: 'tickets', pathMatch: 'full' },
  { path: 'tickets', component: TicketList },
  { path: 'tickets/novo', component: TicketForm }
];


