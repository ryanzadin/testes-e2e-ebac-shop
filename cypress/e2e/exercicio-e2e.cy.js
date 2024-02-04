/// <reference types="cypress" />
import adicionarProdutoPage from "../support/page_objects/adicionar-produto.page";
let dadosLogin
context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.get('.icon-user-unfollow').click()
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        })
        cy.visit('/produtos/')
        cy.fixture('produtos').then(dados => {
            adicionarProdutoPage.buscarProdutoLista(dados[0].nomeProduto)
            adicionarProdutoPage.addProdutoCarrinho(dados[0].tamanho, dados[0].cor, dados[0].quantidade)
            cy.visit('/produtos/')
            adicionarProdutoPage.buscarProdutoLista(dados[1].nomeProduto)
            adicionarProdutoPage.addProdutoCarrinho(dados[1].tamanho, dados[1].cor, dados[1].quantidade)
            cy.visit('/produtos/')
            adicionarProdutoPage.buscarProdutoLista(dados[2].nomeProduto)
            adicionarProdutoPage.addProdutoCarrinho(dados[2].tamanho, dados[2].cor, dados[2].quantidade)
            cy.visit('/produtos/')
            adicionarProdutoPage.buscarProdutoLista(dados[3].nomeProduto)
            adicionarProdutoPage.addProdutoCarrinho(dados[3].tamanho, dados[3].cor, dados[3].quantidade)
            cy.get('.woocommerce-message > .button').click()
            cy.get('.checkout-button').click()
            cy.get('#terms').click()
            cy.get('#place_order').click()
        })

    });

})
