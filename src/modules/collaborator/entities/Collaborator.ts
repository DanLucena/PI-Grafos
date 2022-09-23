import { ICoordinates } from "shared/interfaces/ICoordinates";

class Collaborator {
  id?: string;
  name: string;
  email: string;
  cellphone: string;
  cpf: string;
  balance: number;
  location: ICoordinates;
}

export { Collaborator };