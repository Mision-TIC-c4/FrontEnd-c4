import { gql } from "@apollo/client";

const AVANCE_PRO = gql`
  query avanceProy($idProyecto: String!) {
    filtrarAvance(idProyecto: $idProyecto) {
      descripcion
    }
  }
`;

export { AVANCE_PRO };
