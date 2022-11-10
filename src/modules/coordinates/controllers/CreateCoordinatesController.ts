import { Request, Response } from "express";
import { CollaboratorRepository } from "../../collaborator/repositories/CollaboratorRepository";
import { CoordinatesRepository } from "../repositories/CoordinatesRepository";
import { CreateCoordinateService } from "../services/CreateCoordinateService";

class CreateCoordinatesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const coordinatesRepository = new CoordinatesRepository();
    const collaboratorRepository = new CollaboratorRepository();
    const createCoordinatesService = new CreateCoordinateService(
      coordinatesRepository
    );

    const { x, y, email } = request.body;

    const collaborator = await collaboratorRepository.findByEmail(email);

    const coordinate = await createCoordinatesService.perform({
      x,
      y,
      collaboratorId: collaborator.id,
    });

    return response.json(coordinate);
  }
}

export { CreateCoordinatesController };
