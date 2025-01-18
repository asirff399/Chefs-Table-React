const getStoredFoods = () =>{
    const storedFoods = localStorage.getItem('foods')
    if(storedFoods){
        return JSON.parse(storedFoods)
    } 
    return []
}
const saveFoodsToLS = (foods) =>{
    const foodStringified = JSON.stringify(foods)
    localStorage.setItem('foods',foodStringified)
}
const addToLS = id =>{
    const foods = getStoredFoods()
    foods.push(id)
    saveFoodsToLS(foods)
}
export {addToLS,saveFoodsToLS}