import { CustomError } from "../../../shared/errors/CustomError";
import { Collaborator } from "../entities/Collaborator";
import { ICollaboratorRepository } from "../repositories/interfaces/ICollaboratorRepository";

class CreateCollaboratorService {
  constructor(private collaboratorRepository: ICollaboratorRepository) { }

  async perform({ name, email, cpf, cellphone, balance }: Collaborator): Promise<Collaborator> {
    await this.checkCompanyAlreadyExists(email);

    const collaborator = await this.collaboratorRepository.create({ name, email, cpf, cellphone, balance });

    return collaborator;
  }

  private async checkCompanyAlreadyExists(email: string): Promise<void> {
    const collaborator = await this.collaboratorRepository.findByEmail(email);

    if (collaborator) {
      throw new CustomError("User already exists", 400);
    }
  }
}

export { CreateCollaboratorService };