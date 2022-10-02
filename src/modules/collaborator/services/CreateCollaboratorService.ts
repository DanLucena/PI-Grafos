import { CustomError } from "../../../shared/errors/CustomError";
import { Collaborator } from "../entities/Collaborator";
import { ICollaboratorRepository } from "../repositories/interfaces/ICollaboratorRepository";

class CreateCollaboratorService {
  constructor(private collaboratorRepository: ICollaboratorRepository) {}

  async execute({
    name,
    email,
    cpf,
    cellphone,
    balance,
    companyId,
  }: Collaborator): Promise<Collaborator> {
    await this.checkCompanyAlreadyExists(email);

    const collaborator = await this.collaboratorRepository.create({
      name,
      email,
      cpf,
      cellphone,
      balance,
      companyId,
    });

    return collaborator;
  }

  private async checkCompanyAlreadyExists(email: string): Promise<void> {
    const collaborator = await this.collaboratorRepository.findByEmail(email);

    if (collaborator) {
      throw new CustomError("Collaborator already exists", 400);
    }
  }
}

export { CreateCollaboratorService };
