import { describe, beforeEach, it, expect } from "vitest";
import { Collaborator } from "../../../../modules/collaborator/entities/Collaborator";
import { CollaboratorRepositoryInMemory } from "../../../../modules/collaborator/repositories/in-memory/CollaboratorRepositoryInMemory";
import { CreateCollaboratorService } from "../../../../modules/collaborator/services/CreateCollaboratorService";

let collaboratorRepository: CollaboratorRepositoryInMemory;
let createCollaboratorService: CreateCollaboratorService;

let collaboratorModel: Collaborator = {
  email: "teste@user.com",
  name: "test",
  cpf: "123.123.123-32",
  balance: 320.0,
  cellphone: "61999999999",
};

describe("#execute", () => {
  beforeEach(() => {
    collaboratorRepository = new CollaboratorRepositoryInMemory();
    createCollaboratorService = new CreateCollaboratorService(
      collaboratorRepository
    );
  });

  it("creates a new collaborator if it doesn't exist", async () => {
    const collaborator = await createCollaboratorService.execute(
      collaboratorModel
    );

    expect(collaborator).toMatchObject(collaboratorModel);
  });

  it("won't create a collaborator if already exists", async () => {
    const collaborator = await createCollaboratorService.execute(
      collaboratorModel
    );

    try {
      const sameCollaborator = await createCollaboratorService.execute(
        collaboratorModel
      );
    } catch (err) {}

    expect(collaboratorRepository.collaborators).toHaveLength(1);
  });
});
