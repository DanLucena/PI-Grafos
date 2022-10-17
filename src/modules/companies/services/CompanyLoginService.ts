import { CustomError } from "../../../shared/errors/CustomError";
import { Company } from "../entities/Company";
import { ICompanyRepository } from "../repositories/interfaces/ICompanyRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { ICompanyLoginDto } from "../dtos/ICompanyLoginDto";
import { TokenDTO } from "../dtos/TokenDTO";

class CompanyLoginService {
  constructor(private companyRepository: ICompanyRepository) {}

  async execute({ email, password }: ICompanyLoginDto): Promise<TokenDTO> {
    const company = await this.findCompany(email);
    await this.checkPassword(password, company.password);

    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 8,
        email: company.mail,
      },
      "d97b6ee088e1bd4c40104fbcd874a73f3a8bbc4bb20983ed1b031e36374591fd"
    );

    await this.companyRepository.updateToken(company, token);
    const finalToken = new TokenDTO(token);

    return finalToken;
  }

  private async findCompany(email: string): Promise<Company> {
    const company = await this.companyRepository.findByEmail(email);

    if (!company) {
      throw new CustomError("Company doesn't exists", 400);
    }

    return company;
  }

  private async checkPassword(
    password: string,
    companyPassword: string
  ): Promise<void> {
    const passwordMatch = await compare(password, companyPassword);

    if (!passwordMatch) {
      throw new CustomError("Email or password incorrect!");
    }
  }
}

export { CompanyLoginService };
