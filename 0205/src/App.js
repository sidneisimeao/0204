import React from 'react';
import Customer from './Customer';

const brenda = {
  cliente: 'Brenda',
  idade: 26,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 11500' },
  ],
  ativa: true,
};

const sidnei = {
  cliente: 'Sidnei',
  idade: 34,
  compras: [
    { nome: 'PC Gamer', preco: 'R$ 9000' },
    { nome: 'Monitor', preco: 'R$ 300' },
    { nome: 'Caneca', preco: 'R$ 15' },
  ],
  ativa: false,
};

const App = () => (
  <>
    <Customer {...sidnei} />
    <hr />
    <Customer {...brenda} />
  </>
);

export default App;
