import { Company } from "../entities/Company";
import { ICompanyRepository } from "./interfaces/ICompanyRepository";
import { prismaClient } from "../../../shared/clients/prismaClient";

class CompanyRepository implements ICompanyRepository {
  async create({
    name,
    mail,
    branch,
    cellphone,
    password,
    token = "",
    plan,
  }: Company): Promise<Company> {
    const company = await prismaClient.company.create({
      data: {
        name,
        mail,
        branch,
        cellphone,
        password,
        token,
        plan,
      },
    });

    return company;
  }

  async destroy(id: number): Promise<void> {
    await prismaClient.company.delete({
      where: {
        id,
      },
    });
  }

  async findByEmail(email: string): Promise<Company> {
    const company = await prismaClient.company.findUnique({
      where: {
        mail: email,
      },
    });

    return company;
  }

  async findById(id: number): Promise<Company> {
    const company = await prismaClient.company.findUnique({
      where: {
        id,
      },
    });

    return company;
  }

  async updateToken(company: Company, token: string): Promise<string> {
    await prismaClient.company.update({
      where: {
        id: company.id,
      },
      data: {
        token,
      },
    });

    return token;
  }
}

export { CompanyRepository };
