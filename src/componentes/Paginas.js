import React from 'react';
import { Pagination } from 'react-bootstrap';

const Paginas = ({ totalProducts, productsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  return (
    <Pagination>
      {[...Array(totalPages).keys()].map((page) => (
        <Pagination.Item
          key={page + 1}
          active={currentPage === page + 1}
          onClick={() => onPageChange(page + 1)}
        >
          {page + 1}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default Paginas;
