import React, { useState } from 'react';
import { pegaItemAleatorioArray, produtos } from '../../constants';
import Botao from '../botao';
import Header from '../header';
import Itemdestaque from '../item-destaque';
import CustomModal from '../modal';
import ModalCarrinho from '../modalCarrinho';
import Produto from '../produto';
import './home.css';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenCarrinho, setModalOpenCarrinho] = useState(false);
  const [mostrarProdutos, setMostrarProdutos] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState();
  const [produtoCarrinho, setProdutoCarrinho] = useState([]);
  const destaque1 = pegaItemAleatorioArray(produtos);
  const destaque2 = pegaItemAleatorioArray(produtos);
  const destaque3 = pegaItemAleatorioArray(produtos);
  console.log(produtoCarrinho);

  async function scrollTodosProdutos() {
    await setMostrarProdutos(true);

    const section = document.querySelector('#NossosProdutos');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function adicionarAoCarrinho(produto) {
    setProdutoCarrinho([...produtoCarrinho, produto]);
  }

  return (
    <div className="home">
      <Header abrirCarrinho={setModalOpenCarrinho} />
      <h1 className="mais-vendidos">Mais Vendidos</h1>

      <div className="produtos">
        <Itemdestaque destaque={destaque1}></Itemdestaque>
        <Itemdestaque destaque={destaque2}></Itemdestaque>
        <Itemdestaque destaque={destaque3}></Itemdestaque>
      </div>
      <Botao onClick={scrollTodosProdutos}>Ver todos os produtos</Botao>

      {mostrarProdutos && (
        <>
          <h1 className="nossos-produtos" id="NossosProdutos">
            Nossos produtos
          </h1>
          <div className="filtros">
            <Botao aparencia="ghost">Preço min</Botao>
            <Botao>Preço max</Botao>
            <Botao>Frete grátis</Botao>
            <Botao>Categorias</Botao>
            <Botao>Filtrar</Botao>
            <Botao>Limpar filtros</Botao>
          </div>

          <div className="todos-produtos">
            {produtos.map((produto) => {
              return (
                <Produto
                  guardarproduto={setProdutoSelecionado}
                  key={produto.nome}
                  produto={produto}
                  setModalOpen={setModalOpen}
                ></Produto>
              );
            })}
          </div>
        </>
      )}

      <CustomModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        produtoSelecionado={produtoSelecionado}
        adicionarCarrinho={adicionarAoCarrinho}
      ></CustomModal>
      <ModalCarrinho
        setModalOpen={setModalOpenCarrinho}
        modalOpen={modalOpenCarrinho}
        produtos={produtoCarrinho}
      ></ModalCarrinho>
    </div>
  );
}
