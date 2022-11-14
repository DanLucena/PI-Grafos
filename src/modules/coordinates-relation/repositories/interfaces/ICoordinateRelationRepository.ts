import { CoordinateRelation } from "../../entities/CoordinateRelation";

interface ICoordinateRelationRepository {
  create(data: CoordinateRelation): Promise<CoordinateRelation>;
  get(baseCoordinateId: number[]): Promise<CoordinateRelation[]>;
  delete(relationId: number): Promise<void>;
  find(baseCoordinateId: number, destinyCoordinateId: number): Promise<CoordinateRelation>;
}

export { ICoordinateRelationRepository };
