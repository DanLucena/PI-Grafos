import { Request, Response } from "express";
import { CustomError } from "../../../shared/errors/CustomError";
import { CoordinateRelationRepository } from "../repositories/CoordinateRelationRepository";
import { CreateCoordinateRelationService } from "../services/CreateCoordinateRelationService";

class CreateCoordinatesRelationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const coordinatesRelationRepository = new CoordinateRelationRepository();
    const createCoordinatesRelationService = new CreateCoordinateRelationService(
      coordinatesRelationRepository
    );

    const { baseCoordinateId, destinyCoordinateId, distance } = request.body;

    if(!baseCoordinateId || !destinyCoordinateId) throw new CustomError("Provide the coordinates", 400);

    const coordinateRelation = await createCoordinatesRelationService.perform({
      baseCoordinateId,
      destinyCoordinateId,
      distance
    });

    return response.json(coordinateRelation);
  }
}

export { CreateCoordinatesRelationController };
