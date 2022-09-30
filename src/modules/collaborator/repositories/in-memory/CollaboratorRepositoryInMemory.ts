import { Collaborator } from "../../entities/Collaborator";
import { ICollaboratorRepository } from "../interfaces/ICollaboratorRepository";

class CollaboratorRepositoryInMemory implements ICollaboratorRepository {
  collaborators: Collaborator[] = [];

  async create({ id, name, email, cpf, cellphone, balance }: Collaborator): Promise<Collaborator> {
    const collaborator = new Collaborator();

    Object.assign(collaborator, {
      id,
      name,
      email,
      cpf,
      cellphone,
      balance
    });
    this.collaborators.push(collaborator);

    return collaborator;
  }

  async destroy(id: string): Promise<void> {
    this.collaborators = this.collaborators.filter(collaborator => collaborator.id !== id);
  }

  async findByEmail(email: string): Promise<Collaborator> {
    const findUser = this.collaborators.find(collaborator => collaborator.email === email);

    return findUser;
  }

  async findById(id: string): Promise<Collaborator> {
    const findUser = this.collaborators.find(collaborator => collaborator.id === id);

    return findUser;
  }
}

export { CollaboratorRepositoryInMemory };