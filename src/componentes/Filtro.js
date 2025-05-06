import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Filtro = ({ categorias, aoAlterarCategoria, aoLimparFiltros }) => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');

  const selecionarCategoria = (categoria) => {
    setCategoriaSelecionada(categoria);
    aoAlterarCategoria(categoria);
  };

  const limparFiltros = () => {
    setCategoriaSelecionada('');
    aoLimparFiltros();
  };

  return (
    <div>
      <h5>Filtrar por Categoria</h5>
      <Form>
        {categorias.map((categoria) => (
          <Form.Check
            key={categoria}
            type="radio"
            name="categoria"
            label={categoria}
            value={categoria}
            checked={categoriaSelecionada === categoria}
            onChange={() => selecionarCategoria(categoria)}
          />
        ))}
      </Form>
      <Button 
        variant="btn btn-outline-info" 
        className="mt-3" 
        onClick={limparFiltros}
      >
        Limpar Filtros
      </Button>
    </div>
  );
};

export default Filtro;
