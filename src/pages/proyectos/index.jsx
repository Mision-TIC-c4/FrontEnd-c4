import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from '@apollo/client'
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { PROYECTOS } from 'graphql/proyectos/queries'
import DropDown from 'components/Dropdown'
import { Enum_EstadoProyecto, Enum_TipoObjetivo } from 'utils/enums';
import ButtonLoading from 'components/ButtonLoading';
import useFormData from 'hooks/useFormData';
import { useUser } from 'context/userContext';
import { toast } from 'react-toastify';
import { Dialog, Input } from '@mui/material';
import ReactLoading from 'react-loading';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import PrivateComponent from 'components/PrivateComponent';

const AccordionStyled = styled((props) => <Accordion {...props} />)(({ theme }) => ({
  backgroundColor: '#919191',
}));
const AccordionSummaryStyled = styled((props) => <AccordionSummary {...props} />)(({ theme }) => ({
  backgroundColor: '#919191',
}));
const AccordeonDetailsStyled = styled((props) => <AccordionDetails {...props} />)(({ theme }) => ({
  backgroundColor: '#ccc',
}))

const IndexProyectos = () => {
  const { data: queryData, loading, error } = useQuery(PROYECTOS);
  useEffect(() => {
    console.log('Datos server', queryData)
  }, [queryData]);
  useEffect(() => {
    if (error) {
      console.log('error consultando los proyectos')
    }
  }, [error])
  if (loading) return <div>Cargando...</div>

  return (
    <div>
      <h2 className='title m-2'>Listado de proyectos
        </h2>
      <table className="tabla">
        <thead>
          <th>Nombre</th>
          <th>Estado</th>
          <th>Avances</th>
        </thead>
        <tbody>
          {
            queryData && queryData.Proyectos ? (
              <>
                {
                  queryData && queryData.Proyectos.map((pr) => {
                    return (

                      <tr key={pr._id}>
                        <td>{pr.nombre}</td>
                        <td>{pr.estado}</td>
                        <td>Descripcion:{pr.avances.descripcion}
                        
                          <Link to={`/avances/${pr._id}`}>
                            <i className='fa fa-edit'></i>
                          </Link>
                        </td>
                        <td>

                        </td>
                      </tr>
                    )
                  })
                }

              </>
            ) : (
              <div>No datos</div>
            )
          }
        </tbody>
      </table>
      
    </div>

  )
}


// const IndexProyectos = () => {
//   const { data: queryData, loading } = useQuery(PROYECTOS);
//   if (loading) return <div>Loading...</div>;

//   if (queryData.PROYECTOS) {

//     return (
//       <div>
//         <div className='flex w-full items-center justify-center'>
//           <h1 className='text-2xl font-bold text-gray-900'>
//             Listado de Proyectos
//           </h1>
//         </div>


//         <PrivateComponent roleList={['ADMINISTRADOR', 'LIDER']}>
//           <div className='my-2 self-end'>
//             <button
//               type='button'
//               className='bgBotones text-gray-50 p-2 rounded-lg shadow-lg hover:bg-indigo-400'
//             >
//               <Link to='/proyectos/nuevo'>Crear un nuevo proyecto</Link>
//             </button>
//           </div>
//         </PrivateComponent>
//         {queryData.Proyectos.map((proyecto) => (
//           <AccordionProyecto proyecto={proyecto} />
//         ))}
//       </div>
//     );

//   }
//   return <></>;
// };

// const AccordionProyecto = ({ proyecto }) => {
//   const [showDialog, setShowDialog] = useState(false);
//   return (
//     <>
//       <div className='m-2'>
//         <AccordionStyled>
//           <AccordionSummaryStyled
//             expandIcon={<i className='fa fa-chevron-down' />}

