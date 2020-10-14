import React from 'react';
import ReactDOM from 'react-dom';

//IMPORTANDO A APP
import App from './App';


// FUNÇÃO QUE RENDERIZA AS PAGINA CONFORME RECEBE DA APP
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
