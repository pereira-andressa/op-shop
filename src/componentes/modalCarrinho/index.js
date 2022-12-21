import { Modal } from '@mui/material';
import React from 'react';
import { toast } from 'react-hot-toast';
import Botao from '../botao';
import ProdutoCarrinho from '../produtoCarrinho';

export default function ModalCarrinho({ produtos, modalOpen, setModalOpen }) {
  function finalizarCompra() {
    setModalOpen(false);
    toast.success('Compra efetuada');
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
        <h2>Meu Carrinho</h2>
        {produtos?.map((produto) => {
          return <ProdutoCarrinho produto={produto} key={produto.nome} />;
        })}
        <Botao aparencia="ghost" onClick={() => setModalOpen(false)}>
          Fechar
        </Botao>
        <Botao onClick={finalizarCompra}>Finalizar Compra</Botao>
      </div>
    </Modal>
  );
}
