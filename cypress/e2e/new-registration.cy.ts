import { Columns, Values } from "../support/constants";
import { Elements } from "../support/elements";

const { invalid, valid } = Values

describe("New Registration", () => {
  beforeEach(() => {
    cy.visit('/new-registration');
  });

  it('should create new admisision', () => {
    cy.get(Elements.employeeName).type(valid.employeeName);
    cy.get(Elements.email).type(valid.email);
    cy.get(Elements.cpf).type(valid.cpf);
    cy.get(Elements.admissionDate).type(valid.admissionDate);
    cy.get('button').contains('Cadastrar').click();
    cy.get('button').contains('sim').click();
    cy.contains(Columns.REVIEW).get('div').contains(valid.employeeName);
    cy.get('div').contains('Criado com sucesso');
  });

  it('should show error when create admission with data invalid', () => {
    cy.get(Elements.employeeName).type(invalid.employeeName);
    cy.get(Elements.email).type(invalid.email);
    cy.get(Elements.cpf).type(invalid.cpf);
    cy.get(Elements.admissionDate).type(invalid.admissionDate);
    cy.get('button').contains('Cadastrar').click();
  });
})