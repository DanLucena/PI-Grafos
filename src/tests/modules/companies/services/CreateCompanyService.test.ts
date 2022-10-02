import { Company } from "../../../../modules/companies/entities/Company";
import { describe, beforeEach, it, expect } from "vitest";
import { CompanyRepositoryInMemory } from "../../../../modules/companies/repositories/in-memory/CompanyRepositoryInMemory";
import { CreateCompanyService } from "../../../../modules/companies/services/CreateCompanyService";

let companiesRepositoryInMemory: CompanyRepositoryInMemory;
let createCompanyService: CreateCompanyService;

describe("#execute", () => {
  beforeEach(() => {
    companiesRepositoryInMemory = new CompanyRepositoryInMemory();
    createCompanyService = new CreateCompanyService(
      companiesRepositoryInMemory
    );
  });

  it("create user if it doesn't exist", async () => {
    const company: Company = {
      name: "testCompany",
      branch: "Technology",
      cellphone: "556199999999",
      mail: "testCompany@gmail.com",
      plan: "Enterprise",
    };

    const response = await createCompanyService.execute(company);

    expect(response).toEqual(company);
  });

  it("won't create a company that already exists", async () => {
    const company: Company = {
      name: "testCompany",
      branch: "Technology",
      cellphone: "556199999999",
      mail: "testCompany@gmail.com",
      plan: "Enterprise",
    };

    const firstCompany = await createCompanyService.execute(company);
    try {
      const secondCompany = await createCompanyService.execute(company);
    } catch (err) {}

    expect(companiesRepositoryInMemory.companies).toHaveLength(1);
  });
});
