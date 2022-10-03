import { Request, Response } from "express";
import { CoordinatesRepository } from "../repositories/CoordinatesRepository";
import { CreateCoordinateService } from "../services/CreateCoordinateService";

class CreateCoordinatesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const coordinatesRepository = new CoordinatesRepository();
    const createCoordinatesService = new CreateCoordinateService(
      coordinatesRepository
    );

    const { x, y, collaboratorId, adjacencyList } = request.body;

    const coordinate = await createCoordinatesService.perform({
      x,
      y,
      collaboratorId,
      adjacencyList,
    });

    return response.json(coordinate);
  }
}

export { CreateCoordinatesController };
