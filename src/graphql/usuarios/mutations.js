import { gql } from "@apollo/client";

const EDITAR_USUARIO = gql `
mutation EditarUsuario(
    $nombre: String, 
    $apellido: String, 
    $identificacion: String, 
    $correo: String, 
    $estado: Enum_EstadoUsuario, 
    $id: String) {
    editarUsuario(
        nombre: $nombre, 
        apellido: $apellido, 
        identificacion: $identificacion, 
        correo: $correo, 
        estado: $estado, 
        _id: $id) {
      nombre
      apellido
      correo
      identificacion
      password
      rol
      _id
    }
  }
`;

export { EDITAR_USUARIO };
