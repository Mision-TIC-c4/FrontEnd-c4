import { gql } from "@apollo/client";

const EDITAR_USUARIO = gql`
  mutation editarUsuario(
    $id: String
    $nombre: String
    $apellido: String
    $identificacion: String
    $correo: String
    $rol: Enum_Rol
  ) {
    editarUsuario(
      _id: $id
      nombre: $nombre
      apellido: $apellido
      identificacion: $identificacion
      correo: $correo
      rol: $rol
    ) {
      nombre
      apellido
      correo
      identificacion
      rol
    }
  }
`;

const REGISTRAR = gql`
  mutation registro(
    $nombre: String!
    $apellido: String!
    $identificacion: String!
    $correo: String!
    $rol: Enum_Rol!
    $password: String!
  ) {
    registro(
      nombre: $nombre
      apellido: $apellido
      identificacion: $identificacion
      correo: $correo
      rol: $rol
      password: $password
    ) {
      token
    }
  }
`;

export { EDITAR_USUARIO, REGISTRAR };
