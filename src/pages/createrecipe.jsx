import React from 'react';
import { useRef } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { showToast } from '../assets/toasts';

export default function Createrecipe() {
  const recipeRef = useRef(null);
  const ingredientsRef = useRef(null);
  const descriptionRef = useRef(null);
  const instructionsRef = useRef(null);
  const imageRef = useRef(null);
  const navigator = useNavigate();

  function handleRecipe(){
   
    const recipename = recipeRef.current.value;
    const ingredients = ingredientsRef.current.value;
    const description = descriptionRef.current.value;
    const instructions = instructionsRef.current.value;
    const imageurl = imageRef.current.value;
   

    if(recipename.length > 0 && ingredients.length > 0 && description.length> 0 && instructions.length > 0 && imageurl.length > 0){
      fetch("https://backend-project-1-mhlp.onrender.com/api/recipe/recipecreate", {
        method:"POST",
        body:JSON.stringify({
          recipename,
          ingredients,
          description,
          instructions,
          imageurl,
        }),
        headers:{
          "content-Type":"application/JSON",
        },
      })
       .then((response) => {
        if(response.ok)
        return response.json();
       })
        .then((data) => {
          if(data.result.success){
            navigator("/home");
          }else{
            showToast(result.message);
          }
        })
          .catch((error) => {
            showToast(error,"error")
          });
    }else{
      showToast(" please fill all the required fields");
    }
  }

  return (
    <div className="container min-vh-100 d-flex justify-content-center text-start align-items-center">
      <div className="card p-0"
           style={{
           width:"350px",
          }}
        >
        <div className="card-body">
        <h3 className="mb-3">Create Recipe</h3>
        <div className="mb-3">
        <label htmlFor="recipe" className="form-label">
          Recipe Name
        </label>
        <input
         type="text" 
         className="form-control" 
         id="recipe" 
         ref={recipeRef} 
         placeholder="Enter the Recipe Name"/>
        </div>
        <div className="mb-3">
        <label htmlFor="ingredients" className="form-label">
          Ingredients
        </label>
        <input
         type="text" 
         className="form-control"
         ref={ingredientsRef}  
         id="ingredients" 
         placeholder="Enter the Ingredients"/>
        </div>
        <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
         type="text" 
         className="form-control"
         ref={descriptionRef}  
         id="description" 
         placeholder="Enter the Description"/>
        </div>
        <div className="mb-3">
        <label htmlFor="instructions" className="form-label">
          Instructions
        </label>
        <input
         type="text" 
         className="form-control"
         ref={instructionsRef}  
         id="instructions" 
         placeholder="Enter the Instructions"/>
        </div>
        <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Upload Image
        </label>
        <input
         type="file" 
         className="form-control"
         ref={imageRef}  
         id="myfile" 
         placeholder="upload Image"/>
        </div>
        <div className="d-grid gap-2">
        <button className="btn btn-primary" type="button"
         onClick={handleRecipe}>
          Add Recipe
        </button>
        </div>
      </div>
    </div>
  </div>
  )
}
