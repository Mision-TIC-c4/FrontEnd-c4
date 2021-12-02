import React from 'react'
import 'styles/styles.css';

const Index = () => {
    return (
        <div>
            <div>Index Login page</div>
            <div className='fondo'>Sistema de gestión de proyectos</div>
            <label htmlFor="" name="correo">
                Correo
                <input type="text" name="mail" />
            </label>
            <label htmlFor="" name="password">
                Password
                <input type="text" name="password" />
            </label>
            <label htmlFor="">¿No está registrado?</label>
            <button>Iniciar sesión</button>
            <button>Registrese acá</button>
        </div>
    )
}

export default Index
