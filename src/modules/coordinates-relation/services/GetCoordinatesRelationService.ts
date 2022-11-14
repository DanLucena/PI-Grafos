import { ICoordinateRelationRepository } from "../repositories/interfaces/ICoordinateRelationRepository";
import { CoordinateRelation } from "../entities/CoordinateRelation";

class GetCoordinatesRelationService {
  constructor(
    private coordinatesRelationRepository: ICoordinateRelationRepository
  ) {}

  async perform(baseCoordinateId : number[]): Promise<CoordinateRelation[]> {
    const coordinate = this.coordinatesRelationRepository.get(
      baseCoordinateId,
    );

    return coordinate;
  }
}

export { GetCoordinatesRelationService };
