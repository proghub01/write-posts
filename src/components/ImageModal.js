import React from 'react';
import Modal from 'react-modal';

const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Полный размер изображения"
    >
      <div>
        <img 
          src={imageUrl} 
          alt="Полный размер изображения" 
          style={{ width: '100%' }} />
      </div>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default ImageModal;
