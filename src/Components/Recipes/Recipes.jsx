import { useEffect, useState } from "react";
import Order from "../Order/Order";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    const [recipes,setRecipes] = useState([])

    useEffect(()=>{
        fetch('recipe.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

    return (
        <div>
            <div className="w-4/6 mx-auto my-16">
                <h1 className="mb-6 mt-11 text-center text-4xl font-bold">Our Recipes</h1>
                <p className="w-5/6 mx-auto text-center text-slate-400">Explore the wonders of our recipes! From comforting classics to indulgent desserts, discover flavors that inspire. Perfect for every occasion, elevate your cooking game today!</p>
            </div>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-7">
                    {
                        recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe> )
                    }
                </div>
                <div className="col-span-5">
                    <Order></Order>
                </div>
            </div>
        </div>
    );
};

export default Recipes;