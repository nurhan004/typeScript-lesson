import { RouterProvider } from 'react-router-dom'
import './App.css'
import Info from './Info'
import { myRouter } from './router'

function App() {

  return (
    <>
    <RouterProvider router={myRouter}/>
    {/* <Info name="Bayastan" age={12} img="https://twam.ru/wp-content/uploads/2024/02/mens-fizik-1.webp" />
    <Info name="Nurhan" age={17} img="https://twam.ru/wp-content/uploads/2024/02/mens-fizik-1.webp" /> */}
    </>
  )
}

export default App
