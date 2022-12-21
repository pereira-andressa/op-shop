import React from 'react';
import './produtocarrinho.css';
export default function ProdutoCarrinho({ produto }) {
  return (
    <div className="produto-carrinho">
      <img src={produto.img} alt="" />
      <p>{produto.nome}</p>
      <p>{produto.preco}</p>
      <p>{produto.frete}</p>
      <p>{produto.quantidade}</p>
    </div>
  );
}
