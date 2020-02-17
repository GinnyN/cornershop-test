import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import '../App.css';

const FilterForm = ({ onClick }) => {
    const [textSearch, setTextSearch] = useState('');
  return (
    <div className="filter">
        <p>Filtro por Título</p>
        <div className="input item1">
            <input data-testid="filterFormChange" type="text" onChange={(e) => setTextSearch(e.target.value)}/>
        </div>
        <div className="item2">
            <button className="submit" onClick={() => onClick(textSearch)}><FontAwesomeIcon icon={faCheck} /></button>
        </div>
    </div>
  );
}

export default FilterForm;