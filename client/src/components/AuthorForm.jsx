import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const AuthorForm = ({ authors, setAuthors }) => {
const [name, setName] = useState('');
const navigate = useNavigate(); 

const createAuthor = () => {
  axios.post('http://localhost:8000/api/authors', {name,})
  .then((res) => {
  const updatedAuthors = Array.isArray(authors) ? [...authors, res.data] : [res.data];
    setAuthors(updatedAuthors);
    setName('');
    navigate('/');
  })
  .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Favourite Author</h1>
      <h3>Add a new Author</h3>
      <p>
        <label>Name: </label><br />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </p>
      <Link to="/"><button type="button" onClick={createAuthor}>Submit</button></Link>
      <Link to="/"><button type="button" onClick>Cancel</button></Link>
    </div>
  );
};

export default AuthorForm;





