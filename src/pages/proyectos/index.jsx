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
import { Dialog } from '@mui/material';
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
  const { data: queryData, loading } = useQuery(PROYECTOS);
  if (loading) return <div>Loading...</div>;

  if (queryData.PROYECTOS) {

    return (
      <div>
        <div className='flex w-full items-center justify-center'>
          <h1 className='text-2xl font-bold text-gray-900'>
            Listado de Proyectos
          </h1>
        </div>
        <PrivateComponent roleList={['ADMINISTRADOR', 'LIDER']}>
          <div className='my-2 self-end'>
            <button
              type='button'
              className='bgBotones text-gray-50 p-2 rounded-lg shadow-lg hover:bg-indigo-400'
            >
              <Link to='/proyectos/nuevo'>Crear un nuevo proyecto</Link>
            </button>
          </div>
        </PrivateComponent>
        {queryData.Proyectos.map((proyecto) => (
          <AccordionProyecto proyecto={proyecto} />
        ))}
      </div>
    );

  }
  return <></>;
};

const AccordionProyecto = ({ proyecto }) => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <>
      <div className='m-2'>
        <AccordionStyled>
          <AccordionSummaryStyled
            expandIcon={<i className='fa fa-chevron-down' />}

            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            Título
            <div className='flex w-full justify-between'>
              <div className='uppercase font-bold text-gray-100 '>
                {proyecto.nombre} - {proyecto.estado}
              </div>
            </div>
          </AccordionSummaryStyled>
        </AccordionStyled>
        <AccordeonDetailsStyled>
          <div>
            hola
            <PrivateComponent roleList={['ADMINISTRADOR']}>
              <button
                type='button'
                onClick={() => {
                  setShowDialog(true);
                }}
              >
                <i className='mx-4 fas fa-pen text-yellow-600 hover:text-yellow-400' />
              </button>
            </PrivateComponent>
            <PrivateComponent roleList={['ESTUDIANTE']}>
              {/* <InscripcionProyecto
                idProyecto={proyecto._id}
                estado={proyecto.estado}
                inscripciones={proyecto.inscripciones}
              /> */}
            </PrivateComponent>
            <div>Liderado Por: {proyecto.lider.correo}</div>
            <div className='flex'>
              {/* {proyecto.objetivos.map((objetivo, index) => (
                <Objetivo
                  index={index}
                  _id={objetivo._id}
                  idProyecto={proyecto._id}
                  tipo={objetivo.tipo}
                  descripcion={objetivo.descripcion}
                />
              ))} */}
            </div>
          </div>
        </AccordeonDetailsStyled>

        <Dialog
          open={showDialog}
          onClose={() => {
            setShowDialog(false);
          }}
        >
          {/* <FormEditProyecto _id={proyecto._id} /> */}
        </Dialog>
      </div>

    </>
  )
}
export default IndexProyectos;
