import { Coordinates } from "../../coordinates/entities/Coordinates";

class Company {
  id?: string;
  name: string;
  branch: string;
  cellphone: string;
  mail: string;
  plan: string;
  location: Coordinates;
}

export { Company }; 