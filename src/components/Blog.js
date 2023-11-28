// Blog.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import MainModal from './MainModal';
import ImageModal from './ImageModal';
import { addPost } from '../redux/actions';
import '../styles/blog.css';

const Blog = ({ posts, addPost }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openImageModal = () => {
    setIsImageModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = () => {
    const newPost = {
      title: title,
      description: description,
      image: image,
    };

    // Добавление поста через Redux
    addPost(newPost);
    closeModal();
    setTitle('');
    setDescription('');

  };

  const handleImageClick = (post) => {
    // Открывает картинку в полном размере
    setModalImageUrl(URL.createObjectURL(post.image));
    openImageModal();
  };

  return (
    <div>
      <header id="header">
        <button id="writePostBtn" onClick={openModal}>Write Post</button>
      </header>

      <MainModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Написать пост"
        title={title}
        handleTitleChange={handleTitleChange}
        description={description}
        handleDescriptionChange={handleDescriptionChange}
        handleImageChange={handleImageChange}
        handleSubmit={handleSubmit}
        closeModal={closeModal}
      />
       
      <div>
        {/* Отображаем посты на главной странице */}
        {posts.map((post, index) => (
          <div className='post' key={index}>

            {post.image && <img id='postedImg'
              src={URL.createObjectURL(post.image)} 
              alt="Пост" 
              style={{ width: '350px', cursor: 'pointer' }}
              onClick={() => handleImageClick(post)} />}

            <div id='postTitle'>
              <h3>{post.title}</h3>
            </div>
            
            <div id='postDesc'>
              <p>{post.description}</p>
            </div>

          </div>
        ))}
      </div>

      <ImageModal 
        isOpen={isImageModalOpen} 
        onClose={closeImageModal} 
        imageUrl={modalImageUrl} />

    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = {
  addPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
