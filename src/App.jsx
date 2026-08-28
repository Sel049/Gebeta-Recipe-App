import {
  Router,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, 
  Route
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import Favorites from './pages/Favorites'
import Catagories from './components/Catagories'
import RandomRecipe from './pages/RandomRecipe'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}> 
      <Route index element ={<HomePage/>}/>
      <Route path='/catagories' element = {<Catagories/>}/>
      <Route path='/randomrecipe' element = {<RandomRecipe/>}/>
      <Route path='/Favorites' element = {<Favorites/>}/>
  </Route>)
)

const App = () => {
  return (
  <>
  <div className="min-h-screen bg-cream text-charcoal antialiased font-sans">
    <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 lg:px-10">  
    
    <RouterProvider router={router}/>

    </div>
  </div>
</>
  )
}

export default App