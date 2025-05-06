import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carrossel = () => {
  return (
    <Carousel style={{ marginBottom: '20px' }}>
      <Carousel.Item>
        <img class="d-block w-100" src="https://designbraws.s3.us-east-2.amazonaws.com/649d94ce920494e6cc381cfb2f0a2b15.jpg" alt="Promoção 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img class="d-block w-100" src="https://files.oaiusercontent.com/file-PrGVJRWbMYizvSEoMm4xpN?se=2024-12-16T15%3A49%3A37Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dad6d6384-82b1-471c-bd27-ab237b9a2d69.webp&sig=RyDMP4X%2Bw1soGu5qRtUvoMsSKIKGLen6ydUXPE/qCLs%3D" alt="Promoção 2" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrossel;