import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return React.createContext('a', { href: 'https://google.com' }, 'Google');
}

ReactDOM.render('Teste', document.getElementById('root'));
