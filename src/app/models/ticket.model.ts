export interface Ticket {
  id: number;
  titulo: string;
  descricao: string;
  status: 'aberto' | 'em_andamento' | 'fechado';
  criadoEm: Date;
}