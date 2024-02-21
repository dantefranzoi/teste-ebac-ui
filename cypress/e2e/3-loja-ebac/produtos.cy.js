/// <reference types="cypress"/>
import produtosPages from "../../support/page-objects/produtos.pages";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPages.visitarUrl()
    });
    
    it('Deve selecionar um produto da lista', () => {
            produtosPages.buscarProdutoLista('Aero Daily Fitness Tee')
                cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });


    it('Deve buscar um produto com sucesso', () => {
        produtosPages.buscarProdutos('Arcadio Gym Short')
        cy.get('.product_title').should('contain','Arcadio Gym Short')
    });

    it('Deve visitar a página do produto', () => {
        
    });

    it('Deve adicionar produto ao carrinho', () => {
        
    });
});