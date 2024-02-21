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
        produtosPages.visitarProduto('Arcadio-Gym-Short')
        cy.get('.product_title').should('contain','Arcadio Gym Short')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 7
        produtosPages.buscarProdutos('Aero Daily Fitness Tee')
        produtosPages.addProdutoCarrinho('M', 'Brown', qtd)
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar produto ao carrinho buscando da massa de dadoscy', () => {
        cy.fixture('produtos').then(dados => {
            produtosPages.buscarProdutos(dados[1].nomeProduto)
            produtosPages.addProdutoCarrinho(
                dados[1].tamanho, 
                dados[1].cor, 
                dados[1].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
        })
        });
        
        
});