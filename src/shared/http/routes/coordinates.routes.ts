import { DeleteCoordinateRelationController } from "../../../modules/coordinates-relation/controllers/DeleteCoordinateRelationController";
import { CreateCoordinatesRelationController } from "../../../modules/coordinates-relation/controllers/CreateCoordinatesRelationController";
import { GetCoordinatesRelationController } from "../../../modules/coordinates-relation/controllers/GetCoordinatesRelationController";
import { CreateCoordinatesController } from "../../../modules/coordinates/controllers/CreateCoordinatesController";
import { FindAllCoordinatesController } from "../../../modules/coordinates/controllers/FindAllCoordinatesController";
import { CalculateLongestPathController } from "../../../modules/coordinates-relation/controllers/CalculateLongestPathController";
import { DestroyCoordinateController } from "../../../modules/coordinates/controllers/DestroyCoordinateController";
import { Router } from "express";

const coordinatesRoutes = Router();
const createCoordinatesController = new CreateCoordinatesController();
const findAllCoordinatesController = new FindAllCoordinatesController();
const createCoordinateRelation = new CreateCoordinatesRelationController();
const getAllCoordinateRelation = new GetCoordinatesRelationController();
const deleteCoordinateRelation = new DeleteCoordinateRelationController();
const calculateLongestPath = new CalculateLongestPathController();
const deleteCoordinate = new DestroyCoordinateController();

coordinatesRoutes.post("/create", createCoordinatesController.handle);
coordinatesRoutes.get("/get-all", findAllCoordinatesController.handle);
coordinatesRoutes.post("/create-relation", createCoordinateRelation.handle);
coordinatesRoutes.post("/get-all-relations", getAllCoordinateRelation.handle);
coordinatesRoutes.post("/delete-relation", deleteCoordinateRelation.handle);
coordinatesRoutes.post("/calculate", calculateLongestPath.handle);
coordinatesRoutes.post("/delete", deleteCoordinate.handle);

export { coordinatesRoutes };
