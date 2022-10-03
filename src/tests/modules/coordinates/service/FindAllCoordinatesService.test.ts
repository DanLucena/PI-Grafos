import { CoordinatesRepositoryInMemory } from "../../../../modules/coordinates/repositories/in-memory/CoordinatesRepository";
import { CollaboratorRepositoryInMemory } from "../../../../modules/collaborator/repositories/in-memory/CollaboratorRepositoryInMemory";
import { FindAllCoordinatesService } from "../../../../modules/coordinates/services/FindAllCoordinatesService";
import { describe, expect, beforeEach, it } from "vitest";
import { Collaborator } from "../../../../modules/collaborator/entities/Collaborator";

let collaboratorRepository: CollaboratorRepositoryInMemory;
let coordinatesRepository: CoordinatesRepositoryInMemory;
let findAllCoordinatesController: FindAllCoordinatesService;

let collaboratorModel: Collaborator = {
  id: 1,
  email: "teste@user.com",
  name: "test",
  cpf: "123.123.123-32",
  balance: 320.0,
  cellphone: "61999999999",
};

describe("#execute", () => {
  beforeEach(() => {
    coordinatesRepository = new CoordinatesRepositoryInMemory();
    findAllCoordinatesController = new FindAllCoordinatesService(
      coordinatesRepository,
      collaboratorRepository
    );
  });

  it("return all users coordinates", async () => {
    // TODO
  });
});
