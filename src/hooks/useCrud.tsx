import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

type UseCrudResponse<P, T> = {
  isLoading: boolean;
  addItem: (item: P) => Promise<void>;
  updateItem: (id: number, item: P) => Promise<void>;
  deleteItem: (id: number) => Promise<void>;
  data: T[];
};

export const useCrud = <T extends { id: number }, P>(fetchItems: () => Promise<T[]>, createItem: (item: P) => Promise<P>, updatedItemById: (id: number, item: P) => Promise<P>, deleteItemById: (id: number) => Promise<void>): UseCrudResponse<P, T> => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    const loadItems = async () => {
      try {
        setIsLoading(true);
        const fetchedData = await fetchItems();
        setData(fetchedData);
        setIsLoading(false);
      } catch (error) {
        toast.error('Error al cargar los elementos');
        setIsLoading(false);
      }
    };
    void loadItems();
  }, [fetchItems, setData]);

  const addItem = async (item: P) => {
    try {
      setIsLoading(true);
      await createItem(item);
      const updatedItems = await fetchItems();
      setData(updatedItems);
      toast.success('Elemento guardado correctamente');
      setIsLoading(false);
    } catch (error) {
      toast.error('Error al guardar el elemento');
      setIsLoading(false);
    }
  };

  const updateItem = async (id: number, item: P) => {
    try {
      setIsLoading(true);
      await updatedItemById(id, item);
      const updatedItems = await fetchItems();
      setData(updatedItems);
      toast.success('Elemento modificado correctamente');
      setIsLoading(false);
    } catch (error) {
      toast.error('Error al modificar el elemento');
      setIsLoading(false);
    }
  };

  const deleteItem = async (id: number) => {
    try {
      setIsLoading(true);
      await deleteItemById(id);
      const updatedItems = await fetchItems();
      setData(updatedItems);
      setIsLoading(false);
      toast.success('Elemento eliminado correctamente');
    } catch (error) {
      toast.error('Error al eliminar el elemento');
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    addItem,
    updateItem,
    deleteItem,
    data,
  };
};
