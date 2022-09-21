import { Company } from "../../entities/Company";
import { ICompanyRepository } from "../interfaces/ICompanyRepository";

class CompanyRepositoryInMemory implements ICompanyRepository {
  companies: Company[] = [];

  async create({ id, name, mail, branch, cellphone, plan, location }: Company): Promise<Company> {
    const company = new Company();

    Object.assign(company, {
      id,
      name,
      mail,
      branch,
      cellphone,
      plan,
      location
    });
    this.companies.push(company);

    return company;
  }

  async destroy(id: string): Promise<void> {
    this.companies = this.companies.filter(item => item.id !== id);
  }

  async findById(id: string): Promise<Company> {
    const foundCompany = this.companies.find(item => item.id === id);

    return foundCompany;
  }

  async findByEmail(email: string): Promise<Company> {
    const foundCompany = this.companies.find(item => item.mail === email);

    return foundCompany;
  }
}

export { CompanyRepositoryInMemory };