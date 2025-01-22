import PropTypes from 'prop-types'; 

const Order = ({cooking,wtcook,handleCooking}) => {
    const totalPrepairingTime = () =>{
        return cooking.reduce((time,item) => time + item.preparing_time,0)
    }
    const totalCalories = () =>{
        return cooking.reduce((calories,item) => calories + item.calories,0)
    }
    
    return (
        <div className="sticky top-20 border-2 border-slate-200 rounded-xl">
            <div>
                <div className="w-4/6 mx-auto my-2">
                    <h1 className="text-center text-2xl font-semibold m-4 mt-7">Want to cook: {wtcook.length}</h1>
                    <hr />
                </div>
                <table className="table-auto w-full border-collapse ">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left"></th>
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Time</th>
                            <th className="px-4 py-2 text-left">Calories</th>
                            <th className="px-4 py-2 text-left"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-100">
                        {wtcook.map(recipe => (
                            <tr className="even:bg-gray-50" key={recipe.recipe_id}>
                                <td className="px-4 py-2">{recipe.recipe_id}</td>
                                <td className="px-4 py-2">{recipe.recipe_name}</td>
                                <td className="px-4 py-2">{recipe.preparing_time}</td>
                                <td className="px-4 py-2">{recipe.calories}</td>
                                <td ><button className="m-1 px-3 py-2 text-center text-xs bg-green-400 rounded-full font-semibold" onClick={()=>handleCooking(recipe.recipe_id)}>Preparing</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
            <div className="mb-11">
                <div className="w-4/6 mx-auto my-2">
                    <h1 className="text-center text-2xl font-semibold m-4 mt-7">Currently cooking: {cooking.length}</h1>
                    <hr />
                </div>
                <table className="table-auto w-full border-collapse ">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left"></th>
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Time</th>
                            <th className="px-4 py-2 text-left">Calories</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-100">
                        { cooking.map(food => (
                            <tr key={food.recipe_id} className="even:bg-gray-50">
                                <td className="px-4 py-2">{food.recipe_id}</td>
                                <td className="px-4 py-2">{food.recipe_name}</td>
                                <td className="px-4 py-2">{food.preparing_time}</td>
                                <td className="px-4 py-2">{food.calories}</td>
                            </tr>
                        ))}
                    </tbody>
                        <tr className="mt-11">
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2">Total time <br />= {totalPrepairingTime()}</td>
                            <td className="px-4 py-2">Total calories <br />= {totalCalories()}</td>
                        </tr>
                </table>
            </div>
        </div>
    );
};
Order.propTypes = {
    cooking: PropTypes.array.isRequired,
    wtcook: PropTypes.array.isRequired,
    handleCooking: PropTypes.func.isRequired,
}
export default Order;


