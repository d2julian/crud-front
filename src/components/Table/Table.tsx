import { ReactNode } from 'react';
import { MdAddCircle } from 'react-icons/md';

type TableProps = {
  thead: ReactNode;
  tbody: ReactNode[];
  title: string;
  openModal: () => void;
};

const Table = ({ thead, tbody, title, openModal }: TableProps) => {
  return (
    <div className="p-10 m-5">
      <div className="bg-white relative shadow-lg rounded-lg border border-slate-300">
        <div className="flex items-center justify-between p-4">
          <span className="font-bold text-blue-700 lg:text-xl sm:text-base">{title}</span>
          <div className="flex justify-end">
            <div className="flex items-center">
              <button onClick={openModal} className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded lg:text-base xs:text-xs">
                <MdAddCircle />
                Añadir
              </button>
            </div>
            <div className="flex items-center"></div>
          </div>
        </div>
        {thead && tbody?.length > 0 ? (
          <table className="bg-white">
            <thead className="bg-stone-100">{thead}</thead>
            <tbody>{tbody}</tbody>
          </table>
        ) : (
          <p className="text-center font-semibold lg:min-w-[500px] xs:min-w-[300px]">No se han encontrado datos</p>
        )}
      </div>
    </div>
  );
};

export default Table;
