import React from 'react';
import Botao from '../botao';
import './produto.css';

export default function Produto({ setModalOpen, produto, guardarproduto }) {
  function maisdetalhes() {
    guardarproduto(produto);
    setModalOpen(true);
  }

  return (
    <div className="produto">
      <img src={produto.img} alt="" />

      <div className="detalhes">
        <p className="nome-produto">{produto.nome}</p>
        <Botao onClick={maisdetalhes}>Mais detalhes</Botao>
      </div>

      <div className="preco-frete">
        <p className="p-prete">Preço: R$ {produto.preco}</p>
        <p className="p-prete">Frete: {produto.frete}</p>
      </div>
    </div>
  );
}
