import React from 'react';
import './modal.css';
import Botao from '../botao';
import { Modal } from '@mui/material';
import { toast } from 'react-hot-toast';

export default function CustomModal({
  setModalOpen,
  modalOpen,
  produtoSelecionado,
  adicionarCarrinho,
}) {
  function aoAdicionarCarrinho() {
    adicionarCarrinho(produtoSelecionado);
    setModalOpen(false);
    toast.success('Produto Adicionado');
  }

  return (
    <Modal
      className="modal"
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="conteudo">
        <p className="nome-produto">{produtoSelecionado?.nome}</p>
        <div className="informacoes-produto">
          <img className="img-modal" src={produtoSelecionado?.img} alt="" />
          <div className="spans-produto">
            <span>24 cm</span>
            <span>Preço: R${produtoSelecionado?.preco}</span>

            <div className="botoes-produto">
              <Botao aparencia="ghost" onClick={() => setModalOpen(false)}>
                Fechar
              </Botao>
              <Botao onClick={aoAdicionarCarrinho}>Adicionar ao carrinho</Botao>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
