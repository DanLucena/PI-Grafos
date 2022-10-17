import { Router } from "express";
import { CreateCompanyController } from "../../../modules/companies/controllers/CreateCompanyController";
import { CompanyLoginController } from "../../../modules/companies/controllers/CompanyLoginController";
import { checkCreationToken } from "../middlewares/checkCreationToken";

const companiesRoutes = Router();
const createCompanyController = new CreateCompanyController();
const companyLoginController = new CompanyLoginController();

companiesRoutes.post(
  "/create",
  checkCreationToken,
  createCompanyController.handle
);

companiesRoutes.post("/login", companyLoginController.handle);

export { companiesRoutes };
