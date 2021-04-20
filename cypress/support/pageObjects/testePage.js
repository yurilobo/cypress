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
        cy.get(Elementos.campoSexo()).check('Male')
    }

    preencherCampoHobbies(){
        cy.get(Elementos.campoHobbies()).check(['Movies'])
    }


    selecionarLinguas(){
        cy.get(Elementos.campoLinguagem()).click({force: true})
        cy.get('.ui-corner-all').contains('Portuguese').click()
        cy.get('.ui-corner-all').contains('English').click()
       
    }
    escolherLocalizacao(){
        cy.get(Elementos.campoPais()).click({force: true})
        cy.get('.select2-search__field').type('aus').click()
        cy.get('.select2-search__field').type('{enter}')
    }
    selecionoSkill(){
       
        cy.get(Elementos.campoSkill()).select("Android")       
    }
       
    selecionarLocalizacao(){
        cy.get(Elementos.campoLocal()).select('Brazil')
        
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
        cy.get(Elementos.campoSenha()).type('987654321')
    }

    preencherCampoConfirmarSenha(){
        cy.get(Elementos.campoConfirmarSenha()).type('987654321')
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
