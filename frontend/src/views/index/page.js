import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

const Index = () => {
  
  return (
    <header id="welcome">
      <div class="container">
          <div class="text">
              <div class="intro-heading">Bienvenido al sistema de ingreso CINE-CUC</div>
              <Link to="/signIn" variant="body2">
                <button class="btn btn-outline-dark btn-xl text-uppercase ml-2 mr-2" type="button">INGRESAR</button>
              </Link>
          </div>
      </div>
    </header>
  );
};

export default Index;