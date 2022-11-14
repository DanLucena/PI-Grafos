import { ICoordinateRelationRepository } from "../repositories/interfaces/ICoordinateRelationRepository";

class DeleteCoordinateRelationService {
  constructor(
    private coordinatesRelationRepository: ICoordinateRelationRepository
  ) {}

  async perform(relationId: number): Promise<void> {
   this.coordinatesRelationRepository.delete(relationId);
  }
}

export { DeleteCoordinateRelationService };
