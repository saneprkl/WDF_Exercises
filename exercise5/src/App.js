
import React, { useState, useEffect } from 'react';
import ItemMap from './components/ItemMap';
import './App.css';
import AdminView from './components/AdminView';
import axios from 'axios';

export default function App() {
  const [items, setItems] = useState([]);
  const [productSearchString, setProductSearchString] = useState("");
  const [adminModeActive, setAdminModeActive] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessingAdminOperation, setIsProcessingAdminOperation] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:4000/items')
      .then((response) => {
        setItems(response.data)
        setIsLoading(false);
      });
  }, [adminModeActive]);

const addNewItem = async (name, type, brand, price, rating, stock) => {
  setIsProcessingAdminOperation(true);
  await axios.post('http://localhost:4000/items', {
    name: name,
    type: type,
    brand: brand,
    price: price,
    rating: rating,
    stock: stock
  })
    const newItems = await axios.get('http://localhost:4000/items');
    setItems(newItems.data);
    setIsProcessingAdminOperation(false);
}

const deleteItem = async itemId => {
  setIsProcessingAdminOperation(true);
  const result = await axios.delete('http://localhost:4000/items/' + itemId);
  setItems(items.filter(item => item.id !== itemId))
  setIsProcessingAdminOperation(false);
};

const inputChange = (event) => {
  console.log('Keyboard event');
  console.log(event.target.value);
  setProductSearchString(event.target.value);
}

let output = 
    <>
    <div>
      Search <input className="container" type="text" onChange={ inputChange } value={ productSearchString }/>
    </div>
    <ItemMap items={ items.filter((item) => item.name.toLowerCase().includes(productSearchString.toLowerCase())) }/>
    <button onClick={ () => setAdminModeActive(!adminModeActive)}>Admin mode</button>
    </>;

  if(adminModeActive) {
    output = <AdminView disableAdminMode={() => setAdminModeActive(false) }
    addNewItem={ addNewItem }
    items={ items }
    deleteItem={ deleteItem }
    isProcessingAdminOperation={ isProcessingAdminOperation } />;
  }
  return (
      <>
      { output }
      </>
  )  
}
