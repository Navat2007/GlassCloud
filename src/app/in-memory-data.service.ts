import {InMemoryDbService} from 'angular-in-memory-web-api';
import {clients, orders, receptions} from './mock-dtos';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {order: orders, receptionOfOrder: receptions, client: clients};
  }
}
