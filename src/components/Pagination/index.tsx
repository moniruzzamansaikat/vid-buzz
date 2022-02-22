import React from 'react';
import '../../styles/Pagination.scss';

function Pagination({ pageNumber, setPageNumber }: any) {
  const numbers = [1, 2, 3, 4, 5, 6];

  return (
    <ul className="pagination">
      <li>Prev</li>
      {numbers.map((number) => (
        <li
          key={number}
          className={number === pageNumber ? 'active' : ''}
          onClick={() => setPageNumber(number)}
        >
          {number}
        </li>
      ))}
      <li>Next</li>
    </ul>
  );
}

export default Pagination;
