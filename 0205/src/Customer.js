import React from 'react';

const Customer = (props) => {
  const reducer = (accumulator, { preco }) =>
    accumulator + Number(preco.replace('R$', ''));

  const total = props.compras.reduce(reducer, 0);

  return (
    <>
      <p>Nome: {props.cliente}</p>
      <p>Idade: {props.idade}</p>
      <p>
        Situação:{' '}
        <span style={{ color: props.ativa ? 'green' : 'red' }}>
          {props.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </p>
      <p>Total gasto: R$: {total}</p>
      {total > 10000 && <p>Voce gastou muito!</p>}
    </>
  );
};

export default Customer;
