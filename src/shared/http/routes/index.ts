import { Router } from "express";
import { companiesRoutes } from "./companies.routes";
import { collaboratorsRoutes } from "./collaborators.routes";

const router = Router();

router.use("/companies", companiesRoutes);
router.use("/collaborators", collaboratorsRoutes);

export { router };
