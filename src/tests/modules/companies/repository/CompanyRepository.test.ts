import { describe, expect, beforeEach, it } from "vitest";
import { CompanyRepositoryInMemory } from "../../../../modules/companies/repositories/in-memory/CompanyRepositoryInMemory";

let companiesRepositoryInMemory: CompanyRepositoryInMemory;

describe("Company repository", () => {
  beforeEach(() => {
    companiesRepositoryInMemory = new CompanyRepositoryInMemory();
  });

  it("creates a new company", async () => {
    const company = await companiesRepositoryInMemory.create({
      id: 1,
      name: "testCompany",
      branch: "Technology",
      cellphone: "556199999999",
      mail: "testCompany@gmail.com",
      password: "123321",
      plan: "Enterprise",
    });

    expect(company).toHaveProperty("id");
  });

  it("deletes a company", async () => {
    const company = await companiesRepositoryInMemory.create({
      id: 1,
      name: "testCompany",
      branch: "Technology",
      cellphone: "556199999999",
      mail: "testCompany@gmail.com",
      password: "123321",
      plan: "Enterprise",
    });

    await companiesRepositoryInMemory.destroy(company.id);

    expect(companiesRepositoryInMemory.companies).toHaveLength(0);
  });

  it("find a company by the email", async () => {
    const company = await companiesRepositoryInMemory.create({
      id: 1,
      name: "testCompany",
      branch: "Technology",
      cellphone: "556199999999",
      mail: "testCompany@gmail.com",
      password: "123321",
      plan: "Enterprise",
    });

    const foundCompany = await companiesRepositoryInMemory.findByEmail(
      company.mail
    );

    expect(foundCompany).toEqual(company);
  });

  it("find a company by id", async () => {
    const company = await companiesRepositoryInMemory.create({
      id: 1,
      name: "testCompany",
      branch: "Technology",
      cellphone: "556199999999",
      mail: "testCompany@gmail.com",
      password: "123321",
      plan: "Enterprise",
    });

    const foundCompany = await companiesRepositoryInMemory.findById(company.id);

    expect(foundCompany).toEqual(company);
  });
});
