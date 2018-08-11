export class Material {
  id: string;
  depth: number;
  length: number;
  width: number;
  price: number;
  description: string;
  color: MaterialColor;
  type: MaterialType;
}

export class MaterialColor {
  id: string;
  name: string;
}

export class MaterialType {
  id: string;
  name: string;
}
