import { Collaborator } from "modules/collaborator/entities/Collaborator";

interface ICollaboratorRepository {
  create(data: Collaborator): Promise<Collaborator>;
  destroy(id: string): Promise<void>;
  findById(id: string): Promise<Collaborator>;
  findByEmail(email: string): Promise<Collaborator>;
}

export { ICollaboratorRepository };