import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus,  faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import '../App.css';

const Item = ({ title, counter, addOne, lessOne, erase }) => {


  return (
    <div className="item">
        <span className="title item1">{title}</span>
        <div className="item2">
          <button  onClick={lessOne}><FontAwesomeIcon icon={faMinus} /></button>
        </div>
        <span className="counter item3">{counter}</span>
        <div className="item4">
          <button onClick={addOne} ><FontAwesomeIcon icon={faPlus} /></button>
        </div>
        <div className="item5">
          <button onClick={erase}><FontAwesomeIcon icon={faTimes} /></button>
        </div>
    </div>
  );
}

export default Item;