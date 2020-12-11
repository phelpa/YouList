import { useState, useCallback } from 'react';

const useModal = (): [boolean, () => void, () => void] => {
  const [isOpen, setOpen] = useState(false);

  const openModal = useCallback(() => {
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  return [isOpen, openModal, closeModal];
};

export default useModal;
