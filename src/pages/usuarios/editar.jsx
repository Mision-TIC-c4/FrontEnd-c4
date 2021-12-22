import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { GET_USUARIOS, GET_USUARIO } from 'graphql/usuarios/queries'
import { Link, useParams } from 'react-router-dom'
import useFormData from 'hooks/useFormData'
import { EDITAR_USUARIO } from 'graphql/usuarios/mutations'
import ButtonLoading from 'components/ButtonLoading'
import DropDown from 'components/Dropdown'
import { Enum_EstadoUsuario } from 'utils/enums'
import { toast } from 'react-toastify'

const EditarUsuario = () => {
    const { form, formData, updateFormData } = useFormData(null);
    const { _id } = useParams();
    // carga quueries 
    const {
        data: queryData,
        error: queryError,
        loading: queryLoading,
    } = useQuery(GET_USUARIO, { variables: { _id }, })
    //carga mutations
    const [editarUsuario, { data: mutationData, loading: mutationLoading, error: mutationError }] = useMutation(EDITAR_USUARIO)

    //Submit para form 
    const submitForm = async (e) => {
        e.preventDefault();
        console.log(formData);
        await
            editarUsuario({
                variables: { _id, ...formData },
            });
    }

    useEffect(() => {
        if (mutationData) {
            toast.success('Usuario Modificado')
            console.log('Usuario modificado')
        }
    }, [mutationData])

    useEffect(() => {
        if (mutationError) {
            toast.error('Error modificando usuario')
        }
        if (queryError) {
            toast.error('Error consultando el usuario seleccionado')
        }
        //console.log('data mutation', mutationData)
    },[queryError, mutationError])

    if (queryLoading) return <div>...loading</div>

    return (
        <div className='m-2'>
            <div className='flex flex-col w-full h-full items-center justify-center pt-3'>
                <div className=' flex justify-between'>
                    <button>
                        <Link className='p-5' to={`/usuarios`}>
                            <i className='fa fa-arrow-left text-red-600 '></i>
                        </Link>
                    </button>
                    <h2 className='title'>Editar usuario</h2>
                </div>
                <form action=""
                    onSubmit={submitForm}
                    onChange={updateFormData}
                    ref={form}
                    className='flex flex-col items-center justify-center'>
                    <div className='formulario'>
                        <label className='label' htmlFor="">Nombre del usuario
                            <input className='input' type="text" placeholder='Nombre' name='nombre' defaultValue={queryData.Usuario.nombre} />
                        </label>
                        <label className='label' htmlFor="">Apellido del usuario
                            <input className='input' type="text" placeholder='Apellido' name='apellido' defaultValue={queryData.Usuario.apellido} />
                        </label>
                        <label className='label' htmlFor="">Correo del usuario
                            <input className='input' type="text" placeholder='Correo' name='correo' defaultValue={queryData.Usuario.correo} />
                        </label>
                        <label className='label' htmlFor="">Identificación del usuario
                            <input className='input' type="text" placeholder='Identificacion' name='identificacion' defaultValue={queryData.Usuario.identificacion} />
                        </label>
                        <DropDown
                            label='Estado de la persona:'
                            name='estado'
                            defaultValue={queryData.Usuario.estado}
                            required
                            options={Enum_EstadoUsuario}
                        />
                        <span>Rol de Usuario: {queryData.Usuario.rol}</span>
                        <ButtonLoading
                            text='Editar usuario'
                            disabled={Object.keys(formData).length === 0}
                            loading={mutationLoading}
                        />
                    </div>

                </form>
            </div>


        </div>
    )
}

export default EditarUsuario
