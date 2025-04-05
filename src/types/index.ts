export type Hotel = {
  id: number;
  name: string;
  address: string;
  creationAt: string;
  updatedAt: string;
};

export type HotelPost = {
  name: string;
  address: string;
};

export type Client = {
  id: number;
  name: string;
  address: string;
  phone: string;
  creationAt: string;
  updatedAt: string;
};

export type ClientPost = {
  name: string;
  address: string;
  phone: string;
};

export type Booking = {
  id: number;
  hotelId: number;
  hotelName: string;
  clientId: number;
  clientName: string;
  name: string;
  address: string;
  creationAt: string;
  updatedAt: string;
};

export type BookingPost = {
  hotelId: number;
  clientId: number;
};

export type HeadersTable<T, P = undefined, S = undefined> = {
  name: string;
  property: keyof T;
  type: 'input' | 'select';
  typeData?: P[] | S[];
  typeId?: keyof T;
};
