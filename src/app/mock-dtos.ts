import {Company} from './company';
import {Reception} from './reception';
import {Order} from './order';
import {Client} from './client';
import {Material, MaterialColor, MaterialType} from './material';
import {Process, ProcessType} from './process';
import {User} from './user';

export const companies: Company[] = [
  {id: 1, name: 'Рога и копыта'}
];

export const receptions: Reception[] = [
  {id: 1, name: 'Савеловская', orderNumPrefix: 'САВА', desc: 'Савеловская', address: 'м. Савеловская', phone: '911', company: companies[0]},
  {id: 2, name: 'Савеловская', orderNumPrefix: 'САВА', desc: 'Савеловская', address: 'м. Савеловская', phone: '911', company: companies[0]},
  {id: 3, name: 'Савеловская', orderNumPrefix: 'САВА', desc: 'Савеловская', address: 'м. Савеловская', phone: '911', company: companies[0]},
];

export const clients: Client[] = [
  {id: 1, name: 'Иванов', inn: '11111', account: '22222', phone: '11111', email: 'm@m.ru', desc: 'client', discount: '10%', type: 'Юр.лицо'},
  {id: 2, name: 'Иванов', inn: '11111', account: '22222', phone: '11111', email: 'm@m.ru', desc: 'client', discount: '10%', type: 'Юр.лицо'},
  {id: 3, name: 'Иванов', inn: '11111', account: '22222', phone: '11111', email: 'm@m.ru', desc: 'client', discount: '10%', type: 'Юр.лицо'},
];
export const orders: Order[] = [
  { id: 1, name: 'Name 1' , number: 'Number 1', desc: 'Desc 1', summa: '100', updateDate: '2011-01-01', client: clients[0], receptionOfOrder: receptions[0], discount: '10%', discountSum: '90'},
  { id: 2, name: 'Name 2' , number: 'Number 2', desc: 'Desc 1', summa: '100', updateDate: '2011-01-01', client: clients[1], receptionOfOrder: receptions[0], discount: '10%', discountSum: '90'},
  { id: 3, name: 'Name 3' , number: 'Number 3', desc: 'Desc 1', summa: '100', updateDate: '2011-01-01', client: clients[0], receptionOfOrder: receptions[0], discount: '10%', discountSum: '90'},
  { id: 4, name: 'Name 4' , number: 'Number 4', desc: 'Desc 1', summa: '100', updateDate: '2011-01-01', client: clients[1], receptionOfOrder: receptions[0], discount: '10%', discountSum: '90'},
];

export const materialColors: MaterialColor[] = [
  {id: 1, name: 'blue'},
  {id: 2, name: 'green'},
];

export const materialTypes: MaterialType[] = [
  {id: 1, name: 'mirror'},
  {id: 2, name: 'wood'},
];

export const materials: Material[] = [
  {id: 1, name: 'mirror 1', color: materialColors[0], desc: '', length: 1, width: 2, price: '100', depth: 3, type: materialTypes[0]},
  {id: 2, name: 'mirror 2', color: materialColors[1], desc: '', length: 1, width: 2, price: '100', depth: 3, type: materialTypes[1]},
  {id: 3, name: 'mirror 3', color: materialColors[0], desc: '', length: 1, width: 2, price: '100', depth: 3, type: materialTypes[0]},
];


export const processTypes: ProcessType[] = [
  {id: 1, name: 'сверление', desc: ''},
  {id: 2, name: 'долбление', desc: ''},
];

export const processes: Process[] = [
  {id: 1, depth: 2, price: 100, desc: '', type: processTypes[0], material: materials},
  {id: 2, depth: 2, price: 100, desc: '', type: processTypes[1], material: materials},
  {id: 3, depth: 2, price: 100, desc: '', type: processTypes[0], material: materials},
];


export const users: User[] = [
  {id: 1, name: 'user 1', comment: 'comment', login: 'login_1', email: 'u@u.ru', phone: '11111', enabled: true},
  {id: 2, name: 'user 2', comment: 'comment', login: 'login_2', email: 'u@u.ru', phone: '11111', enabled: true},
  {id: 3, name: 'user 3', comment: 'comment', login: 'login_3', email: 'u@u.ru', phone: '11111', enabled: true},
];
