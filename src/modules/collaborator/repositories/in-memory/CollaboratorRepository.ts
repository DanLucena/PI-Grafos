import { Collaborator } from "modules/collaborator/entities/Collaborator";
import { ICollaboratorRepository } from "../interfaces/ICollaboratorRepository";

class CollaboratorRepository implements ICollaboratorRepository {
  async create(data: Collaborator): Promise<Collaborator> {
    return;
  }

  async destroy(id: string): Promise<void> {
    return;
  }

  async findByEmail(email: string): Promise<Collaborator> {
    return;
  }

  async findById(id: string): Promise<Collaborator> {
    return;
  }
}

export { CollaboratorRepository };