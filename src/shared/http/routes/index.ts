import { Router } from "express";
import { companiesRoutes } from "./companies.routes";
import { collaboratorsRoutes } from "./collaborators.routes";
import { coordinatesRoutes } from "./coordinates.routes";

const router = Router();

router.use("/companies", companiesRoutes);
router.use("/collaborators", collaboratorsRoutes);
router.use("/coordinates", coordinatesRoutes);

export { router };
