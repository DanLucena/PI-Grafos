import { Coordinates } from "../entities/Coordinates";
import { Collaborator } from "../../collaborator/entities/Collaborator";
import { prismaClient } from "../../../shared/clients/prismaClient";
import { ICoordinatesRepository } from "./interfaces/ICoordinatesRepository";

class CoordinatesRepository implements ICoordinatesRepository {
  async create({
    x,
    y,
    collaboratorId,
    adjacencyList,
  }: Coordinates): Promise<Coordinates> {
    const coordinate = await prismaClient.coordinates.create({
      data: {
        x,
        y,
        collaboratorId,
      },
    });

    return coordinate as Coordinates;
  }

  async findAll(collaborator: Collaborator): Promise<Coordinates[]> {
    const coordinates = await prismaClient.coordinates.findMany({
      where: {
        collaboratorId: collaborator.id,
      },
    });

    return coordinates as Coordinates[];
  }

  async destroy(id: number): Promise<void> {
    await prismaClient.coordinates.delete({
      where: {
        id,
      },
    });
  }

  async findById(id: number): Promise<Coordinates> {
    const coordinate = await prismaClient.coordinates.findUnique({
      where: {
        id,
      },
    });

    return coordinate as Coordinates;
  }

  async update(
    coordinate: Coordinates,
    x: string,
    y: string
  ): Promise<Coordinates> {
    return;
  }
}

export { CoordinatesRepository };
