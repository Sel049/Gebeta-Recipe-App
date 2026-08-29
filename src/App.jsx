import {Routes, Route,BrowserRouter} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import Favorites from './pages/Favorites'
import Catagories from './components/Catagories'
import RandomRecipe from './pages/RandomRecipe'
import RecipeDetails from './pages/RecipeDetails'


const App = () => {
  return (
  <>
  <BrowserRouter>
    <div className="min-h-screen bg-cream text-charcoal antialiased font-sans">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 lg:px-10">  
        <Routes>
          <Route path='/' element={<MainLayout/>}>
              <Route index element ={<HomePage/>}/>
              <Route path='/catagories' element = {<Catagories/>}/>
              <Route path='/randomrecipe' element = {<RandomRecipe/ >}/>
              <Route path='/Favorites' element = {<Favorites/>}/>
              <Route path="/recipe/:id" element={<RecipeDetails />}/>
          </Route>
        </Routes>
      </div>
    </div>
  </BrowserRouter>
</>
  )
}

export default App