import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { styled } from '@mui/material/styles';

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
  return (
    <div className='m-2'>
      <AccordionStyled>
        <AccordionSummaryStyled

          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          Título
        </AccordionSummaryStyled>
      </AccordionStyled>
      <AccordeonDetailsStyled>
        <div>
          hola
        </div>
      </AccordeonDetailsStyled>
    </div>
  );
};

export default IndexProyectos;
