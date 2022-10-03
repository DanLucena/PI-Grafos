import { Router } from "express";
import { CreateCoordinatesController } from "../../../modules/coordinates/controllers/CreateCoordinatesController";

const coordinatesRoutes = Router();
const createCoordinatesController = new CreateCoordinatesController();

coordinatesRoutes.post("/create", createCoordinatesController.handle);

export { coordinatesRoutes };
