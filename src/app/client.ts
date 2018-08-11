export class Client {
  id: string;
  name: string;
  inn: number;
  account: string;
  phone: string;
  email: string;
  description: string;
  discount: number;
  type: ClientType;
}

export class ClientType {
  id: string;
  name: string;
}


