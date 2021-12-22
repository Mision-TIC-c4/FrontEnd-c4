import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexUsuarios from './pages/usuarios';
import IndexProyectos from './pages/proyectos/index';
import NuevoProyecto from 'pages/proyectos/NuevoProyecto';
import IndexAvances from 'pages/avances/index'
import Perfil from './pages/perfil'
import Login from './pages/Index';
import IndexInscripciones from './pages/inscripciones/index'
import EditarUsuario from './pages/usuarios/editar'
import './styles/styles.css';
import './styles/fonts.css';
import AuthLayout from 'layouts/AuthLayout'
import Registro from 'pages/autenticacion/registro'
import PrivateLayout from 'layouts/PrivateLayout'
import InicioPag from 'pages/autenticacion/login'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  //uri: 'http://localhost:4000/graphql',
  uri: 'https://project4ciclo4.herokuapp.com/graphql',
  cache: new InMemoryCache()
})


function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PrivateLayout />}>
            <Route path='' element={<InicioPag />} />

            <Route path='/usuarios' element={<IndexUsuarios />} />
            <Route path='/usuarios/editar/:_id' element={<EditarUsuario />} />
            <Route path='/proyectos' element={<IndexProyectos />} />
            <Route path='/proyectos/nuevoproyecto' element={<NuevoProyecto />} />
            <Route path='/avances/:projectid' element={<IndexAvances />} />
            <Route path='/perfil' element={<Perfil />} />
            <Route path='/inscripciones' element={<IndexInscripciones />} />
            {/* <Route path='/' element={</>}/> */}
          </Route>
          <Route path='/auth' element={<AuthLayout />}>
            <Route path='registro' element={<Registro />} />
            <Route path='login' element={<Login />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
