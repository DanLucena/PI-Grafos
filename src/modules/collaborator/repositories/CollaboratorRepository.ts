import { ICollaboratorRepository } from "./interfaces/ICollaboratorRepository";
import { prismaClient } from "../../../shared/clients/prismaClient";
import { Collaborator } from "../entities/Collaborator";

class CollaboratorRepository implements ICollaboratorRepository {
  async create({
    name,
    email,
    cpf,
    cellphone,
    balance,
    companyId,
  }: Collaborator): Promise<Collaborator> {
    const collaborator = await prismaClient.collaborator.create({
      data: {
        name,
        email,
        cpf,
        cellphone,
        balance,
        companyId,
      },
    });

    return collaborator;
  }

  async destroy(id: number): Promise<void> {
    await prismaClient.collaborator.delete({
      where: {
        id,
      },
    });
  }

  async findByEmail(email: string): Promise<Collaborator> {
    const collaborator = await prismaClient.collaborator.findUnique({
      where: {
        email,
      },
    });
    return collaborator;
  }

  async findById(id: number): Promise<Collaborator> {
    const collaborator = await prismaClient.collaborator.findUnique({
      where: {
        id,
      },
    });

    return collaborator;
  }
}

export { CollaboratorRepository };
