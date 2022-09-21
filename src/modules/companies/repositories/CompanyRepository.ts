import { Company } from "../entities/Company";
import { ICompanyRepository } from "./interfaces/ICompanyRepository";

class CompanyRepository implements ICompanyRepository {
  create(data: Company): Promise<Company> {
    return;
  }

  destroy(id: string): Promise<void> {
    return;
  }

  findByEmail(email: string): Promise<Company> {
    return;
  }

  findById(id: string): Promise<Company> {
    return;
  }
}

export { CompanyRepository };