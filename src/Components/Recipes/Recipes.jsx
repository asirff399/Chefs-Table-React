import { useEffect, useState } from "react";
import Order from "../Order/Order";
import Recipe from "../Recipe/Recipe";
import { addToLS, cookAddToLS, getStoredFoods,getCooking} from "../../Utilities/localStorage";

const Recipes = () => {
    const [recipes,setRecipes] = useState([])
    const [wtcook,setWtcook] = useState([])
    const [cooking,setCooking] = useState([])

    useEffect(()=>{
        fetch('recipe.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

    useEffect(()=>{
        if(recipes.length){
            const storedRecipes = getStoredFoods()
            const savedRecipe = []
            
            for(const id of storedRecipes){
                const recipe = recipes.find(recipe => recipe.recipe_id === id)
                if(recipe){
                    savedRecipe.push(recipe)
                }
            }
            setWtcook(savedRecipe)

            const storedCooking = getCooking()
            const savedCook = []
            for(const id of storedCooking){
                const cook = recipes.find(cook => cook.recipe_id === id)
                if(cook){
                    savedCook.push(cook)
                }
            }
            setCooking(savedCook)
        }
    },[recipes])


    const handleWantToCook = (wcook) =>{
        const newWtcook = [...wtcook,wcook]
        setWtcook(newWtcook)
        addToLS(wcook.recipe_id)
    }

    const handleCooking = (id) =>{
        const selectedRecipe = wtcook.find(food => food.recipe_id === id)
        if(selectedRecipe){
            const remaining = wtcook.filter(food => food.recipe_id !== id)
            setWtcook(remaining)
            const newCooking = [...cooking,selectedRecipe]
            setCooking(newCooking)
            cookAddToLS(id)
        }
    }

    return (
        <div>
            <div className="w-4/6 mx-auto my-16">
                <h1 className="mb-6 mt-11 text-center text-4xl font-bold">Our Recipes</h1>
                <p className="w-5/6 mx-auto text-center text-slate-400">Explore the wonders of our recipes! From comforting classics to indulgent desserts, discover flavors that inspire. Perfect for every occasion, elevate your cooking game today!</p>
            </div>
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-7">
                    <div className="grid grid-cols-12 gap-3">
                        {
                            recipes.map(recipe => 
                                <Recipe 
                                    key={recipe.recipe_id} 
                                    recipe={recipe} 
                                    handleWantToCook={handleWantToCook}
                                ></Recipe> )
                        }
                    </div>
                </div>
                <div className="col-span-5">
                    <Order cooking={cooking} wtcook={wtcook} handleCooking={handleCooking}></Order>
                </div>
            </div>
        </div>
    );
};

export default Recipes;