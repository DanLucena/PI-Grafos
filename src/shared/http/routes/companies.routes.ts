import { Router } from 'express';
import { CreateCompanyController } from '../../../modules/companies/controllers/CreateCompanyController';
import { UpdatedCompanyController } from '../../../modules/companies/controllers/UpdatedCompanyController';

const companiesRoutes = Router();
const createCompanyController = new CreateCompanyController();
const updateCompanyController = new UpdatedCompanyController();

companiesRoutes.post("/create", createCompanyController.handle);
companiesRoutes.post("/update", updateCompanyController.handle);

export { companiesRoutes };