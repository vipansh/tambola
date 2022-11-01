import React, { ReactNode, useEffect } from 'react';

type Props = {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
};

const Modal = ({ isOpen, children, onClose }: Props) => {
  useEffect(() => {
    const close = (e: { keyCode: number }) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [onClose]);
  if (!isOpen) return null;
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto" onClick={onClose}>
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
