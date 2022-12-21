import React from 'react';
import './botao.css';

export default function Botao({ children, aparencia, ...rest }) {
  return (
    <button {...rest} className={aparencia === 'ghost' ? 'ghost' : ''}>
      {children}
    </button>
  );
}
