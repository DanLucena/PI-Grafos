import { CustomError } from "../../../shared/errors/CustomError";
import { Company } from "../entities/Company";
import { ICompanyRepository } from "../repositories/interfaces/ICompanyRepository";

class CreateCompanyService {
  constructor(private companyRepository: ICompanyRepository) { }

  async execute({ name, branch, cellphone, mail, plan, location }: Company): Promise<Company> {
    await this.checkCompanyAlreadyExists(mail);

    const company = await this.companyRepository.create({ name, branch, cellphone, mail, plan, location });

    return company;
  }

  private async checkCompanyAlreadyExists(email: string): Promise<void> {
    const company = await this.companyRepository.findByEmail(email);

    if (company) {
      throw new CustomError("User already exists", 400);
    }
  }
}

export { CreateCompanyService };