import { useCrud } from '@/hooks/useCrud';
import { fetchClients, createClient, updateClient, deleteClient } from '@/api/api';
import { Client, ClientPost, HeadersTable } from '@/types';
import Crud from '@/components/Crud/Crud';

const ClientPage = () => {
  const { isLoading, addItem, updateItem, deleteItem, data: clients } = useCrud<Client, ClientPost>(fetchClients, createClient, updateClient, deleteClient);

  const headers: HeadersTable<Client>[] = [
    { name: 'Nombre', property: 'name', type: 'input' },
    { name: 'Dirección', property: 'address', type: 'input' },
    { name: 'Teléfono', property: 'phone', type: 'input' },
  ];

  return <Crud addItem={addItem} deleteItem={deleteItem} headers={headers} isLoading={isLoading} items={clients} title="Clientes" updateItem={updateItem} />;
};

export default ClientPage;
