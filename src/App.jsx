import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexUsuarios from './pages/usuarios';
import IndexProyectos from './pages/proyectos';
import Index from './pages/Index';
import './styles/styles.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route path='' element={<Index />}/>
        <Route path='/usuarios' element={<IndexUsuarios />}/>
        <Route path='/proyectos' element={<IndexProyectos />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
