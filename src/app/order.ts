import {Reception} from './reception';
import {Client} from './client';

export class Order {
  id: number;
  name: string;
  number: string;
  desc: string;
  accountNumber: string;
  discount: string;
  discountSum: string;
  count: number;
  summa: number;
  area: number;
  perimeter: number;
  updateDate: string;
  receptionOfOrder: Reception;
  client: Client;
}

export class OrderItem {
  id: number;
  desc: string;
  number: string;
  length: number;
  width: number;
  count: number;
  area: number;
  perimeter: number;
  processSum: number;
  summa: number;
  material: string;
}
