import { Company } from '../../entities/Company';

interface ICompanyRepository {
  create(data: Company): Promise<Company>;
  destroy(id: string): Promise<void>;
  findById(id: string): Promise<Company>;
  findByEmail(email: string): Promise<Company>;
}

export { ICompanyRepository };