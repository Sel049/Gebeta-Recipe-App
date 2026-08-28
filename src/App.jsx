import {
  Router,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, 
  Route
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}> 
      <Route index element ={<HomePage/>}/>
      <Route path='/catagories' element = {<h1>catagories test</h1>}/>
      <Route path='/randomrecipe' element = {<h1>randomrecipe test</h1>}/>
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