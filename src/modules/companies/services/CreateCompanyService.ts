import { CustomError } from "../../../shared/errors/CustomError";
import { Company } from "../entities/Company";
import { ICompanyRepository } from "../repositories/interfaces/ICompanyRepository";
import { hash } from "bcrypt";

class CreateCompanyService {
  constructor(private companyRepository: ICompanyRepository) {}

  async execute({
    name,
    branch,
    cellphone,
    mail,
    password,
    plan,
  }: Company): Promise<Company> {
    await this.checkCompanyAlreadyExists(mail);
    const digestedPassword = await hash(password, 8);

    const company = await this.companyRepository.create({
      name,
      branch,
      cellphone,
      mail,
      password: digestedPassword,
      plan,
    });

    return company;
  }

  private async checkCompanyAlreadyExists(email: string): Promise<void> {
    const company = await this.companyRepository.findByEmail(email);

    if (company) {
      throw new CustomError("Company already exists", 400);
    }
  }
}

export { CreateCompanyService };