//             aria-controls="panel4bh-content"
//             id="panel4bh-header"
//           >
//             Título
//             <div className='flex w-full justify-between'>
//               <div className='uppercase font-bold text-gray-100 '>
//                 {proyecto.nombre} - {proyecto.estado}
//               </div>
//             </div>
//           </AccordionSummaryStyled>
//         </AccordionStyled>
//         <AccordeonDetailsStyled>
//           <div>
//             hola
//             <PrivateComponent roleList={['ADMINISTRADOR']}>
//               <button
//                 type='button'
//                 onClick={() => {
//                   setShowDialog(true);
//                 }}
//               >
//                 <i className='mx-4 fas fa-pen text-yellow-600 hover:text-yellow-400' />
//               </button>
//             </PrivateComponent>
//             <PrivateComponent roleList={['ESTUDIANTE']}>
//               <InscripcionProyecto
//                 idProyecto={proyecto._id}
//                 estado={proyecto.estado}
//                 inscripciones={proyecto.inscripciones}
//               />
//             </PrivateComponent>
//             <div>Liderado Por: {proyecto.lider.correo}</div>
//             <div className='flex'>
//               {proyecto.objetivos.map((objetivo, index) => (
//                 <Objetivo
//                   index={index}
//                   _id={objetivo._id}
//                   idProyecto={proyecto._id}
//                   tipo={objetivo.tipo}
//                   descripcion={objetivo.descripcion}
//                 />
//               ))}
//             </div>
//           </div>
//         </AccordeonDetailsStyled>

//         <Dialog
//           open={showDialog}
//           onClose={() => {
//             setShowDialog(false);
//           }}
//         >
//           <FormEditProyecto _id={proyecto._id} />
//         </Dialog>
//       </div>

//     </>
//   )
// }

// const FormEditProyecto = ({ _id }) => {
//   const { form, formData, updateFormData } = useFormData();


//   //const [editarProyecto, { loading }] = useMutation(EDITAR_PROYECTO);

//   const submitForm = (e) => {
//     e.preventDefault();
//     // editarProyecto({
//     //   variables: {
//     //     _id,
//     //     campos: formData,
//     //   },
//     // });
//   };

//   return (
//     <div className='p-4'>
//       <h1 className='font-bold'>Modificar Estado del Proyecto</h1>
//       <form
//         ref={form}
//         onChange={updateFormData}
//         onSubmit={submitForm}
//         className='flex flex-col items-center'
//       >
//         <DropDown
//           label='Estado del Proyecto'
//           name='estado'
//           options={Enum_EstadoProyecto}
//         />
//         <ButtonLoading disabled={false} loading={false} text='Confirmar' />
//       </form>
//     </div>
//   );
// };

// const Objetivo = ({ index, _id, idProyecto, tipo, descripcion }) => {
//   const [showEditDialog, setShowEditDialog] = useState(false);
//   // const [
//   //   eliminarObjetivo,
//   //   { data: dataMutationEliminar, loading: eliminarLoading },
//   // ] = useMutation(ELIMINAR_OBJETIVO, {
//   //   refetchQueries: [{ query: PROYECTOS }],
//   // });

//   // useEffect(() => {
//   //   if (dataMutationEliminar) {
//   //     toast.success('objetivo eliminado satisfactoriamente');
//   //   }
//   // }, [dataMutationEliminar]);

//   // const ejecutarEliminacion = () => {
//   //   eliminarObjetivo({ variables: { idProyecto, idObjetivo: _id } });
//   // };

//   // if (eliminarLoading)
//   //   return (
//   //     <ReactLoading
//   //       data-testid='loading-in-button'
//   //       type='spin'
//   //       height={100}
//   //       width={100}
//   //     />
//   //   );
//   return (
//     <div className='mx-5 my-4 bg-gray-50 p-8 rounded-lg flex flex-col items-center justify-center shadow-xl'>
//       <div className='text-lg font-bold'>{tipo}</div>
//       <div>{descripcion}</div>
//       <PrivateComponent roleList={['ADMINISTRADOR', 'LIDER']}>
//         <div className='flex my-2'>
//           <button type='button' onClick={() => setShowEditDialog(true)}>
//             <i className='fas fa-pen mx-2 text-yellow-500 hover:text-yellow-200 cursor-pointer' />
//           </button>
//           {/* <button type='button' onClick={ejecutarEliminacion}>
//             <i className='fas fa-trash mx-2 text-red-500 hover:text-red-200 cursor-pointer' />
//           </button> */}
//         </div>
//         <Dialog open={showEditDialog} onClose={() => setShowEditDialog(false)}>
//           <EditarObjetivo
//             descripcion={descripcion}
//             tipo={tipo}
//             index={index}
//             idProyecto={idProyecto}
//             setShowEditDialog={setShowEditDialog}
//           />
//         </Dialog>
//       </PrivateComponent>
//     </div>
//   );
// };

