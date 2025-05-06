import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Cards = ({ product }) => {
  if (!product) {
    return <p>Produto não disponível</p>;
  }

  const { title, price, category, image } = product;

  return (
    <Card > 
      <Card.Img 
        variant="top" 
        src={image || 'default-image.jpg'} 
        alt={title} 
        style={{ 
          objectFit: 'cover', 
          height: '280px', 
        }} 
      />
      <Card.Body>
        <Card.Title>{title || 'Título Indisponível'}</Card.Title>
        <Card.Text>
          <strong>Categoria:</strong> {category || 'Sem categoria'}
        </Card.Text>
        <Card.Text>
          <strong>Preço:</strong> R$ {price || '0.00'}
        </Card.Text>
        <Button variant="btn btn-outline-secondary" onClick={() => alert(`Adicionado ao carrinho: ${title}`)}>
          Adicionar ao Carrinho
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
