import { HeadersTable } from '@/types';
import { FormEvent } from 'react';
import Field from './Field/Field';

type FormProps<T, P, S> = {
  headers: HeadersTable<T, P, S>[];
  editItem: T;
  changeItemHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitForm: (e: FormEvent<HTMLFormElement>) => void;
  closeModal: () => void;
};

const Form = <T extends object, P, S>({ headers, editItem, changeItemHandler, submitForm, closeModal }: FormProps<T, P, S>) => {
  return (
    <form onSubmit={submitForm} className="bg-white rounded p-4">
      {headers.map(header => (
        <div className="mb-4" key={header.name}>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={String(header.property)}>
            {header.name}
          </label>
          <Field key={header.name} property={String(header.property)} name={header.name} editItem={editItem} changeItemHandler={changeItemHandler} type={header.type} typeId={String(header?.typeId)} typeData={header?.typeData} />
        </div>
      ))}
      <div className="flex flex-1 justify-center p-2 gap-4">
        <button type="button" onClick={closeModal} className="bg-gray-300 hover:bg-gray-400 font-bold px-4 py-2 rounded">
          Cerrar
        </button>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
          Guardar
        </button>
      </div>
    </form>
  );
};

export default Form;
