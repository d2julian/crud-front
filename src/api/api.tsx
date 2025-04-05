import { Client, ClientPost, Hotel, HotelPost, Booking, BookingPost } from '@/types';

const hotelBaseUrl = 'http://localhost:3000/api/hotels';
const clientBaseUrl = 'http://localhost:3000/api/clients';
const bookingBaseUrl = 'http://localhost:3000/api/bookings';

const fetchItems = async <T,>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Se he producido un error al recuperar los datos');
  }
  return response.json() as Promise<T>;
};

const createItem = async <T, P>(item: P, url: string): Promise<T> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error('Se he producido un error al guardar');
  }
  return response.json() as Promise<T>;
};

const updateItem = async <T, P>(id: number, item: P, url: string): Promise<T> => {
  const response = await fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error('Se he producido un error al guardar');
  }
  return response.json() as Promise<T>;
};

const deleteItem = async (id: number, url: string): Promise<void> => {
  const response = await fetch(`${url}/${id}`, { method: 'DELETE' });
  if (!response.ok) {
    throw new Error('Se he producido un error al eliminar');
  }
};

export const fetchHotels = async (): Promise<Hotel[]> => fetchItems<Hotel[]>(hotelBaseUrl);
export const createHotel = async (hotel: HotelPost): Promise<Hotel> => createItem<Hotel, HotelPost>(hotel, hotelBaseUrl);
export const updateHotel = async (id: number, hotel: HotelPost): Promise<Hotel> => updateItem<Hotel, HotelPost>(id, hotel, hotelBaseUrl);
export const deleteHotel = async (id: number): Promise<void> => deleteItem(id, hotelBaseUrl);

export const fetchClients = async (): Promise<Client[]> => fetchItems<Client[]>(clientBaseUrl);
export const createClient = async (client: ClientPost): Promise<Client> => createItem<Client, ClientPost>(client, clientBaseUrl);
export const updateClient = async (id: number, client: ClientPost): Promise<Client> => updateItem<Client, ClientPost>(id, client, clientBaseUrl);
export const deleteClient = async (id: number): Promise<void> => deleteItem(id, clientBaseUrl);

export const fetchBookings = async (): Promise<Booking[]> => fetchItems<Booking[]>(bookingBaseUrl);
export const createBooking = async (booking: BookingPost): Promise<Booking> => createItem<Booking, BookingPost>(booking, bookingBaseUrl);
export const updateBooking = async (id: number, booking: BookingPost): Promise<Booking> => updateItem<Booking, BookingPost>(id, booking, bookingBaseUrl);
export const deleteBooking = async (id: number): Promise<void> => deleteItem(id, bookingBaseUrl);
