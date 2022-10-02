import { Collaborator } from "modules/collaborator/entities/Collaborator";

interface ICollaboratorRepository {
  create(data: Collaborator): Promise<Collaborator>;
  destroy(id: number): Promise<void>;
  findById(id: number): Promise<Collaborator>;
  findByEmail(email: string): Promise<Collaborator>;
}

export { ICollaboratorRepository };
