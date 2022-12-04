import { CollaboratorRepository } from "../../collaborator/repositories/CollaboratorRepository";
import { CoordinatesRepository } from "../../coordinates/repositories/CoordinatesRepository";
import { CalculateLongestPathService } from "../services/CalculateLongestPathService";
import { Request, Response } from "express";

class CalculateLongestPathController {
  async handle(request: Request, response: Response): Promise<Response> {
    const collaboratorRepository = new CollaboratorRepository();
    const coordinatesRepository = new CoordinatesRepository();
    const calculateLongestPathService = new CalculateLongestPathService(
      collaboratorRepository,
      coordinatesRepository
    );

    const { collaboratorId } = request.body;

    const { finalValue, route } = await calculateLongestPathService.perform(collaboratorId);

    return response.json({result: finalValue, route: route});
  }
}

export { CalculateLongestPathController };
