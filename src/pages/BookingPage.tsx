import { useCrud } from '@/hooks/useCrud';
import { fetchBookings, createBooking, updateBooking, deleteBooking, createClient, createHotel, deleteClient, deleteHotel, fetchClients, fetchHotels, updateClient, updateHotel } from '@/api/api';
import { Booking, BookingPost, Client, ClientPost, HeadersTable, Hotel, HotelPost } from '@/types';
import Crud from '@/components/Crud/Crud';

const BookingPage = () => {
  const { isLoading, addItem, updateItem, deleteItem, data: bookings } = useCrud<Booking, BookingPost>(fetchBookings, createBooking, updateBooking, deleteBooking);
  const { data: clients } = useCrud<Client, ClientPost>(fetchClients, createClient, updateClient, deleteClient);
  const { data: hotels } = useCrud<Hotel, HotelPost>(fetchHotels, createHotel, updateHotel, deleteHotel);

  const headers: HeadersTable<Booking, Hotel, Client>[] = [
    { name: 'Hotel', property: 'hotelName', type: 'select', typeData: hotels, typeId: 'hotelId' },
    { name: 'Cliente', property: 'clientName', type: 'select', typeData: clients, typeId: 'clientId' },
    { name: 'Nombre', property: 'name', type: 'input' },
    { name: 'Direccion', property: 'address', type: 'input' },
  ];

  return <Crud<Booking, Hotel, Client> addItem={addItem} deleteItem={deleteItem} headers={headers} isLoading={isLoading} items={bookings} title="Reservas" updateItem={updateItem} />;
};

export default BookingPage;
