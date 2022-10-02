import { Router } from "express";
import { CreateCollaboratorController } from "../../../modules/collaborator/controllers/CreateCollaboratorController";

const collaboratorsRoutes = Router();
const createCollaboratorController = new CreateCollaboratorController();

collaboratorsRoutes.post("/create", createCollaboratorController.handle);

export { collaboratorsRoutes };
