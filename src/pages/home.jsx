import React from 'react';
import { useState, useEffect } from 'react';
import { showToast } from '../assets/toasts';

export default function Home() {
  const [recipes, setRecipes] = useState([]);
   useEffect(() =>{
    getrecipes();
   },[])

  const getrecipes = async() =>{
  try{
    const response = await  fetch("http://localhost:5000/api/recipe/getrecipe",{
     method:"GET",
     headers:{
     "content-Type":"application/JSON",
      },
      });
      const data = await response.json();
      setRecipes(data.data);
      console.log(data.data);
    }catch(err){
    console.log(err);
    }
    }
    return (
    <div className="d-flex flex-wrap justify-content-center m-3">
      {recipes.map((recipie, index)=>(
    <div className="card m-2 p-3" key={index} style={{"width": "18rem"}}>
      <h5 className="card-title">{recipie.recipename}</h5>
      <img src={recipes.imageurl} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h6 className="card-title">Description</h6>  
      <p className="card-text">{recipie.description}</p>
      <h6 className="card-title">Ingredients</h6>  
      <p className="card-text">{recipie.ingredients}</p>
      <h6 className="card-title">Instructions</h6>  
      <p className="card-text">{recipie.instructions}</p>
     </div>
     </div>
))}
    </div>
)
}
