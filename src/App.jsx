import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomeName from './components/HomeName'
import Pokedex from './components/Pokedex'
import PokeID from './components/PokeID'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  return (
    <div className="interfax">
      <HashRouter>
        <div className="target-user">
          <Routes>
            <Route path='/' element={<HomeName />} />

            <Route element={<ProtectedRoutes />}>
              <Route path='/pokedex' element={<Pokedex />} />
              <Route path='/pokedex/:id' element={<PokeID />} />
            </Route>

          </Routes>
        </div>
      </HashRouter>
    </div>
  )
}

export default App
