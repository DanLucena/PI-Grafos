import { Company } from "../../entities/Company";

interface ICompanyRepository {
  create(data: Company): Promise<Company>;
  destroy(id: number): Promise<void>;
  findById(id: number): Promise<Company>;
  findByEmail(email: string): Promise<Company>;
  updateToken(company: Company, token: string): Promise<string>;
}

export { ICompanyRepository };
