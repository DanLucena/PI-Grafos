import { ICoordinatesRepository } from "../repositories/interfaces/ICoordinatesRepository";

class DestroyCoordinateService {
  constructor(private coordinatesRepository: ICoordinatesRepository) {}

  async perform(id: number): Promise<void> {
    await this.coordinatesRepository.destroy(id);
  }
}

export { DestroyCoordinateService };
