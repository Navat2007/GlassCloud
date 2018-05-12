import {Reception} from './reception';

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
