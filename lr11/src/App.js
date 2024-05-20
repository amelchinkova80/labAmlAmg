import './App.css';
import img1 from './pizza1.jpg'
import PizzaCard from './PizzaCard'

function App() {
  
  return (
    <>

    < PizzaCard img={img1} name='Пепперони' txt='Самая вкусная пицца' price='От 550р' />
    
    </>
  );
}

export default App;
