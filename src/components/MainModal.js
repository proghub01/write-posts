import React from 'react';
import Modal from 'react-modal';
import '../styles/mainModal.css';

const MainModal = (
  { isOpen, 
    onClose, 
    title, 
    handleTitleChange, 
    description, 
    handleDescriptionChange, 
    handleImageChange, 
    handleSubmit, 
    closeModal }) => {
  
    const customStyles = {
      content: {
        width: '50%', 
        height: '60%', 
        margin: 'auto', 
        borderRadius: '15px',
        backgroundColor: '#F8F8F8',
      },
    };
    
    return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Полный размер изображения"
      style={customStyles}
    >
      <div className='mainModal'>
        <h2>Write Your Post</h2>

        <label className='mainModalTitle'>
          <input 
            type="text" 
            value={title} 
            onChange={handleTitleChange}
            placeholder='Title' />
        </label>

        <br />

        <label className='mainModalDesc'>
          <textarea 
            value={description} 
            onChange={handleDescriptionChange} 
            placeholder='Description'/>
        </label>

        <br />

        <label className='mainModalImg'>
          Upload Image
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            style={{ display: 'none' }}/>
        </label>

        <br />

        <button id='publishBtn' onClick={handleSubmit}>Publish</button>
        <button id='cancelhBtn' onClick={closeModal}>Cancel</button>
      </div>
        
    </Modal>
  );
};

export default MainModal;