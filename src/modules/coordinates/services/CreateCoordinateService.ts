import { Coordinates } from "../entities/Coordinates";
import { ICoordinatesRepository } from "../repositories/interfaces/ICoordinatesRepository";

class CreateCoordinateService {
  constructor(private coordinatesRepository: ICoordinatesRepository) {}

  async perform({ collaboratorId, x, y }: Coordinates): Promise<Coordinates> {
    const coordinate = this.coordinatesRepository.create({
      collaboratorId,
      x,
      y,
      adjacencyList: [],
    });

    return coordinate;
  }
}

export { CreateCoordinateService };
