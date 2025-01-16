import PropTypes from 'prop-types'; 
import { GiAlarmClock } from "react-icons/gi";

const Recipe = ({recipe}) => {
    const {recipe_name,short_description,ingredients,preparing_time,calories,recipe_image} = recipe;
    return (
        <div className='col-span-6 border-2 border-slate-200 rounded-xl p-3'>
            <div className='pb-2'>
                <div className='mb-3'>
                    <img className='w-full h-[260px] rounded-xl' src={recipe_image} alt="" />
                </div>
                <h1 className='font-bold text-xl py-2'>{recipe_name}</h1>
                <small className='text-slate-400'>{short_description}</small>
            </div>
            <hr />
            <div className='mb-2'>
                <h1 className='text-lg font-semibold py-3'>Ingredients: {ingredients.length}</h1>
                {
                    ingredients.map((ingre,idx) => 
                        <li className='text-base leading-snug text-slate-400' key={idx}>{ingre}</li>)
                }
            </div>
            <hr />
            <div className='py-2'>
                <div className='flex gap-5'>
                    <p className='text-sm flex items-center gap-1'><GiAlarmClock /> {preparing_time}</p>
                    <p className='text-sm'>{calories}</p>
                </div>
                <button className='py-3 px-5 bg-green-400 rounded-full mt-4 font-semibold'>Want to cook</button>
            </div>
        </div>
    );
};
Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
}

export default Recipe;