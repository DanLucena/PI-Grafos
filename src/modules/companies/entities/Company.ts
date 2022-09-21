import { ICoordinates } from "shared/interfaces/ICoordinates";

class Company {
  id?: string;
  name: string;
  branch: string;
  cellphone: string;
  mail: string;
  plan: string;
  location: ICoordinates;
}

export { Company }; 