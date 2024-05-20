import React from "react";
import { useState } from 'react';


function PizzaCard (props){

  const [counter, setCounter] = useState(0);
  function increment(){
    setCounter(counter+1);
  }
  function decrement(){
    setCounter(counter-1);
  }
  function Order(counter){
    alert(`Количество заказанного товара: ${counter}`)
  }
  
  return (
    <div className="container">
      <img src={props.img} alt=''/>
      <div>
        <h2 className="text">{props.name}</h2>
        <h3 className="text">{props.txt}</h3>
        <h2 className="text">{props.price}</h2>
      </div>
  
      <select>
        <option>Диаметр</option>
        <option>20 см</option>
        <option>30 см</option>
      </select>
  
      <div className="order">
        <button onClick={decrement}>-</button> {counter} <button onClick={increment}>+</button>        
        <button className="button" onClick={() => Order(counter)}>В корзину</button>
      </div>
    </div>
  );
}
export default PizzaCard;