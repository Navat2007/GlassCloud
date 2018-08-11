import {Reception} from './reception';
import {Client} from './client';
import {Material} from './material';
import {Process} from './process';

export class Order {
  id: string;
  name: string;
  number: string;
  description: string;
  accountNumber: string;
  discount: number;
  discountSum: number;
  count: number;
  summa: number;
  area: number;
  perimeter: number;
  updateDate: string;
  receptionOfOrder: Reception;
  client: Client;
  items: OrderItem[];
}

export class OrderItem {
  id: string;
  desc: string;
  number: number;
  length: number;
  width: number;
  count: number;
  area: number;
  perimeter: number;
  processSum: number;
  summa: number;
  material: Material;
  process: Process[];
}
