
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Alunos from './components/Alunos.jsx'
import Sobre from './components/Sobre.jsx'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul  >
          < Link as={Link} to='/'>Home|</Link>
          < Link as={Link} to='/alunos'>Alunos|</Link>
          <Link as={Link} to='/sobre'>sOBRE</Link>
        </ul>



        <Routes>
          <Route path='/' action={true} element={<Home />}></Route>
          <Route path='/alunos' element={<Alunos />}></Route>
          <Route path='/sobre' element={<Sobre />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