// const EditarObjetivo = ({
//   descripcion,
//   tipo,
//   index,
//   idProyecto,
//   setShowEditDialog,
// }) => {
//   const { form, formData, updateFormData } = useFormData();

//   // const [editarObjetivo, { data: dataMutation, loading }] = useMutation(
//   //   EDITAR_OBJETIVO,
//   //   {
//   //     refetchQueries: [{ query: PROYECTOS }],
//   //   }
//   // );

//   // useEffect(() => {
//   //   if (dataMutation) {
//   //     toast.success('Objetivo editado con exito');
//   //     setShowEditDialog(false);
//   //   }
//   // }, [dataMutation, setShowEditDialog]);

//   const submitForm = (e) => {
//     e.preventDefault();
//     // editarObjetivo({
//     //   variables: {
//     //     idProyecto,
//     //     indexObjetivo: index,
//     //     campos: formData,
//     //   },
//     // }).catch((error) => {
//     //   toast.error('Error editando el objetivo', error);
//     // });
//   };
//   return (
//     <div className='p-4'>
//       <h1 className='text-2xl font-bold text-gray-900'>Editar Objetivo</h1>
//       <form ref={form} onChange={updateFormData} onSubmit={submitForm}>
//         <DropDown
//           label='Tipo de Objetivo'
//           name='tipo'
//           required
//           options={Enum_TipoObjetivo}
//           defaultValue={tipo}
//         />
//         <Input
//           label='Descripcion del objetivo'
//           name='descripcion'
//           required
//           defaultValue={descripcion}
//         ></Input>
//         <ButtonLoading
//           text='Confirmar'
//           disabled={Object.keys(formData).length === 0}
//           loading={false}
//         />
//       </form>
//     </div>
//   );
// };

// const InscripcionProyecto = ({ idProyecto, estado, inscripciones }) => {
//   const [estadoInscripcion, setEstadoInscripcion] = useState('');

//   // falta captura del error de la mutacion
//   //const [crearInscripcion, { data, loading }] = useMutation(CREAR_INSCRIPCION);
//   const { userData } = useUser();

//   // useEffect(() => {
//   //   if (userData && inscripciones) {
//   //     const flt = inscripciones.filter(
//   //       (el) => el.estudiante._id === userData._id
//   //     );
//   //     if (flt.length > 0) {
//   //       setEstadoInscripcion(flt[0].estado);
//   //     }
//   //   }
//   // }, [userData, inscripciones]);

//   // useEffect(() => {
//   //   if (data) {
//   //     toast.success('inscripcion creada con exito');
//   //   }
//   // }, [data]);

//   const confirmarInscripcion = () => {
//     // crearInscripcion({
//     //   variables: { proyecto: idProyecto, estudiante: userData._id },
//     // });
//   };

//   return (
//     <>
//       {estadoInscripcion !== '' ? (
//         <div className='flex flex-col items-start'>
//           <span>
//             Ya estas inscrito en este proyecto y el estado es{' '}
//             {estadoInscripcion}
//           </span>
//           {estadoInscripcion === 'ACEPTADO' && (
//             <Link
//               to={`/avances/${idProyecto}`}
//               className='bg-yellow-700 p-2 rounded-lg text-white my-2 hover:bg-yellow-500'
//             >
//               Agregar Avance
//             </Link>
//           )}
//         </div>
//       ) : (
//         <ButtonLoading
//           onClick={() => confirmarInscripcion()}
//           disabled={estado === 'INACTIVO'}
//           loading={false}
//           text='Inscribirme en este proyecto'
//         />
//       )}
//     </>
//   );
// };
export default IndexProyectos;
