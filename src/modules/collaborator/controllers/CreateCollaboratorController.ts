import { Request, Response } from "express";
import { CompanyRepository } from "../../companies/repositories/CompanyRepository";
import { CollaboratorRepository } from "../repositories/CollaboratorRepository";
import { CreateCollaboratorService } from "../services/CreateCollaboratorService";

class CreateCollaboratorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const collaboratorRepository = new CollaboratorRepository();
    const companyRepository = new CompanyRepository();
    const createCollaboratorService = new CreateCollaboratorService(
      collaboratorRepository
    );

    const companyId = (
      await companyRepository.findByToken(request.headers.token as string)
    ).id;
    const balance = 0;

    const { name, email, cpf, cellphone } = request.body;

    const collaborator = await createCollaboratorService.execute({
      name,
      email,
      cpf,
      cellphone,
      balance,
      companyId,
    });

    return response.json(collaborator);
  }
}

export { CreateCollaboratorController };
