import React, { useState } from 'react';
import ListComponent from '../dashboard/ListComponent';
import './pages.css'
import { IonRow } from '@ionic/react';

interface Student {
  firstName: string;
  lastName: string;
  id:number;
  class: string;
  sold:number;
}

interface ListWithPaginationProps {
  itemsPerPage: number;
  data: Student[];
}

const ListWithPagination: React.FC<ListWithPaginationProps> = ({ itemsPerPage, data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Fonction pour changer de page
  const changePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // Extraire les éléments de la page actuelle
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <div>
        <ListComponent students={currentItems}/>
      <IonRow className='paging'>
        <button className='pageBtn'
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {currentPage-1}
        </button>
        <span className='pageSpan'>{currentPage}</span>
        <button className='pageBtn'
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {currentPage+1}
        </button>
      </IonRow>
    </div>
  );
};

export default ListWithPagination;
