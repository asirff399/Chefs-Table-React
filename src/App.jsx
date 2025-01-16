import './App.css'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'

function App() {

  return (
    <>
      <div className='w-4/5 mx-auto'>
        <Header></Header>
        <Banner></Banner>
        <Recipes></Recipes>
      </div>
    </>
  )
}

export default App
