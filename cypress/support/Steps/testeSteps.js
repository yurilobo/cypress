/*global Given, Then, When, And*/

import testePage from '../pageobjects/testePage'
const Pagina = new testePage

Given("que acesso o site automation", () => {
    Pagina.abrirUrl();
})
When("preencher campo primeiro nome", ( )=> {
    Pagina.preencherCampoPrimeiroNome();
})
And("clico no botão Refresh", () => {
    Pagina.clicarbotaoRefresh();
})
Then("verifico que a tela foi atualizada", () => {
    Pagina.validarTelaLimpa();
})