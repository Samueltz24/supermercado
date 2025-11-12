import { useState } from 'react'
import Cards from './projetos/Cards'
import Nav from './componentes/Nav'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
     <Cards/>
    </>
  )
}

export default App
