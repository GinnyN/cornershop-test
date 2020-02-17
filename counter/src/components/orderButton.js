import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAmountUpAlt, faSortAmountDown } from '@fortawesome/free-solid-svg-icons'
import '../App.css';

const OrderButton = ({ title, onClick }) => {
    const [up, setUp] = useState(false);
    const innerOnclick = () => {
        const temp = !up;
        onClick(up);
        setUp(temp);
    };
  return (
    <button onClick={innerOnclick}>
        {title} <FontAwesomeIcon icon={up ? faSortAmountUpAlt : faSortAmountDown} />
    </button>
  );
}

export default OrderButton;