import React from "react";

interface ModalPros {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const Modal = ({ isOpen, onClose, children }: ModalPros) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 shadow-lg ">
        {children}

        <button
          onClick={onClose}
         className="mt-4 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white cursor-pointer transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
        
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Modal;
