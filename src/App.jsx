import './App.css'

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import AllData from './components/AllData'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/all-books' element={<AllData/>} />
      </Routes>
    </Router>
  )
}

export default App
