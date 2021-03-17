
import React from 'react'
import {Container} from 'react-bootstrap'

import Signup from './Signup';

function App() {
  return (
    <section className='section'>
      <img src='/images/Black Logo.png' alt='' className='img'></img>
      <h2 className='title'>Sign Up</h2>
      <div className='underline'></div>
    <Container className='d-flex align-center justify-content-center mt-5'
    style={{minHeight:'100vh'}}
    >
      <div className='w-100' style={{maxWidth:'300px'}}>
        <Signup />
        </div>
      </Container>
      </section>
  );
}

export default App;
