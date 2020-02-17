import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import '../App.css';

const FilterForm = ({ onClick }) => {
    const [textSearch, setTextSearch] = useState('');
  return (
    <div className="filter">
        <div className="input item1">
            <input type="text" onChange={(e) => setTextSearch(e.target.value)}/>
        </div>
        <div className="item2">
            <button className="submit" onClick={() => onClick(textSearch)}><FontAwesomeIcon icon={faCheck} /></button>
        </div>
    </div>
  );
}

export default FilterForm;