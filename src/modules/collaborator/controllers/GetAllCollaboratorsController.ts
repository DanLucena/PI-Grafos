import { Request, Response } from "express";
import { CustomError } from "../../../shared/errors/CustomError";
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
    if (!request.headers.token) {
      throw new CustomError("You must provide a valid token", 400);
    }
    const companyId = (
      await companyRepository.findByToken(request.headers.token as string)
    ).id;

    const collaborator = await getAllCollaboratorsService.execute(companyId);

    return response.json(collaborator);
  }
}

export { GetAllCollaboratorsController };
