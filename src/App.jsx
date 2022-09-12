import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Nosotros from './pages/Nosotros'
import Servicios from './pages/Servicios'
import './App.css'
import Inicio from './pages/inicio'

const App = () => {

  return (
    <div className="App">
      
      <Router>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/Nosotros' element={<Nosotros/>} />
            <Route path='/Servicios' element={<Servicios/>} />
        </Routes>
      
      <Footer/>
      </Router>

    </div>
  )
}


export default App

