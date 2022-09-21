import { Request, Response } from 'express';

class CreateCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    return response;
  }
}

export { CreateCompanyController };