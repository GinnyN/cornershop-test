import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewCounter from './components/new';
import Item from './components/item';
import OrderButton from './components/orderButton';
import FilterForm from './components/filterForm';
import FilterGreater from './components/filterGreater';
import './App.css';

const App = () => {
  const [counters, setCounters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [orderTerm, setOrderTerm] = useState({ term: false, greater: false });

  useEffect(() => {
    const asyncFunc = async () => {
      const results = await axios.get('api/v1/counters');
      const jsonObj = await results.data;
      setCounters(jsonObj);
    };
    asyncFunc();
  }, []);

  const newCounter = async (title) => {
    const results = await axios.post('api/v1/counter', { title });
    const temp = [ ...counters ];
    temp.push(results.data);
    setCounters(temp);
  };

  const addCounter = async (index, add) => {
    const results = add === 1 ? await axios.post('/api/v1/counter/inc', { id: counters[index].id }) : await axios.post('/api/v1/counter/dec', { id: counters[index].id });
    const temp = [ ...counters ];
    temp[index] = results.data;
    setCounters(temp);
  }

  const orderList = (parm, dir) => {
    const ordered = [ ...counters ].sort((it1, it2) => {
      if(it1[parm] > it2[parm]) return dir ? 1 : -1;
      return dir ? -1 : 1;
    })
    setCounters(ordered);
  }

  const filteredFunc = (item) => {
    const searchResult = searchTerm.length > 0 ? item.title.toLowerCase().includes(searchTerm.toLowerCase()) : true;
    let orderResult;
    if(orderTerm.term) {
      orderResult = orderTerm.greater ? item.count > orderTerm.term : item.count < orderTerm.term;
    } else {
      orderResult = true;
    }
    return searchResult && orderResult;
  }

  const getTotal = (total, item) => total + item.count;

  const deleteItem = async (id) => {
    await axios.delete('api/v1/counter', { id });
    const temp = [ ...counters ];
    temp.splice(id, 1);
    setCounters(temp);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Contador
          <NewCounter onSubmit={newCounter} />
        </h1>
      </header>
      <div className="order">
        <OrderButton title="Título" onClick={(dir) => orderList('title', dir)}/>
        <OrderButton title="Contador" onClick={(dir) => orderList('count', dir)}/>
      </div>
      <div className="filters">
        <FilterForm className="item1" onClick={(val) => setSearchTerm(val)}/>
        <FilterGreater className="item2" onClick={(val) => setOrderTerm(val)}/>
      </div>
      <div className="body">
        { counters.length === 0 ? <h2>No hemos encontrado contadores</h2> : 
          counters.filter(filteredFunc).map((item, index) => 
            <Item 
              title={item.title} 
              counter={item.count}
              addOne={() => addCounter(index, 1)}
              lessOne={() => addCounter(index, -1)}
              erase={() => deleteItem(index)}
            />)
        }
      </div>
      <div className="total">
        <h3 className="item3">
          Total: {counters.filter(filteredFunc).reduce(getTotal, 0)}
        </h3>
      </div>
    </div>
  );
}

export default App;
