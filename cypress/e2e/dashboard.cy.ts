import { Actions, Columns, Values } from "../support/constants";

const { employeeName, email, cpf, admissionDate } = Values.valid

describe("dashboard", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should create new admisision', () => {
    cy.get("button").contains('Nova Admissão').click();
    cy.get('input[name="employeeName"]').type(employeeName);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="cpf"]').type(cpf);
    cy.get('input[name="admissionDate"]').type(admissionDate);
    cy.get('button').contains('Cadastrar').click();
    cy.get('button').contains('sim').click();
    cy.contains(Columns.REVIEW).get('div').contains(employeeName);
    cy.get('div').contains('Criado com sucesso');
  });

  it('should change card with status review to aproved', () => {
    cy.contains(Columns.REVIEW).get('div').contains(employeeName);
    cy.get('button').contains(Actions.APROVE).click();
    cy.get('button').contains('sim').click();
    cy.contains(Columns.APROVED).get('div').contains(employeeName);
    cy.get('div').contains('Atualizado com sucesso');
  });

  it('should change card with status aproved to review', () => {
    cy.contains(Columns.APROVED).get('div').contains(employeeName)
    cy.get('button').contains(Actions.REVIEWTRY).click();
    cy.get('button').contains('sim').click();
    cy.contains(Columns.REVIEW).get('div').contains(employeeName);
    cy.get('div').contains('Atualizado com sucesso');
  });

  it('should change card with status review to reproved', () => {
    cy.contains(Columns.REVIEW).get('div').contains(employeeName)
    cy.get('button').contains(Actions.REPROVE).click();
    cy.get('button').contains('sim').click();
    cy.contains(Columns.REPROVED).get('div').contains(employeeName);
    cy.get('div').contains('Atualizado com sucesso');
  });

  it('should change card with status reproved to review', () => {
    cy.contains(Columns.REPROVED).get('div').contains(employeeName)
    cy.get('button').contains(Actions.REVIEWTRY).click();
    cy.get('button').contains('sim').click();
    cy.contains(Columns.REVIEW).get('div').contains(employeeName);
    cy.get('div').contains('Atualizado com sucesso');
  });

  it('should remove card', () => {
    cy.contains(employeeName).first();
    cy.get('button').last().click();
    cy.get('button').contains('sim').click();
    cy.get('div').contains('Removido com sucesso');
  });
});