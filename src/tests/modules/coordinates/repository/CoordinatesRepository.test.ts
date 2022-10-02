import { Collaborator } from "../../../../modules/collaborator/entities/Collaborator";
import { CollaboratorRepositoryInMemory } from "../../../../modules/collaborator/repositories/in-memory/CollaboratorRepositoryInMemory";
import { describe, expect, beforeEach, it } from "vitest";
import { CoordinatesRepositoryInMemory } from "../../../../modules/coordinates/repositories/in-memory/CoordinatesRepository";

let coordinatesRepository: CoordinatesRepositoryInMemory;
let collaboratorRepository: CollaboratorRepositoryInMemory;

let collaboratorModel: Collaborator = {
  id: 1,
  email: "teste@user.com",
  name: "test",
  cpf: "123.123.123-32",
  balance: 320.0,
  cellphone: "61999999999",
};

describe("Coordinates repository", () => {
  beforeEach(() => {
    coordinatesRepository = new CoordinatesRepositoryInMemory();
    collaboratorRepository = new CollaboratorRepositoryInMemory();
  });

  it("creates a new coordinate", async () => {
    const collaborator = await collaboratorRepository.create(collaboratorModel);
    const coordinate = await coordinatesRepository.create({
      id: 1,
      collaboratorId: collaborator.id,
      x: "12.1231",
      y: "23.1234",
      adjacencyList: [],
    });

    expect(coordinate).toHaveProperty("id");
  });

  it("delete a coordinate", async () => {
    const collaborator = await collaboratorRepository.create(collaboratorModel);
    const coordinate = await coordinatesRepository.create({
      id: 1,
      collaboratorId: collaborator.id,
      x: "12.1231",
      y: "23.1234",
      adjacencyList: [],
    });

    await coordinatesRepository.destroy(coordinate.id);

    expect(coordinatesRepository.coordinates).toHaveLength(0);
  });

  it("returns all coordinates from a user", async () => {
    const collaborator = await collaboratorRepository.create(collaboratorModel);
    for (let i = 0; i < 5; i++) {
      await coordinatesRepository.create({
        id: i,
        collaboratorId: collaborator.id,
        x: "12.1231",
        y: "23.1234",
        adjacencyList: [],
      });
    }

    const coordinates = await coordinatesRepository.findAll(collaborator);

    expect(coordinates).toHaveLength(5);
  });

  it("find coordinate by id", async () => {
    const collaborator = await collaboratorRepository.create(collaboratorModel);
    const coordinate = await coordinatesRepository.create({
      id: 1,
      collaboratorId: collaborator.id,
      x: "12.1231",
      y: "23.1234",
      adjacencyList: [],
    });

    const findCoordinate = await coordinatesRepository.findById(coordinate.id);

    expect(findCoordinate).toHaveProperty("id");
  });

  it("update coordinate data", async () => {
    const newX = "54.1232";
    const newY = "94.1232";

    const collaborator = await collaboratorRepository.create(collaboratorModel);
    const coordinate = await coordinatesRepository.create({
      id: 1,
      collaboratorId: collaborator.id,
      x: "12.1231",
      y: "23.1234",
      adjacencyList: [],
    });

    const expectedCoordinate = {
      id: 1,
      collaboratorId: collaborator.id,
      x: newX,
      y: newY,
    };

    const updatedCoordinate = await coordinatesRepository.update(
      coordinate,
      newX,
      newY
    );

    expect(updatedCoordinate).toMatchObject(expectedCoordinate);
  });
});
