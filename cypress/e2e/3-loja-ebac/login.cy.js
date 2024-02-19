/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')
describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('dante.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, dante.teste (não é dante.teste? Sair)')

    })

it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
    cy.get('#username').type('dante1.teste@teste.com.br')
    cy.get('#password').type('teste@123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
});

it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username').type('dante.teste@teste.com.br')
    cy.get('#password').type('teste@113')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail dante.teste@teste.com.br está incorreta. Perdeu a senha?')
});

it('Deve fazer login com sucesso - Usando massa de dados', () => {
    cy.get('#username').type(perfil['usuario:'])
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, dante.teste (não é dante.teste? Sair)')
});

it.only('Deve fazer login com sucesso - Usando fixture', () => {
    cy.fixture('perfil').then( dados => {
    cy.get('#username').type(perfil['usuario:'])
    cy.get('#password').type(dados.senha , { log: false})
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, dante.teste (não é dante.teste? Sair)')
   })

});

})