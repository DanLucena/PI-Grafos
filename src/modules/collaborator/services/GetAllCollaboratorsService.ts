import { Collaborator } from "../entities/Collaborator";
import { ICollaboratorRepository } from "../repositories/interfaces/ICollaboratorRepository";

class GetAllCollaboratorsService {
  constructor(private collaboratorRepository: ICollaboratorRepository) {}

  async execute(companyId: number): Promise<Collaborator[]> {
    return await this.collaboratorRepository.findAll(companyId);
  }
}

export { GetAllCollaboratorsService };
