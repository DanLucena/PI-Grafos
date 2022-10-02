import { Router } from "express";
import { CreateCompanyController } from "../../../modules/companies/controllers/CreateCompanyController";

const companiesRoutes = Router();
const createCompanyController = new CreateCompanyController();

companiesRoutes.post("/create", createCompanyController.handle);

export { companiesRoutes };
