import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Navbar'
import Card from './Card'
import data from "./data.js"

function App() {
  const cards=data.map(item=> <Card key={item.id} item={item} />)

  return (<>
    <Navbar/>
    <div>{cards}</div>
</>
  )
}

export default App
