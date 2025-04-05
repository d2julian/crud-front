import React from 'react';

type FieldProps<T> = {
  property: string;
  name: string;
  editItem: T;
  changeItemHandler: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  type: 'select' | 'input';
  typeId?: string;
  typeData?: { id: string; name: string }[];
};

const Field = <T extends object>({ type, property, name, editItem, changeItemHandler, typeId, typeData }: FieldProps<T>) => {
  switch (type) {
    case 'select':
      return (
        <select required {...(editItem ? { defaultValue: editItem[typeId] } : { defaultValue: '' })} onChange={changeItemHandler} className="shadow border rounded w-full py-2 px-3 text-gray-700" name={String(property)} id={String(typeId)}>
          {!editItem && (
            <option value="" disabled>
              Elija un valor
            </option>
          )}
          {typeData?.map(v => (
            <option key={v.id} value={v.id}>
              {v.name}
            </option>
          ))}
        </select>
      );
    case 'input':
    default:
      return (
        <input
          required
          className={`shadow border rounded w-full py-2 px-3 text-gray-700 ${property === 'id' ? 'bg-slate-200' : ''}`}
          id={String(property)}
          type="text"
          placeholder={name}
          onChange={changeItemHandler}
          maxLength={30}
          defaultValue={editItem ? editItem[property] : ''}
        />
      );
  }
};

export default Field;
