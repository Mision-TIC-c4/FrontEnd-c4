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
    }
  }
`;

export { GET_USUARIOS, GET_USUARIO };
