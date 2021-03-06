import './App.css';
import "./key";
import Axios from 'axios';
import { useState } from 'react';
import RecipeTile from './RecipeTile';

function App() {
  const [query, setquery] = useState(""); 
  const [recipes, setrecipes] = useState([]);
  const [healthlabel, sethealthlabel] = useState("vegan");
  const YOUR_APP_ID = "7525d7dc";
  const YOUR_APP_KEY = "c0abcf2acff15b5517faea31b260eb08";
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthlabel}`
  
  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="app">
        <h1 onClick={getRecipes}>Food Recipe Plaza 🍔</h1>
        <form className='app_searchForm' onSubmit={onSubmit}>
          <input className='ingredient-input' type="text" placeholder="Enter the ingredient" 
          value={query} 
          onChange={(e) => setquery(e.target.value)} />

          <input className="app-submit" type="submit" value="Search" />

          <select className='app-healthlabels'>
            <option onClick={() => sethealthlabel("vegan")}>
              Vegan
            </option>
            <option onClick={() => sethealthlabel("vegetarian")}>
              Vegetarian
            </option>
            <option onClick={() => sethealthlabel("dairy-free")}>
              dairy-free
            </option>
            <option onClick={() => sethealthlabel("paleo")}>
              paleo
            </option>
            <option onClick={() => sethealthlabel("low-sugar")}>
             low-sugar
            </option>
            <option onClick={() => sethealthlabel("wheat-free")}>
              wheat-free
            </option>
            <option onClick={() => sethealthlabel("gluten-free")}>
             gluten-free
            </option>
            <option onClick={() => sethealthlabel("egg-free")}>
             egg-free
            </option>
            <option onClick={() => sethealthlabel("peanut-free")}>
             peanut-free
            </option> <option onClick={() => sethealthlabel("gluten-free")}>
             gluten-free
            </option>
            <option onClick={() => sethealthlabel("Soy-Free")}>
            Soy-Free
            </option>
            <option onClick={() => sethealthlabel("Tree-Nut-Free")}>
             Tree-Nut-Free
            </option>
          </select>
        </form>

        <div className='app-recipe'>
          {recipes.map((recipe) => {
            return <RecipeTile recipe={recipe}/>;
          })}
        </div>
    </div>
  );
}

export default App;
