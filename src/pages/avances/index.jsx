import React from 'react'
import { useQuery } from '@apollo/client';
import { PROYECTOS } from 'graphql/proyectos/queries'
import { AVANCE_PRO } from 'graphql/avances/queries';
import { Link, NavLink } from 'react-router-dom'

const IndexAvances = () => {
    const { data: queryData, loading } = useQuery(PROYECTOS);
    const { data, } = useQuery(AVANCE_PRO);

    return (
        <div className='m-2'>
            <h3 className='title m-2'>Sección de avances
            </h3>
            {
                queryData && queryData.Proyectos ? (
                    <>
                        {
                            queryData && queryData.Proyectos.map((pr) => {
                                return (

                                    <>
                                        <div className='grid grid-cols-2'>

                                            <div className="flex rounded overflow-hidden shadow-lg bg-gray-100  sm:text-center content-center justify-around m-4">
                                                <NavLink to="/proyectos">
                                                    <div class="px-6 py-4 ">
                                                        <div class="font-bold text-xl mb-2 text-indigo-500">
                                                            <h3 className='cards'>Proyecto:</h3>
                                                            {pr.nombre}</div>
                                                        <p class="text-gray-700 text-base mt-2">
                                                            <tr key={pr._id}>
                                                                <label className='label' htmlFor="">Estado: </label>
                                                                {pr.estado}
                                                                <label className='label' htmlFor="">Descripción de Avances: {pr.avances.descripcion}</label>


                                                            </tr>
                                                        </p>
                                                    </div>
                                                    <div class="px-6 pt-4 pb-2">
                                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{pr.avances.descripcion}</span>

                                                    </div>
                                                </NavLink>
                                            </div>
                                        </div>

                                    </>

                                )
                            })
                        }

                    </>
                ) : (
                    <div>No datos</div>
                )
            }
            {data && data.filtrarAvance ? (
                <>
                    {
                        data && data.filtrarAvance.map((a) => {
                            return (
                                <div key={a._id}>

                                    < label htmlFor="" > {a.descripcion}</label>
                                </div>

                            )
                        })
                    }
                </>
            ) : (
                <div>No descripciones</div>
            )
            }
            <label htmlFor=""></label>
        </div >
    )


}

export default IndexAvances
