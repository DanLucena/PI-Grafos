import { Request, Response } from "express";
import { CompanyRepository } from "../repositories/CompanyRepository";
import { CreateCompanyService } from "../services/CreateCompanyService";

class CreateCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const companyRepository = new CompanyRepository();
    const createCompanyService = new CreateCompanyService(companyRepository);

    const { name, mail, branch, cellphone, password, plan } = request.body;

    const company = await createCompanyService.execute({
      name,
      mail,
      branch,
      cellphone,
      password,
      plan,
    });

    return response.json(company);
  }
}

export { CreateCompanyController };
