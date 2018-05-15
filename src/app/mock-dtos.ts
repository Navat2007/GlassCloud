import {Company} from './company';
import {Reception} from './reception';
import {Client} from './client';
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
  {id: 1, name: 'Иванов', inn: '11111', account: '22222', phone: '11111', email: 'm@m.ru', desc: 'client', discount: 10, type: 'Юр.лицо'},
  {id: 2, name: 'Иванов', inn: '11111', account: '22222', phone: '11111', email: 'm@m.ru', desc: 'client', discount: 5, type: 'Юр.лицо'},
  {id: 3, name: 'Иванов', inn: '11111', account: '22222', phone: '11111', email: 'm@m.ru', desc: 'client', discount: 0, type: 'Юр.лицо'},
];

export const users: User[] = [
  {id: 1, name: 'user 1', comment: 'comment', login: 'login_1', email: 'u@u.ru', phone: '11111', enabled: true},
  {id: 2, name: 'user 2', comment: 'comment', login: 'login_2', email: 'u@u.ru', phone: '11111', enabled: true},
  {id: 3, name: 'user 3', comment: 'comment', login: 'login_3', email: 'u@u.ru', phone: '11111', enabled: true},
];
