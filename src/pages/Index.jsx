import React from 'react'
import 'styles/styles.css';
import 'styles/fonts.css';

const Login = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className=' w-full flex pt-20 items-center title justify-center'>Sistema de gestión de proyectos 4 Project</div>
            <div className='pt-20'>
                <label className='items-center flex w-full p-2 justify-center' htmlFor="" name="correo">
                    Correo
                    <input className='input' type="text" name="mail" />
                </label>
                <label className='items-center flex w-full p-2' htmlFor="" name="password">
                    Password
                    <input className='input' type="text" name="password" />
                </label>
            </div>
            <label htmlFor="">¿No está registrado?</label>
            <div className='flex flex-col items-center  w-full m-2'>
                <button className='p-2 rounded bg-purple-500 m-2 text-white'>Iniciar sesión</button>
                <button className='p-2 rounded bg-purple-500 m-2 text-white'>Registrese acá</button>
            </div>
        </div>
    )
}

export default Login
