import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Cards from './components/cards';
import NavbarContainer from './components/navbar';
import { Container } from 'react-bootstrap';
import MoviesFigure from './components/movies';

function App() {  

  
  return (
    <>
     <NavbarContainer/>
     <Container>
     <MoviesFigure/>
     </Container>

</>
   

  )
  
}

export default App
