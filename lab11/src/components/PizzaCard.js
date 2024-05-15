import {React, useState} from "react";
import pizzaImage from "../images/pizza.jpg";

function PizzaCard(props) {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(prevCounter => prevCounter + 1);
    }

    function decrement() {
        setCounter(prevCounter => prevCounter - 1)
    }

    function submitButtonOnClick(event) {
        const pizzaDiameter = document.getElementById("pizza_diam").value;
        const pizzaQuantity = document.getElementById("quantity").value;

        if (pizzaDiameter === "Диаметр") {
            alert("Выберите диаметр пиццы!");
            event.preventDefault();
        }
        else if (pizzaQuantity === "0") {
            alert("Определитесь с количеством товара!");
            event.preventDefault();
        }
        else {
            alert(`Количество заказанного товара: ${counter}`);
        }
    }

    return (
        <div className="card__wrapper">
            <img src={pizzaImage} alt="Пицца" className="card__image"/>
            <h2 className="card__title">{props.title}</h2>
            <p className="card__text">{props.text}</p>
            <select id="pizza_diam" className="card__pizza__diameter" defaultValue="Диаметр" form="form">
                <option disabled>Диаметр</option>
                <option>30 см</option>
                <option>60 см</option>
            </select>
            <p className="card__pizza__price">от {props.price}</p>
            <form id="form" action="#" method="post" className="card__input__wrapper">
                <input type="button" value="-" className="card__input__decrement" onClick={decrement}/>
                <input id="quantity" type="text" value={counter} className="card__input__quantity"/>
                <input type="button" value="+" className="card__input__increment" onClick={increment}/>
                <input type="submit" className="card__order__button" value=" " onClick={submitButtonOnClick}/>
            </form>
        </div>
    )
}

export default PizzaCard;