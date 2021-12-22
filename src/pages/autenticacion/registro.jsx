import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'
import useFormData from 'hooks/useFormData'
import ButtonLoading from 'components/ButtonLoading'
import DropDown from 'components/Dropdown'
import { Enum_EstadoUsuario } from 'utils/enums'
import { toast } from 'react-toastify'
import { REGISTRAR } from 'graphql/usuarios/mutations'
import { Enum_Rol } from 'utils/enums'


const Registro = () => {
    const { form, formData, updateFormData } = useFormData(null);
    const navigate = useNavigate();
    const [registro, { data: mutationData }] = useMutation(REGISTRAR)

    const submitForm = async (e) => {
        e.preventDefault();
        console.log(formData);
        await
            registro({
                variables: { formData },
            });
    }

    useEffect(() => {
        if (mutationData) {
            if (mutationData.registro) {
                // setToken(mutationData.registro.token);
                navigate('/');
            }
        }

    }, [mutationData, navigate])
    return (
        <div>


            <div className='flex flex-col w-full h-full items-center justify-center p-3'>
                <div className=' flex justify-between'>
                    <h2 className='title'>Registrar usuario</h2>
                </div>
                <form action=""
                    onSubmit={submitForm}
                    onChange={updateFormData}
                    ref={form}
                    className='flex flex-col items-center justify-center'>
                    <div className='formulario'>
                        <label className='label' htmlFor="">Nombre del usuario
                            <input className='input' type="text" placeholder='Nombre' name='nombre' />
                        </label>
                        <label className='label' htmlFor="">Apellido del usuario
                            <input className='input' type="text" placeholder='Apellido' name='apellido' />
                        </label>
                        <label className='label' htmlFor="">Correo del usuario
                            <input className='input' type="text" placeholder='Correo' name='correo' />
                        </label>
                        <label className='label' htmlFor="">Identificación del usuario
                            <input className='input' type="text" placeholder='Identificacion' name='identificacion' />
                        </label>
                        <DropDown
                            label='Rol de usuario'
                            name='rol'
                            required
                            options={Enum_Rol}
                        />

                        <ButtonLoading
                            text='Registrarme'
                            disabled={Object.keys(formData).length === 0}
                            loading={false}
                        />
                        <span>¿Ya tienes una cuenta?</span>
                        <Link to='/auth/login'>
                            <span className='text-blue-700'>Inicia sesión</span>
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Registro
