import { ICoordinateRelationRepository } from "./interfaces/ICoordinateRelationRepository";
import { prismaClient } from "../../../shared/clients/prismaClient";
import { CoordinateRelation } from "../entities/CoordinateRelation";

class CoordinateRelationRepository implements ICoordinateRelationRepository {
  async create({
    baseCoordinateId,
    destinyCoordinateId,
    distance,
  }: CoordinateRelation): Promise<CoordinateRelation> {
    const coordinate = await prismaClient.coordinatesRelations.create({
      data: {
        baseCoordinateId,
        destinyCoordinateId,
        distance,
      },
    });

    return coordinate;
  }

  async get(baseCoordinateId: number[]): Promise<CoordinateRelation[]> {
    return await prismaClient.coordinatesRelations.findMany({
      where: {
        baseCoordinateId: {
          in: baseCoordinateId
        }
      }
    });
  }

  async delete(relationId: number): Promise<void> {
    await prismaClient.coordinatesRelations.delete({
      where: {
        id: relationId
      }
    });
  }

  async find(baseCoordinateId: number, destinyCoordinateId: number): Promise<CoordinateRelation> {
    return await prismaClient.coordinatesRelations.findFirst({
      where: {
        baseCoordinateId,
        destinyCoordinateId
      }
    })
  }
}

export { CoordinateRelationRepository };
