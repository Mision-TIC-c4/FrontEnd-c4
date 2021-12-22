import { gql } from "@apollo/client";

const GET_USUARIOS = gql`
  query UsuariosList {
    Usuarios {
      _id
      nombre
      rol
      apellido
      correo
      identificacion
      estado
    }
  }
`;

const GET_USUARIO = gql`
  query Usu($_id: String!) {
    Usuario(_id: $_id) {
      _id
      nombre
      apellido
      correo
      identificacion
      rol
      estado
    }
  }
`;

export { GET_USUARIOS, GET_USUARIO };
