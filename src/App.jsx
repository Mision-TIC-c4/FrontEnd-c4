import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexUsuarios from './pages/usuarios';
import IndexProyectos from './pages/proyectos';
import NuevoProyecto from 'pages/proyectos/NuevoProyecto';
import IndexAvances from 'pages/avances'
import Perfil from './pages/perfil'
import Login from './pages/Index';
import IndexInscripciones from 'pages/inscripciones'
import EditarUsuario from 'pages/usuarios'
import './styles/styles.css';
import './styles/fonts.css';
import AuthLayout from 'layouts/AuthLayout'
import Registro from 'pages/autenticacion/registro'
import PrivateLayout from 'layouts/PrivateLayout'
import InicioPag from 'pages/autenticacion/login'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PrivateLayout />}>
        <Route path='' element={<InicioPag />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/usuarios' element={<IndexUsuarios />}/>
        <Route path='/usuarios/editar/:_id' element={<EditarUsuario />}/>
        <Route path='/proyectos' element={<IndexProyectos />}/>
        <Route path='/proyectos/nuevoproyecto' element={<NuevoProyecto/>}/>
        <Route path='/avances/:projectid' element={<IndexAvances/>}/>
        <Route path='/perfil' element={<Perfil/>}/>
        <Route path='/inscripciones' element={<IndexInscripciones/>}/>
        {/* <Route path='/' element={</>}/> */}
      </Route>
      <Route path='/auth' element={<AuthLayout/>}>
        <Route path='registro' element={<Registro/>}/>
      
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
