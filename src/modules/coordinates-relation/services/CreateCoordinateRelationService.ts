import { ICoordinateRelationRepository } from "../repositories/interfaces/ICoordinateRelationRepository";
import { CoordinateRelation } from "../entities/CoordinateRelation";
import { CustomError } from "../../../shared/errors/CustomError";

class CreateCoordinateRelationService {
  constructor(
    private coordinatesRelationRepository: ICoordinateRelationRepository
  ) {}

  async perform({
    baseCoordinateId,
    destinyCoordinateId,
    distance,
  }: CoordinateRelation): Promise<CoordinateRelation> {
    if(await this.relationAlreadyExists(baseCoordinateId, destinyCoordinateId)){
      throw new CustomError("This relation already exists", 400);
    }

    const coordinate = this.coordinatesRelationRepository.create({
      baseCoordinateId,
      destinyCoordinateId,
      distance,
    });

    return coordinate;
  }

  private async relationAlreadyExists(baseCoordinateId: number, destinyCoordinateId: number): Promise<boolean> {
    const coordinate = await this.coordinatesRelationRepository.find(baseCoordinateId, destinyCoordinateId)

    if(coordinate) return true;
    return false;
  }
}

export { CreateCoordinateRelationService };
