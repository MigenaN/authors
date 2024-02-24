import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthorForm from './components/AuthorForm'
import AuthorList from './components/AuthorList';
import AuthorDetails from './components/AuthorDetails';
import AuthorUpdate from './components/AuthorUpdate';
import Main from './view/Main';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <BrowserRouter>
            <Routes>
	        <Route element={<Main/>} path="/" />
	        <Route element={<AuthorForm/>} path="/create" />
          <Route element={<AuthorList/>} path="/authors" />
          <Route element={<AuthorDetails/>} path="/authors/:id" />
          <Route element={<AuthorUpdate/>} path="/edit/:id"/>
            </Routes>
    	</BrowserRouter>
        </div>
    </>
  )
}

export default App
