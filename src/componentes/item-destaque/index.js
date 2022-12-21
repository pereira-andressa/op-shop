import React from 'react';
import './destaque.css';

export default function Itemdestaque({ destaque }) {
  return (
    <div className="destaque">
      <img src={destaque.img} alt="" />
      <h2>{destaque.nome}</h2>
      <p className="p-destaque">{destaque.preco}</p>
      <p className="p-destaque">{destaque.frete}</p>
    </div>
  );
}
