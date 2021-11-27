import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexUsuarios from './pages/usuarios';
import Index from './pages/Index';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route path='' element={<Index />}/>
        <Route path='/usuarios' element={<IndexUsuarios />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
