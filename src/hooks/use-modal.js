import { useState } from 'react';

export default function useModal(initialData = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(initialData);

  const open = (data = {}) => {
    setModalData(data);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return {
    open,
    close,
    props: {
      isOpen,
      onRequestClose: close,
    },
    data: modalData,
  };
}
