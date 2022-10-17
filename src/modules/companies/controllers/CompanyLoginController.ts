import { Request, Response } from "express";
import { CompanyRepository } from "../repositories/CompanyRepository";
import { CompanyLoginService } from "../services/CompanyLoginService";

class CompanyLoginController {
  async handle(request: Request, response: Response): Promise<Response> {
    const companyRepository = new CompanyRepository();
    const companyLoginService = new CompanyLoginService(companyRepository);

    const { email, password } = request.body;

    const token = await companyLoginService.execute({
      email,
      password,
    });

    return response.json(token);
  }
}

export { CompanyLoginController };
