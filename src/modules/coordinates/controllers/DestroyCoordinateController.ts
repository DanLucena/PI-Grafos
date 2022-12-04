import { Request, Response } from "express";
import { CoordinatesRepository } from "../repositories/CoordinatesRepository";
import { DestroyCoordinateService } from "../services/DestroyCoordinateService";

class DestroyCoordinateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const coordinatesRepository = new CoordinatesRepository();
    const destroyCoordinatesService = new DestroyCoordinateService(
      coordinatesRepository
    );

    const { id } = request.body;

    await destroyCoordinatesService.perform(id);

    return response.send();
  }
}

export { DestroyCoordinateController };
