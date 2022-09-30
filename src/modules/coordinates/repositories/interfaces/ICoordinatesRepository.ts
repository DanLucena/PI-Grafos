import { Collaborator } from "modules/collaborator/entities/Collaborator";
import { Coordinates } from "../../../coordinates/entities/Coordinates";

interface ICoordinatesRepository {
  create(data: Coordinates): Promise<Coordinates>;
  destroy(id: string): Promise<void>;
  findAll(collaborator: Collaborator): Promise<Coordinates[]>
  findById(id: string): Promise<Coordinates>;
  update(coordinate: Coordinates, x: string, y: string): Promise<Coordinates>;
}

export { ICoordinatesRepository };