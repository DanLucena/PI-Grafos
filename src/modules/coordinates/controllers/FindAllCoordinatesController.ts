import { Request, Response } from "express";
import { CollaboratorRepository } from "../../../modules/collaborator/repositories/CollaboratorRepository";
import { CoordinatesRepository } from "../repositories/CoordinatesRepository";
import { FindAllCoordinatesService } from "../services/FindAllCoordinatesService";

interface UserId {
  userId: string;
}

class FindAllCoordinatesController {
  async handle(
    request: Request<unknown, unknown, unknown, UserId>,
    response: Response
  ): Promise<Response> {
    const coordinatesRepository = new CoordinatesRepository();
    const collaboratorRepository = new CollaboratorRepository();

    const findAllCoordinatesService = new FindAllCoordinatesService(
      coordinatesRepository,
      collaboratorRepository
    );

    const userId = parseInt(request.query.userId);

    const coordinates = await findAllCoordinatesService.execute(userId);

    return response.json(coordinates);
  }
}

export { FindAllCoordinatesController };
