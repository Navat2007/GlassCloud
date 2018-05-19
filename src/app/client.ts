export class Client {
  id: number;
  name: string;
  inn: string;
  account: string;
  phone: string;
  email: string;
  desc: string;
  discount: number;
  type: ClientType;
}

export class ClientType {
  id: number;
  name: string;
}


