import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck,  faPlus } from '@fortawesome/free-solid-svg-icons'
import '../App.css';

const NewCounter = ({ onSubmit }) => {
    const [newForm, showNewForm] = useState(false);
    const [name, setName] = useState('');

  return (
    <React.Fragment>
        {newForm ? <div className="form" data-testid="newForm">
            <div className="input item1">
                <input type="text" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="item3">
              <button onClick={() => showNewForm(!newForm)}><FontAwesomeIcon icon={faTimes} /></button>
            </div>
            <div className="item2">
              <button onClick={() => onSubmit(name)} disabled={name.length === 0} className="submit"><FontAwesomeIcon icon={faCheck} /></button>
            </div>
        </div> :
        <button  data-testid="newButton" onClick={() => showNewForm(!newForm)}><FontAwesomeIcon icon={faPlus} /></button> }
    </React.Fragment>
  );
}

export default NewCounter;
