export interface KartPart {
  name: string;
  type?: string;
  imageURL: string;
  selectable: boolean;
  id: number;
  golden?: boolean;
  dlc?: boolean;
}
