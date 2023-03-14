import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, Modal } from './MainMdal.styled';

const modalRoot = document.querySelector('#modal-root');

const MainModal = ({ closeModal, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  });

  const handleKeydown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <Overlay onClick={onBackdropClick}>
      <Modal>{children}</Modal>
    </Overlay>,
    modalRoot
  );
};

export default MainModal;

MainModal.propTypes = {
  children: PropTypes.node,
  closeModal: PropTypes.func.isRequired,
};
