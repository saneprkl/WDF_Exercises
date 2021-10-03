import React, { useState } from 'react'

export default function AdminView(props) {

    const [ newItemName, setNewItemName ] = useState("");
    const [ newItemType, setNewItemType ] = useState("");
    const [ newItemBrand, setNewItemBrand ] = useState("");
    const [ newItemPrice, setNewItemPrice ] = useState("");
    const [ newItemRating, setNewItemRating ] = useState("");
    const [ newItemStock, setNewItemStock ] = useState("");

    const addNewItem = () => {
        props.addNewItem(newItemName, newItemType, newItemBrand, newItemPrice, newItemRating, newItemStock);
    }

    const deleteItemClick = (itemId) => {
        console.log('click delete');
        props.deleteItem(itemId);
    }
    return (
        <div>
            <div>
            <h1>Add new item</h1>
            <div>Name <input type="text" onChange={ (event) => setNewItemName(event.target.value) }></input></div>
            <div>Type <input type="text" onChange={ (event) => setNewItemType(event.target.value) }></input></div>
            <div>Brand <input type="text" onChange={ (event) => setNewItemBrand(event.target.value) }></input></div>
            <div>Price <input type="text" onChange={ (event) => setNewItemPrice(event.target.value) }></input></div>
            <div>Rating <input type="text" onChange={ (event) => setNewItemRating(event.target.value) }></input></div>
            <div>Stock <input type="text" onChange={ (event) => setNewItemStock(event.target.value) }></input></div>
            <button onClick={ addNewItem }>Add item</button>
        </div>
        <button onClick={ props.disableAdminMode }>Disabale Admin Mode</button>
       

        <h1>List of items</h1>
        { props.isProcessingAminOperation ?
        (<div className="spinner-border" role="status"></div>)
        :
        props.items.map((item, index) => <div key={index}> <button onClick={ () => deleteItemClick(item.id)}>X</button>{item.name}, {item.type}, {item.brand}, {item.price}, {item.rating}, {item.stock} </div>)
        }
        </div>
    )
    
}
