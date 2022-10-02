import { Request, Response } from "express";
import { CollaboratorRepository } from "../repositories/CollaboratorRepository";
import { CreateCollaboratorService } from "../services/CreateCollaboratorService";

class CreateCollaboratorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const collaboratorRepository = new CollaboratorRepository();
    const createCollaboratorService = new CreateCollaboratorService(
      collaboratorRepository
    );

    const { name, email, cpf, cellphone, balance, companyId } = request.body;

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
