import { useState, useCallback } from 'react';

interface IModal {
  children: (
    isOpen: boolean,
    openModal: () => void,
    closeModal: () => void
  ) => JSX.Element;
}

const Modal = (props: IModal) => {
  const [isOpen, setOpen] = useState(false);

  const openModal = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, [setOpen])

  return (
    props.children(isOpen, openModal, closeModal)
  )
}

export default Modal;