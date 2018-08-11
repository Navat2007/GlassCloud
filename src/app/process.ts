import {Material} from './material';

export class Process {
  id: string;
  depth: number;
  price: number;
  description: string;
  type: ProcessType;
  material: Material[];
}

export class ProcessType {
  id: string;
  name: string;
  description: string;
}
