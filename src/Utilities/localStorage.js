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
const getCooking = () =>{
    const cook = localStorage.getItem('cook')
    if(cook){
        return JSON.parse(cook)
    }
    return []
}
const saveCookToLS = (cook) =>{
    const cookStringified = JSON.stringify(cook)
    localStorage.setItem('cook',cookStringified)
}
const cookAddToLS = (id) =>{
    const cook = getCooking()
    cook.push(id)
    saveCookToLS(cook)
    const foods = getStoredFoods()
    const remainingFoods = foods.filter(idx => idx != id)
    saveFoodsToLS(remainingFoods)
}

export {addToLS,saveFoodsToLS,cookAddToLS,getStoredFoods,getCooking}