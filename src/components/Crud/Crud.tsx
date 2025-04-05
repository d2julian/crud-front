import { useState, FormEvent } from 'react';
import { MdEditSquare, MdDelete } from 'react-icons/md';
import Modal from '@/components/Modal/Modal';
import Table from '@/components/Table/Table';
import BodyContainer from '@/components/BodyContainer/BodyContainer';
import Spinner from '@/components/Spinner/Spinner';
import { Toaster } from 'react-hot-toast';
import Form from '@/components/Form/Form';
import { HeadersTable } from '@/types';

type CrudTableProps<T, P = undefined, S = undefined> = {
  title: string;
  headers: HeadersTable<T, P, S>[];
  items: T[];
  isLoading: boolean;
  addItem: (item: Partial<T>) => Promise<void>;
  updateItem: (id: number, item: Partial<T>) => Promise<void>;
  deleteItem: (id: number) => Promise<void>;
};

const Crud = <T extends { id: number }, P, S>({ title, headers, items, isLoading, addItem, updateItem, deleteItem }: CrudTableProps<T, P, S>) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<T | null>(null);
  const [formData, setFormData] = useState<Partial<T>>({});

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setEditItem(null);
  };

  const editItemHandler = (item: T) => {
    setEditItem(item);
    setIsModalOpen(true);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editItem && formData) {
      void updateItem(editItem.id, formData);
      setFormData(null);
    }
    if (!editItem && formData) {
      void addItem(formData);
    }
    closeModal();
  };

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const deleteHandler = (id: number) => {
    void deleteItem(id);
  };

  const thead = (
    <tr className="font-bold shadow-sm lg:text-lg xs:text-xs">
      {headers.map(header => (
        <th key={header.name} className="py-3 px-6 text-left">
          {header.name}
        </th>
      ))}
      <th></th>
      <th></th>
    </tr>
  );

  const tbody = items.map(item => (
    <tr key={item.id} className="font-normal border-slate-300 border-b border-solid lg:text-base xs:text-xs">
      {headers.map(header => (
        <td key={header.property as string} className="py-3 px-6 text-left">
          {item[header.property] as string}
        </td>
      ))}
      <td className="py-5 px-10">
        <MdEditSquare className="text-blue-700 cursor-pointer" size={18} onClick={() => editItemHandler(item)} />
      </td>
      <td className="py-3 px-6">
        <MdDelete className="text-blue-700 cursor-pointer" size={18} onClick={() => deleteHandler(item.id)} />
      </td>
    </tr>
  ));

  return (
    <BodyContainer>
      <Toaster position="top-center" reverseOrder={false} />
      {isLoading && <Spinner />}
      <Modal isOpen={isModalOpen} title={!editItem ? 'Añadir' : 'Editar'}>
        <Form headers={headers} editItem={editItem} changeItemHandler={changeInputHandler} submitForm={submitHandler} closeModal={closeModal} />
      </Modal>
      <Table thead={thead} tbody={tbody} title={title} openModal={openModal} />
    </BodyContainer>
  );
};

export default Crud;
