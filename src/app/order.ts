import {Material} from './material';
import {Process} from './process';

export class Order {
  id: string;
  number: string;
  description: string;
  accountNumber: string;
  discount: number;
  discountSum: number;
  count: number;
  summa: number;
  area: number;
  perimeter: number;
  lastUpdated: string;
  reception: string;
  receptionId: string;
  clientName: string;
  clientId: string;
  items: OrderItem[];
  deleted: boolean;
}

export class OrderItem {
  id: string;
  description: string;
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
  orderId: string;
  materialId: string;
  deleted: boolean;
}
