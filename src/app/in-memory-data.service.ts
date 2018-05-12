import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const order = [
      { id: 1, name: 'Name 1' , number: 'Number 1', desc: 'Desc 1', summa: '1', updateDate: '2011-01-01'},
      { id: 2, name: 'Name 1' , number: 'Number 1', desc: 'Desc 1', summa: '1', updateDate: '2011-01-01'},
      { id: 3, name: 'Name 1' , number: 'Number 1', desc: 'Desc 1', summa: '1', updateDate: '2011-01-01'},
      { id: 4, name: 'Name 1' , number: 'Number 1', desc: 'Desc 1', summa: '1', updateDate: '2011-01-01'},
      { id: 4, name: 'Name 1' , number: 'Number 1', desc: 'Desc 1', summa: '1', updateDate: '2011-01-01'},
      { id: 4, name: 'Name 1' , number: 'Number 1', desc: 'Desc 1', summa: '1', updateDate: '2011-01-01'},
      { id: 4, name: 'Name 1' , number: 'Number 1', desc: 'Desc 1', summa: '1', updateDate: '2011-01-01'},
      { id: 4, name: 'Name 1' , number: 'Number 1', desc: 'Desc 1', summa: '1', updateDate: '2011-01-01'},
      { id: 4, name: 'Name 1' , number: 'Number 1', desc: 'Desc 1', summa: '1', updateDate: '2011-01-01'},
      { id: 4, name: 'Name 1' , number: 'Number 1', desc: 'Desc 1', summa: '1', updateDate: '2011-01-01'},
      { id: 4, name: 'Name 1' , number: 'Number 1', desc: 'Desc 1', summa: '1', updateDate: '2011-01-01'},
      { id: 4, name: 'Name 1' , number: 'Number 1', desc: 'Desc 1', summa: '1', updateDate: '2011-01-01'},
      { id: 4, name: 'Name 1' , number: 'Number 1', desc: 'Desc 1', summa: '1', updateDate: '2011-01-01'},
      { id: 4, name: 'Name 1' , number: 'Number 1', desc: 'Desc 1', summa: '1', updateDate: '2011-01-01'},
      { id: 4, name: 'Name 1' , number: 'Number 1', desc: 'Desc 1', summa: '1', updateDate: '2011-01-01'},
    ];
    console.log('out');
    return {order};
  }
}
