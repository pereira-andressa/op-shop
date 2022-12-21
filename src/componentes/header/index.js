import React from 'react';
import './header.css';

export default function Header({ abrirCarrinho }) {
  return (
    <header className="cabecalho">
      <p className="p">One Piece Shop</p>
      <div className="icons">
        <span
          onClick={() => abrirCarrinho(true)}
          className="material-symbols-outlined"
        >
          shopping_cart
        </span>
        <span className="material-symbols-outlined">menu</span>
      </div>
    </header>
  );
}
