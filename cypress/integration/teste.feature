Feature: Automação de formulário

    Scenario: Preencher campo primeiro nome
        Given que acesso o site automation
        When preencher campo primeiro nome
        And clico no botão Refresh
        Then verifico que a tela foi atualizada
