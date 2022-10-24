import { Request, Response } from "express";
import { CompanyRepository } from "../../companies/repositories/CompanyRepository";
import { CollaboratorRepository } from "../repositories/CollaboratorRepository";
import { GetAllCollaboratorsService } from "../services/GetAllCollaboratorsService";

class GetAllCollaboratorsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const collaboratorRepository = new CollaboratorRepository();
    const companyRepository = new CompanyRepository();
    const getAllCollaboratorsService = new GetAllCollaboratorsService(
      collaboratorRepository
    );
    const companyId = (
      await companyRepository.findByToken(request.headers.token as string)
    ).id;

    const collaborator = await getAllCollaboratorsService.execute(companyId);

    return response.json(collaborator);
  }
}

export { GetAllCollaboratorsController };
