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

    preencherCampoSegundoNome(){
        cy.get(Elementos.campoSegundoNome()).type('Sousa')
    }

    preencherCampoEndereco(){
        cy.get(Elementos.campoEndereco()).type('Rua Ceara, 123 - Ceara')
    }

    preencherCampoEmail(){
        cy.get(Elementos.campoEmail()).type('yuri@sousa.com')
    }

    preencherCampoTelefone(){
        cy.get(Elementos.campoTelefone()).type('85 99999999')
    }

    preencherCampoSexo(){
        cy.xpath(Elementos.campoSexo()).fist().click()
    }

    preencherCampoHobbies(){
        cy.xpath(Elementos.campoHobbies()).click()
    }

    selecionarLanguage(){
        cy.get(Elementos.campoLinguagem()).click()
        cy.get(':nth-child(8) > .ui-corner-all')
        .trigger('mousemove').click()
        cy.get('h1').click()
    }

    selecionarSkills(){
        cy.wait(1000)
        cy.get(Elementos.campoSkills()).select('Microsoft Office', {force: true})
    }
   
    escolherLocalizacao(){
        cy.get(Elementos.campoPais()).select('Brazil')
    }
       
    selecionarLocalizacao(){
        cy.get(Elementos.campoLocal()).click()
        cy.get('#select2-country-results > :nth-child(2)')
        .trigger('mousemove').click()
    }
    selecionarAno(){
        cy.get(Elementos.campoAno()).select('1995')
        
    }
     selecionarMes(){
         cy.get(Elementos.campoMes()).select('April')
     }
     selecionarDia(){
         cy.get(Elementos.campoDia()).select('29')
     }
    preencherCampoSenha(){
        cy.xpath(Elementos.campoSenha()).type('987654321')
    }

    preencherCampoConfirmarSenha(){
        cy.xpath(Elementos.campoConfirmarSenha()).type('987654321')
    }
    
    clicarbotaoRefresh(){
        cy.get(Elementos.botaorefresh()).click()
    }
    validarTelaLimpa(){
        cy.wait(2000)
        cy.screenshot()
    }
}
export default TestePage;
