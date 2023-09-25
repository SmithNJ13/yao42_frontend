
import {Routes, Route} from 'react-router-dom'
import {NavBar} from './components'

import { NotFound, Profile } from "./pages" 
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
