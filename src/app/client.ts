export class Client {
  id: string;
  name: string;
  inn: string;
  account: string;
  phone: string;
  email: string;
  desc: string;
  discount: number;
  type: ClientType;
  creationDate: Date;
  updateDate: Date;
}

export class ClientType {
  id: string;
  name: string;
}


