
export interface Car {
  id: string;
  title: string;
  year: number;
  engine: string;
  mileage: string;
  price: number;
  auction: 'Copart' | 'IAAI';
  image: string;
  lot: string;
}

export interface ShippingRate {
  port: string;
  price: number;
  days: string;
}

export enum AuctionType {
  COPART = 'Copart',
  IAAI = 'IAAI'
}
