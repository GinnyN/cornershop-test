import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons'
import '../App.css';

const FilterGreater = ({ onClick }) => {
    const [textSearch, setTextSearch] = useState('');
    const [greater, setGreater] = useState(false);

    const innerOnClick = () => {
        onClick({ term: textSearch, greater: !greater });
        setGreater(!greater);
    }
  return (
    <div className="filter">
        <p>Filtro por Mayor o Menor</p>
        <div className="input item1">
            <input type="number"  data-testid="inputNumber" onChange={(e) => setTextSearch(e.target.value)}/>
        </div>
        <div className="item2">
            <button className="submit" onClick={innerOnClick}><FontAwesomeIcon icon={greater ? faLessThan : faGreaterThan} /></button>
        </div>
    </div>
  );
}

export default FilterGreater;