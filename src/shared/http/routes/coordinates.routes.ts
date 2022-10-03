import { Router } from "express";
import { CreateCoordinatesController } from "../../../modules/coordinates/controllers/CreateCoordinatesController";
import { FindAllCoordinatesController } from "../../../modules/coordinates/controllers/FindAllCoordinatesController";

const coordinatesRoutes = Router();
const createCoordinatesController = new CreateCoordinatesController();
const findAllCoordinatesController = new FindAllCoordinatesController();

coordinatesRoutes.post("/create", createCoordinatesController.handle);
coordinatesRoutes.get("/get-all", findAllCoordinatesController.handle);

export { coordinatesRoutes };
