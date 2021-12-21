import { gql } from "@apollo/client";

const GET_USUARIOS = gql`
  query Usuarios {
    Usuarios {
      nombre
      rol
      apellido
      correo
      identificacion
    }
  }
`;

export { GET_USUARIOS };
