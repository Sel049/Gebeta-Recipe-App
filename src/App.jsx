import {Routes, Route,BrowserRouter} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import RandomRecipe from './pages/RandomRecipe'
import RecipeDetails from './pages/RecipeDetails'
import CategoriesPage from './pages/CategoriesPage'
import NotFoundPage from './pages/NotFoundPage'


const App = () => {
  return (
  <>
  <BrowserRouter>
    <div className="min-h-screen text-charcoal dark:text-cream/90 antialiased font-sans transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 lg:px-10">  
        <Routes>
          <Route path='/' element={<MainLayout/>}>
              <Route index element ={<HomePage/>}/>
              <Route path='/categories' element={<CategoriesPage/>}/>
              <Route path='/randomrecipe' element = {<RandomRecipe/ >}/>
              <Route path="/recipe/:id" element={<RecipeDetails />}/>
              <Route path="*" element={<NotFoundPage/>}/>
          </Route>
        </Routes>
      </div>
    </div>
  </BrowserRouter>
</>
  )
}

export default App