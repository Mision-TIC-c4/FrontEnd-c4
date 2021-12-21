import React from 'react'

const NuevoProyecto = () => {
    return (
        <div className='m-2'>
            <h1>
                Crear nuevo proyecto
            </h1>
            <form action="">
                <input type="text" name="nombre" label="Nombre del proyecto" required={true} />
                <input type="number" name="presupuesto" label="Presupuesto del proyecto" required={true} />
                <input type="date" name="fechaInicio" label="Fecha de inicio" required={true} />
                <input type="date" name="fechaFin" label="Fecha de fin" required={true} />

            </form>
        </div>
    )
}

export default NuevoProyecto
