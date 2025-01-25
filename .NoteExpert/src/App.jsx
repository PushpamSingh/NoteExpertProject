import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import { PageLayout } from './components/PageLayout'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Courses } from './Pages/Courses'
import { Testimonials } from './Pages/Testimonials'
import { Gallery } from './Pages/Gallery'
import { Placements } from './Pages/Placements'
import { Developers } from './Pages/Developers'

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<PageLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/courses',
          element:<Courses/>
        },
        {
          path:'/testimonials',
          element:<Testimonials/>
        },
        {
          path:'/gallery',
          element:<Gallery/>
        },
        {
          path:'/placements',
          element:<Placements/>
        },
        {
          path:'/developers',
          element:<Developers/>
        }
      ]
    }
  ])
 return(<>
  <RouterProvider router={router}/>
 </>)
}

export default App
