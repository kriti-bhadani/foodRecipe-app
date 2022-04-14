import React from 'react';
import "./RecipeTile.css";

export default function RecipeTile({ recipe }) {
  return (
    <div className='RecipeTile' onClick={() => {
      window.open(recipe["recipe"]["url"]);
    }}>
      <img className='RecipeTile-img' src= {recipe["recipe"]["image"]} />
       <p className='RecipeTile-content'> {recipe["recipe"]["label"]} </p>
    </div>
  );
}
