import { Request, Response } from "express";
import { CoordinateRelationRepository } from "../repositories/CoordinateRelationRepository";
import { DeleteCoordinateRelationService } from "../services/DeleteCoordinateRelationService";

class DeleteCoordinateRelationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const coordinatesRelationRepository = new CoordinateRelationRepository();
    const deleteCoordinatesRelationService = new DeleteCoordinateRelationService(
      coordinatesRelationRepository
    );

    const {relationId} = request.body;
    await deleteCoordinatesRelationService.perform(relationId);

    return response.json();
  }
}

export { DeleteCoordinateRelationController };
