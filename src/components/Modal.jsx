import React from 'react';
import styles from '../Modal.module.css';

const Modal = ({ isOpen, setOpenModal, children }) => {
  function fecharModal() {
    setOpenModal(!isOpen);
  }

  if (isOpen) {
    return (
      <div className={styles.backgroundModal}>
        <div className={styles.modal}>
          {children}
        </div>
      </div>
    );
  }
  return null;
};

export default Modal