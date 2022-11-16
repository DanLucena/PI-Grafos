import { Collaborator } from "modules/collaborator/entities/Collaborator";

interface ICollaboratorRepository {
  create(data: Collaborator): Promise<Collaborator>;
  updateBalance(data: Collaborator, newBalance: number): Promise<void>;
  destroy(id: number): Promise<void>;
  findById(id: number): Promise<Collaborator>;
  findByEmail(email: string): Promise<Collaborator>;
  findAll(companyId: number): Promise<Collaborator[]>;
}

export { ICollaboratorRepository };
