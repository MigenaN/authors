import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AuthorList.css';

const AuthorList = ({ authors, setAuthors }) => {
const deleteAuthor = (authorId) => {
  axios.delete(`http://localhost:8000/api/authors/${authorId}`)
      .then((res) => {
      setAuthors((prevAuthors) => prevAuthors.filter((author) => author._id !== authorId));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get('http://localhost:8000/api/authors')
      .then((res) => {
        setAuthors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setAuthors]);


return (
  <div>
    {authors.map((author, index) => (
      <div className="author-item" key={index}>
        <Link to={`/authors/${author._id}`}>{author.name}</Link>
        <span className="action-separator">|</span>
        <Link to={`/edit/${author._id}`} className="action-link">Edit</Link>
        <span className="action-separator">|</span>
        <button onClick={() => deleteAuthor(author._id)} className="action-button">Delete</button>
      </div>
    ))}
  </div>
);
};


export default AuthorList;
