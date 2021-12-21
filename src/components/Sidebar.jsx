import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

import { useUser } from 'context/userContext';
import PrivateComponent from 'components/PrivateComponent';

const SidebarLinks = () => (
  <ul className='mt-12'>
    <SidebarRoute to='' title='Inicio' icon='fa fa-home' />
    <SidebarRoute to='/perfil' title='Perfil' icon='fa fa-user' />
    {/* <PrivateComponent roleList={['ADMINISTRADOR']}>
        //ACA VA LA LISTA DE MODIFICACION DE USUARIOS
        </PrivateComponent> */}
    <SidebarRoute to='/usuarios' title='Usuarios' icon='fa fa-edit' />
    <SidebarRoute to='/proyectos' title='Proyectos' icon='fa fa-folder-open-o' />
    <SidebarRoute to='/avances' title='Avances' icon='fa fa-pencil-square' />
    <SidebarRoute to='/inscripciones' title='Inscripciones' icon='fa fa-pencil' />
  </ul>
)

const SidebarRoute = ({ to, title, icon }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? 'sidebar-route text-white bgBotones bg-opacity-50 fuenteBtn'
          : 'sidebar-route text-gray-900 hover:text-white hover:bg-purple-400 hover:bg-opacity-50 fuenteBtn'
      }
    >
      <div className='flex items-center'>
        <i className={icon} />
        <span className='text-sm  ml-2'>{title}</span>
      </div>
    </NavLink>
  </li>
);


const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className='flex flex-col md:flex-row flex-no-wrap md:h-full'>
      <div className='sidebar hidden md:flex'>
        <div className='px-8'>
          <h2 className='pt-5 text-center subs '>Sistema de gestión de proyectos 4 Project</h2>
          <SidebarLinks />
        </div>
      </div>
      <div className='flex md:hidden  w-full justify-between bg-gray-800 p-2 text-white'>
        <button type='button' onClick={() => setOpen(!open)}>
          <i className={`fa fa-${open ? 'times' : 'bars'}`} />
        </button>
        <i className='fa fa-home' />
      </div>
      {open && <ResponsiveSidebar />}

    </div>
  )
};

const ResponsiveSidebar = () => (
  <div>
    <div
      className='sidebar h-full z-40 absolute md:hidden sm:hidden lg:h-full transition duration-150 ease-in-out'
      id='mobile-nav'
    >
      <div className='px-8'>
        {/* <Logo /> */}
        <SidebarLinks />
      </div>
    </div>
  </div>
);



export default Sidebar
