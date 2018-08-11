export class JsonItem<T> {
  data: T;
}

export class JsonItemResponse<T> extends JsonItem<T> {
  status: string;
  message: string;
}
