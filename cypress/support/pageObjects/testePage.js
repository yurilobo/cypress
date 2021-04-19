/// <reference types = "Cypress"/>

import testeElementos from '../ElementosPage/testeElementos.js'
const Elementos = new testeElementos

//const NavegadorUrl = Cypress.config("http://demo.automationtesting.in/Register.html")

class TestePage {
    abrirUrl(){
        cy.visit("http://demo.automationtesting.in/Register.html")
    }
    preencherCampoPrimeiroNome(){
        cy.get(Elementos.campoPrimeiroNome()).type('Yuri Anderson ')
    }
    clicarbotaoRefresh(){
        cy.get(Elementos.botaorefresh()).click()
    }
    validarTelaLimpa(){
        cy.screenshot()
    }
}
export default TestePage;
