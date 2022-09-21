import { describe, expect, beforeEach, it } from 'vitest';
import { CompanyRepositoryInMemory } from '../../../../modules/companies/repositories/in-memory/CompanyRepositoryInMemory';

let companiesRepositoryInMemory: CompanyRepositoryInMemory;

describe("Company repository", () => {
  beforeEach(() => {
    companiesRepositoryInMemory = new CompanyRepositoryInMemory();
  });

  it("creates a new company", async () => {
    const company = await companiesRepositoryInMemory.create({
      id: "1",
      name: 'testCompany',
      branch: 'Technology',
      cellphone: '556199999999',
      mail: 'testCompany@gmail.com',
      plan: 'Enterprise',
      location: {
        x: "12.01293Z",
        y: "12.01293Z",
        z: "12.01293Z"
      }
    });

    expect(company).toHaveProperty("id");
  });

  it("deletes a company", async () => {
    const company = await companiesRepositoryInMemory.create({
      id: "1",
      name: 'testCompany',
      branch: 'Technology',
      cellphone: '556199999999',
      mail: 'testCompany@gmail.com',
      plan: 'Enterprise',
      location: {
        x: "12.01293Z",
        y: "12.01293Z",
        z: "12.01293Z"
      }
    });

    await companiesRepositoryInMemory.destroy(company.id);

    expect(companiesRepositoryInMemory.companies).toHaveLength(0);
  });

  it("find a company by the email", async () => {
    const company = await companiesRepositoryInMemory.create({
      id: "1",
      name: 'testCompany',
      branch: 'Technology',
      cellphone: '556199999999',
      mail: 'testCompany@gmail.com',
      plan: 'Enterprise',
      location: {
        x: "12.01293Z",
        y: "12.01293Z",
        z: "12.01293Z"
      }
    });

    const foundCompany = await companiesRepositoryInMemory.findByEmail(company.mail);

    expect(foundCompany).toEqual(company);
  });

  it("find a company by id", async () => {
    const company = await companiesRepositoryInMemory.create({
      id: "1",
      name: 'testCompany',
      branch: 'Technology',
      cellphone: '556199999999',
      mail: 'testCompany@gmail.com',
      plan: 'Enterprise',
      location: {
        x: "12.01293Z",
        y: "12.01293Z",
        z: "12.01293Z"
      }
    });

    const foundCompany = await companiesRepositoryInMemory.findById(company.id);

    expect(foundCompany).toEqual(company);
  });
});