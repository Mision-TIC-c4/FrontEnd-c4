import { gql } from "@apollo/client";

const PROYECTOS = gql`
  query misProyectos {
    Proyectos {
      nombre
      estado
      avances {
        descripcion
      }
    }
  }
`;

export { PROYECTOS };
