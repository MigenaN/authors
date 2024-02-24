import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import AuthorList from '../components/AuthorList';

const Main = () => {
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate(); 

  const handleAddAuthor = () => {

    navigate('/create');
  };

  return (
    <div>
      <h1>Favourite Author</h1>
      <a onClick={handleAddAuthor}> Add an author</a>
      <p>We have quotes by:</p>
      <AuthorList authors={authors} setAuthors={setAuthors} />
    </div>
  );
};

export default Main;