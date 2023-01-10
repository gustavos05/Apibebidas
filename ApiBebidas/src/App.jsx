import { useState,useEffect } from 'react'
import './App.css'
import Card from './Components/Card.jsx'
import axios from 'axios'
import './App.css'

function App() {
  
  const [dataDrinks, setDataDrinks] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    getData();
  }, [name]);

  const searchDrink = (e) => {
    e.preventDefault();
    setName(e.target[0].value.toLowerCase());
  };

  const getData = () => {
  axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then((resp) => {
      console.log(resp.data.drinks);
      setDataDrinks(resp.data.drinks);
    })
    .catch((error) => console.error(error));
  };
  return (
    <div className="App">
       <form onSubmit={(e) => searchDrink(e)}>
        <input type="text" placeholder="Buscar por nombre" />
        <button type="submit">Buscar</button>
      </form>
      <div className='cardContainer'>
      {  dataDrinks ?
      dataDrinks.sort((a,b)=>{
        if(a.strDrink>b.strDrink){
          return 1
        }else if (a.strDrink<b.strDrink){
          return -1
        }else{return 0}
      }).map((drinks, index) => (
        <Card
         key={`drinks-${index}`} 
         data={drinks} 
        />)) : <h2>No existe esta bebida</h2>
       }
        </div>
    </div>
  )
}

export default App
