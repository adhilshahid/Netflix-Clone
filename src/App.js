import React from 'react'
import NavBar from './Components/NavBar/NavBar.js'
import './App.css'
import Banner from './Components/Banner/Banner.js'
import RowPost from './Components/RowPost/RowPost.js'
import { action, originals,horror } from './urls.js'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
    </div>
  )
}

export default App
