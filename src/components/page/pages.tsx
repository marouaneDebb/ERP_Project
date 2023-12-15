
import React, { useState } from 'react';
import './pages.css';
import { IonRow } from '@ionic/react';

interface ListWithPaginationProps<T> {
  itemsPerPage: number;
  data: T[];
  renderListItem: (item: T) => React.ReactNode;
}

const ListWithPagination = <T,>({ itemsPerPage, data, renderListItem }: ListWithPaginationProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const changePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <div>
      {currentItems.map((item, index) => (
        <div key={index}>{renderListItem(item)}</div>
      ))}
      <IonRow className="paging">
        <button
          className="pageBtn"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {currentPage - 1}
        </button>
        <span className="pageSpan">{currentPage}</span>
        <button
          className="pageBtn"
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {currentPage + 1}
        </button>
      </IonRow>
    </div>
  );
};

export default ListWithPagination;
