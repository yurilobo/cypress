/*global Given, Then, When, And*/

import testePage from '../pageobjects/testePage'
const Pagina = new testePage

Given("que acesso o site automation", () => {
    Pagina.abrirUrl();
})
When("preencher campo primeiro nome", ( )=> {
    Pagina.preencherCampoPrimeiroNome();    
})
And("preencho o campo segundo nome", () => {
    Pagina.preencherCampoSegundoNome();
})
And("preencho o campo endereco", ()=>{
    Pagina.preencherCampoEndereco();
})

And("preencho o campo email", ()=>{
    Pagina.preencherCampoEmail();
})

And("preencho o campo telefone", ()=>{
    Pagina.preencherCampoTelefone();
})

And("clica na opcao male", ()=>{
    Pagina.preencherCampoSexo();
})
And("clico na opcao movies", ()=>{
    Pagina.preencherCampoHobbies();
})



And("seleciono a opcao portugues e ingles", ()=>{
    Pagina.selecionarLinguas();   
})

And("seleciono o pais", ()=>{
    Pagina.escolherLocalizacao();
})
And("seleciono a skill",() => {
    Pagina.selecionoSkill();
})
And("seleciono a opcao ", () =>{
    Pagina.selecionarLocalizacao();
})
And("seleciono o ano", ()=>{
    Pagina.selecionarAno();
})
And("seleciono o mes", ()=>{
    Pagina.selecionarMes();
})
And("seleciono o dia", ()=>{
    Pagina.selecionarDia();
})

And("preencho o campo senha", ()=>{
    Pagina.preencherCampoSenha();
})

And("preencho o campo confirmar senha", ()=>{
    Pagina.preencherCampoConfirmarSenha();
})

And("clico no botão Refresh", () => {
    Pagina.clicarbotaoRefresh();
})

Then("verifico que a tela foi atualizada", () => {
    Pagina.validarTelaLimpa();
})