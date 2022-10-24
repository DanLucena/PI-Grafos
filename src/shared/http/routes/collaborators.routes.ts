import { Router } from "express";
import { CreateCollaboratorController } from "../../../modules/collaborator/controllers/CreateCollaboratorController";
import { GetAllCollaboratorsController } from "../../../modules/collaborator/controllers/GetAllCollaboratorsController";

const collaboratorsRoutes = Router();
const createCollaboratorController = new CreateCollaboratorController();
const getAllCollaboratorsController = new GetAllCollaboratorsController();

collaboratorsRoutes.post("/create", createCollaboratorController.handle);
collaboratorsRoutes.get("/all", getAllCollaboratorsController.handle);

export { collaboratorsRoutes };
