import { Request, Response } from "express";
import { CoordinateRelationRepository } from "../repositories/CoordinateRelationRepository";
import { GetCoordinatesRelationService } from "../services/GetCoordinatesRelationService";

class GetCoordinatesRelationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const coordinatesRelationRepository = new CoordinateRelationRepository();
    const getCoordinatesRelationService = new GetCoordinatesRelationService(
      coordinatesRelationRepository
    );

    const {baseCoordinateIds} = request.body;

    const coordinateRelation = await getCoordinatesRelationService.perform(baseCoordinateIds);

    return response.json(coordinateRelation);
  }
}

export { GetCoordinatesRelationController };
