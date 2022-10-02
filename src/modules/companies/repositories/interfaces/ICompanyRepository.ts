import { Company } from "../../entities/Company";

interface ICompanyRepository {
  create(data: Company): Promise<Company>;
  destroy(id: number): Promise<void>;
  findById(id: number): Promise<Company>;
  findByEmail(email: string): Promise<Company>;
}

export { ICompanyRepository };
