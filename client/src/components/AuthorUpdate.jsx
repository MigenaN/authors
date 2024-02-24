import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AuthorUpdate = ({ authors, setAuthors }) => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        setName(res.data.name);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updateAuthor = () => {
    axios.put(`http://localhost:8000/api/authors/${id}`, {
      name,
    })
      .then((res) => {
        setAuthors((prevAuthors) =>
          prevAuthors.map((author) =>
            author._id === id ? { ...author, name } : author
          )
        );
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Favourite Author</h1>
      <form onSubmit={updateAuthor}>
        <p>
          <label>Edit this Author</label><br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <Link to="/"><button type="button" onClick={updateAuthor}>Submit</button></Link>
        <Link to="/"><button type="button" onClick>Cancel</button></Link>
      </form>
    </div>
  );
};

export default AuthorUpdate;
