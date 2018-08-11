import {Material} from './material';

export class Process {
  id: string;
  depth: number;
  price: number;
  desc: string;
  type: ProcessType;
  material: Material[];
}

export class ProcessType {
  id: string;
  name: string;
  desc: string;
}
