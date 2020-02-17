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
        <div className="input item1">
            <input type="number" onChange={(e) => setTextSearch(e.target.value)}/>
        </div>
        <div className="item2">
            <button className="submit" onClick={innerOnClick}><FontAwesomeIcon icon={greater ? faLessThan : faGreaterThan} /></button>
        </div>
    </div>
  );
}

export default FilterGreater;