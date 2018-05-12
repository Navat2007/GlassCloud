import {Material} from './material';

export class Process {
  id: number;
  depth: number;
  price: number;
  desc: string;
  type: ProcessType;
  material: Material[];
}

export class ProcessType {
  id: number;
  name: string;
  desc: string;
}
