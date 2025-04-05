import { ReactNode } from 'react';

type ModalProps = {
  isOpen: boolean;
  title: string;
  children: ReactNode;
};

const Modal = ({ isOpen, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <div className="flex justify-center items-center">
          <h2 className="text-lg font-bold">{title}</h2>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
