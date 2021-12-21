import React, { useEffect } from 'react'
import 'styles/styles.css';
import 'styles/tabla.css';
import { useQuery } from '@apollo/client';
import { GET_USUARIOS } from 'graphql/usuarios/queries'
import { Link } from 'react-router-dom';
import EditarUsuario from 'pages/usuarios/editar'

const IndexUsuarios = () => {
    const { data, error, loading } = useQuery(GET_USUARIOS)

    useEffect(() => {
        if (error) {
            console.log('error consultando los usuarios')
        }
    }, [error])

    if (loading) return <div>Cargando...</div>


    return (
        <div className=''>
            <h2 className='title m-2'>
                Datos de Usuarios
            </h2>
            <div>
                <table className='tabla'>
                    <thead>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                        <th>Identificación</th>
                        <th>Rol</th>
                        <th>Estado</th>
                        <th>Editar</th>
                    </thead>
                    <tbody>
                        {
                            data && data.Usuarios ? (
                                <>
                                    {data.Usuarios.map((u) => (
                                        <tr key={u._id}>
                                            <td>{u.nombre}</td>
                                            <td>{u.apellido}</td>
                                            <td>{u.correo}</td>
                                            <td>{u.identificacion}</td>
                                            <td>{u.rol}</td>
                                            <td>{/*Enum_Rol[u.rol] */}</td>
                                            <td>
                                                <Link to={`/usuarios/editar/${u._id}`}>
                                                    <i className='fa fa-pencil'></i>
                                                </Link>
                                            </td>

                                        </tr>

                                    ))}

                                </>
                            ) : (

                                <div>No autorizado</div>
                            )
                        }

                    </tbody>
                </table>
            </div>
            <EditarUsuario />
        </div >
    )
}

export default IndexUsuarios
