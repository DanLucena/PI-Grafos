import { ICollaboratorRepository } from "modules/collaborator/repositories/interfaces/ICollaboratorRepository";
import { CustomError } from "../../../shared/errors/CustomError";
import { Coordinates } from "../entities/Coordinates";
import { ICoordinatesRepository } from "../repositories/interfaces/ICoordinatesRepository";

class FindAllCoordinatesService {
  constructor(
    private coordinatesRepository: ICoordinatesRepository,
    private collaboratorRepository: ICollaboratorRepository
  ) {}

  async execute(id: number): Promise<Coordinates[]> {
    const collaborator = await this.findCollaborator(id);
    const coordinates = await this.coordinatesRepository.findAll(collaborator);

    return coordinates;
  }

  private async findCollaborator(id: number) {
    const collaborator = await this.collaboratorRepository.findById(id);
    if (!collaborator) {
      throw new CustomError("Collaborator does not exists", 400);
    }

    return collaborator;
  }
}

export { FindAllCoordinatesService };
