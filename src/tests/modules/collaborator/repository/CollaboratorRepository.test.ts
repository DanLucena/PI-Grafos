import { CollaboratorRepositoryInMemory } from "../../../../modules/collaborator/repositories/in-memory/CollaboratorRepositoryInMemory";
import { describe, expect, beforeEach, it } from "vitest";
import { Collaborator } from "../../../../modules/collaborator/entities/Collaborator";

let collaboratorRepository: CollaboratorRepositoryInMemory;
let collaboratorModel: Collaborator = {
  id: 1,
  email: "teste@user.com",
  name: "test",
  cpf: "123.123.123-32",
  balance: 320.0,
  cellphone: "61999999999",
};

describe("Collaborator repository", () => {
  beforeEach(async () => {
    collaboratorRepository = new CollaboratorRepositoryInMemory();
  });

  it("creates a new user", async () => {
    const collaborator = await collaboratorRepository.create(collaboratorModel);

    expect(collaborator).toHaveProperty("id");
  });

  it("deletes a collaborator", async () => {
    const collaborator = await collaboratorRepository.create(collaboratorModel);
    await collaboratorRepository.destroy(collaborator.id);

    expect(collaboratorRepository.collaborators).toHaveLength(0);
  });

  it("find a collaborator by email", async () => {
    const collaborator = await collaboratorRepository.create(collaboratorModel);
    const findUser = await collaboratorRepository.findByEmail(
      collaboratorModel.email
    );

    expect(findUser).toHaveProperty("id");
  });

  it("find a collaborator by id", async () => {
    const collaborator = await collaboratorRepository.create(collaboratorModel);
    const findUser = await collaboratorRepository.findById(
      collaboratorModel.id
    );

    expect(findUser).toHaveProperty("id");
  });
});
