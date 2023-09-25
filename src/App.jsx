
import {Routes, Route} from 'react-router-dom'
import {NavBar} from './components'

import { NotFound } from "./pages" 
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
