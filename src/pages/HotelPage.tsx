import { useCrud } from '@/hooks/useCrud';
import { fetchHotels, createHotel, updateHotel, deleteHotel } from '@/api/api';
import { HeadersTable, Hotel, HotelPost } from '@/types';
import Crud from '@/components/Crud/Crud';

const HotelPage = () => {
  const { isLoading, addItem, updateItem, deleteItem, data: hotels } = useCrud<Hotel, HotelPost>(fetchHotels, createHotel, updateHotel, deleteHotel);

  const headers: HeadersTable<Hotel>[] = [
    { name: 'Nombre', property: 'name', type: 'input' },
    { name: 'Dirección', property: 'address', type: 'input' },
  ];

  return <Crud addItem={addItem} deleteItem={deleteItem} headers={headers} isLoading={isLoading} items={hotels} title="Hoteles" updateItem={updateItem} />;
};

export default HotelPage;
