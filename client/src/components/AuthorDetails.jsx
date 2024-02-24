import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const AuthorDetails = ({ authors, setAuthors }) => {
const [author, setAuthor] = useState(null);
const navigate = useNavigate();
const { id } = useParams();

const fetchAuthorDetail = async () => {
    try {
    const response = await axios.get(`http://localhost:8000/api/authors/${id}`);
    setAuthor(response.data);
    } catch (error) {
    console.error('Error fetching author detail:', error);
    }
};

const deleteAuthor = async () => {
    try {
    await axios.delete(`http://localhost:8000/api/authors/${id}`);
    setAuthors((prevAuthors) => prevAuthors.filter((a) => a._id !== id));
    navigate('/');
    } 
    catch (error) {console.error('Error deleting author:', error);
    }
};

useEffect(() => {
fetchAuthorDetail();
}, [id]);

return (
    <div>
        <h2>Author</h2>
        <div>
            <h3>{author && author.name}</h3>
            <Link to="/"><button onClick={deleteAuthor}>Delete</button></Link>
            <Link to="/"><button type="button" onClick>Cancel</button></Link>
            
        </div>
    </div>
);
};

export default AuthorDetails;
