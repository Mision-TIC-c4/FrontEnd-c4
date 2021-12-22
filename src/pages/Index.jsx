import React, { useEffect } from 'react'
import 'styles/styles.css';
import 'styles/fonts.css';
import ButtonLoading from 'components/ButtonLoading';
import { Link, useNavigate } from 'react-router-dom';
import useFormData from 'hooks/useFormData';
import { useMutation } from '@apollo/client';
import { LOGIN } from 'graphql/autenticacion/mutations';
import { useAuth } from 'context/authContext';

const Login = () => {
    const navigate = useNavigate();
    //const { setToken } = useAuth();
    const { form, formData, updateFormData } = useFormData();

    const [login, { data: dataMutation, loading: mutationLoading }] =
        useMutation(LOGIN);
    //Formulario
    const submitForm = (e) => {
        e.preventDefault();

        login({
            variables: formData,
        });
    };

    useEffect(() => {
        // if (dataMutation) {
        //     if (dataMutation.login.token) {
        //         setToken(dataMutation.login.token);
        //         navigate('/');
        //     }
        // }
        if (dataMutation) {
            navigate('/');
        }
    }, [dataMutation, navigate]);
    return (
        <div className='flex flex-col items-center'>
            <div className=' w-full flex pt-20 items-center title justify-center'>Sistema de gestión de proyectos 4 Project</div>
            <div className='pt-20'>
                <form onSubmit={submitForm}
                    onChange={updateFormData}
                    ref={form} className='flex flex-col'>

                    <label className='items-center flex w-full p-2 justify-center' htmlFor="" name="correo">
                        Correo
                        <input className='input' type="text" name="mail" />
                    </label>
                    <label className='items-center flex w-full p-2' htmlFor="" name="password">
                        Password
                        <input className='input' type="text" name="password" />
                    </label>
                    <Link className='flex justify-center 'to='/'>

                        <ButtonLoading
                            disabled={Object.keys(formData).length === 0}
                            loading={mutationLoading}
                            text='Iniciar Sesión'
                        />
                    </Link>
                </form>
            </div>
            <span>¿No está registrado?</span>
            <div className='flex flex-col items-center  w-full m-2'>
                <Link to='/auth/registro'>
                    <button className='p-2 rounded bg-purple-500 m-2 text-white'>Registrese acá</button>
                </Link>
            </div>
        </div>
    )
}

export default Login
