export class Material {
  id: number;
  depth: number;
  length: number;
  width: number;
  price: number;
  desc: string;
  // name: string;
  color: MaterialColor;
  type: MaterialType;
}

export class MaterialColor {
  id: number;
  name: string;
}

export class MaterialType {
  id: number;
  name: string;
}
