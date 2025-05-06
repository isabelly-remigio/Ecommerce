import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Cards from '../componentes/Cards';
import Filtro from '../componentes/Filtro';
import Carrossel from '../componentes/Carrossel';
import Paginas from '../componentes/Paginas';
import Header from '../componentes/Header';

const Inicio = () => {
  const [produtos, setProdutos] = useState([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const produtosPorPagina = 8;

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        const produtosLimitados = response.data.slice(0, 30);
        setProdutos(produtosLimitados);
        setProdutosFiltrados(produtosLimitados);
        setCarregando(false);
        const categoriasUnicas = [
          ...new Set(produtosLimitados.map((produto) => produto.category || 'Sem Categoria')),
        ];
        setCategorias(categoriasUnicas);
      })
      .catch(() => {
        setCarregando(false);
        setErro('Erro ao carregar os produtos. Tente novamente mais tarde.');
      });
  }, []);

  const alterarCategoria = (categoria) => {
    setProdutosFiltrados(
      categoria ? produtos.filter((p) => p.category === categoria) : produtos
    );
  };

  const limparFiltros = () => {
    setProdutosFiltrados(produtos);
    setPaginaAtual(1);
  };

  const buscarProduto = (consulta) => {
    const filtrados = produtos.filter((produto) =>
      produto.title.toLowerCase().includes(consulta.toLowerCase())
    );
    setProdutosFiltrados(filtrados);
  };

  const indiceUltimoProduto = paginaAtual * produtosPorPagina;
  const indicePrimeiroProduto = indiceUltimoProduto - produtosPorPagina;
  const produtosAtuais = produtosFiltrados.slice(indicePrimeiroProduto, indiceUltimoProduto);

  const alterarPagina = (numeroPagina) => setPaginaAtual(numeroPagina);

  return (
    <div>
      <Header onSearch={buscarProduto} />
      <Carrossel />
      <Container>
        <Row>
          <Col md={3} xs={12}>
            <Filtro categorias={categorias} onCategoryChange={alterarCategoria} onClearFilters={limparFiltros} />
          </Col>
          <Col md={9} xs={12}>
            {carregando ? (
              <div className="text-center">
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Carregando...</p>
              </div>
            ) : erro ? (
              <div className="text-center">
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'red' }}>
                  {erro}
                </p>
              </div>
            ) : produtosAtuais.length > 0 ? (
              <Row>
                {produtosAtuais.map((produto) => (
                  <Col key={produto.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                    <Cards product={produto} />
                  </Col>
                ))}
              </Row>
            ) : (
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center' }}>
                Nenhum produto encontrado.
              </p>
            )}
            <Paginas
              totalProducts={produtosFiltrados.length}
              productsPerPage={produtosPorPagina}
              currentPage={paginaAtual}
              onPageChange={alterarPagina}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Inicio;
