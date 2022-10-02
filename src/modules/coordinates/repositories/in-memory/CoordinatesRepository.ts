import { Collaborator } from "modules/collaborator/entities/Collaborator";
import { Coordinates } from "../../../../modules/coordinates/entities/Coordinates";
import { ICoordinatesRepository } from "../interfaces/ICoordinatesRepository";

class CoordinatesRepositoryInMemory implements ICoordinatesRepository {
  coordinates: Coordinates[] = [];

  async create({
    id,
    collaboratorId,
    x,
    y,
    adjacencyList,
  }: Coordinates): Promise<Coordinates> {
    const coordinate = new Coordinates();

    Object.assign(coordinate, {
      id,
      collaboratorId,
      x,
      y,
      adjacencyList,
    });
    this.coordinates.push(coordinate);

    return coordinate;
  }

  async destroy(id: number): Promise<void> {
    this.coordinates = this.coordinates.filter(
      (coordinates) => coordinates.id !== id
    );
  }

  async findAll(collaborator: Collaborator): Promise<Coordinates[]> {
    const coordinates = this.coordinates.filter(
      (coordinates) => coordinates.collaboratorId === collaborator.id
    );

    return coordinates;
  }

  async findById(id: number): Promise<Coordinates> {
    const findCoordinate = this.coordinates.find(
      (coordinate) => coordinate.id === id
    );

    return findCoordinate;
  }

  async update(
    coordinates: Coordinates,
    x: string,
    y: string
  ): Promise<Coordinates> {
    let updatedCoordinate = {
      ...coordinates,
      x,
      y,
    };

    return updatedCoordinate;
  }
}

export { CoordinatesRepositoryInMemory };
