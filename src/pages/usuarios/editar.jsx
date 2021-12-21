import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { GET_USUARIOS } from 'graphql/usuarios/queries'
import { Link, useParams } from 'react-router-dom'
import useFormData from 'hooks/useFormData'
import { EDITAR_USUARIO } from 'graphql/usuarios/mutations'

const EditarUsuario = () => {
    const { form, formData, updateFormData } = useFormData(null);
    const { _id } = useParams();
    // carga quueries 
    const {
        data: queryData,
        error: queryError,
        loading: queryLoading,
    } = useQuery(GET_USUARIOS, { variables: { _id }, })
    //carga mutations
    const [editarUsuario, { data: mutationData, loading: mutationLoading, error: mutationError }] = useMutation(EDITAR_USUARIO)

    //Submit para form 
    const submitForm = async (e) => {
        e.preventDefault();
        console.log(formData);
        await
            editarUsuario({
                variables: { _id, ...formData }
            })
    }

    useEffect(() => {
        if (mutationData) {
            console.log('Usuario modificado')
        }
    }, [mutationData])

    useEffect(() => {
        console.log('data mutation', mutationData)
    })
    
    if (queryLoading) return <div>...loading</div>

    return (
        <div className='m-2'>
            <h2 className='title'>Editar usuario</h2>
            <div>
                <form action="" 
                onSubmit={submitForm}
                onChange={updateFormData}
                ref={form}
                className='flex flex-col items-center justify-center'>
                    <div>
                        <label htmlFor="">Nombre del usuario
                            <input type="text" placeholder='nombre' name='nombre' defaultValue={queryData.Usuarios.nombre}/>
                        </label>
                        <label htmlFor="">Apellido del usuario
                            <input type="text" placeholder='' name='apellido' defaultValue={queryData.Usuarios.apellido}/>
                        </label>
                        <label htmlFor="">Correo del usuario
                            <input type="text" placeholder='correo' name='correo' defaultValue={queryData.Usuarios.correo}/>
                        </label>
                        <label htmlFor="">Identificación del usuario
                            <input type="text" placeholder='identificacion' name='identificacion' defaultValue={queryData.Usuarios.identificacion}/>
                        </label>
                        {/* <label htmlFor="">Estado del usuario
                            <input type="text" placeholder='estado' name='estado' defaultValue={queryData.Usuarios.estado}/>
                        </label> */}
                    </div>

                </form>
            </div>


        </div>
    )
}

export default EditarUsuario
