import { CoordinatesRepositoryInMemory } from "../../../../modules/coordinates/repositories/in-memory/CoordinatesRepository";
import { describe, expect, beforeEach, it } from "vitest";
import { CreateCoordinateService } from "../../../../modules/coordinates/services/CreateCoordinateService";
import { Collaborator } from "../../../../modules/collaborator/entities/Collaborator";

let coordinatesRepository: CoordinatesRepositoryInMemory;
let createCoordinateService: CreateCoordinateService;

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
    createCoordinateService = new CreateCoordinateService(
      coordinatesRepository
    );
  });

  it("creates a coordinate when user exists", async () => {
    const xValue = "12.3213";
    const yValue = "32.1234";
    const coordinate = await createCoordinateService.perform({
      collaboratorId: collaboratorModel.id,
      x: xValue,
      y: yValue,
      adjacencyList: [],
    });

    const expectedCoordinate = {
      collaboratorId: collaboratorModel.id,
      x: xValue,
      y: yValue,
    };

    expect(coordinate).toMatchObject(expectedCoordinate);
  });
});
