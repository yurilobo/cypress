class testElementos{
    campoPrimeiroNome = () => {
        return ':nth-child(1) > :nth-child(2) > .form-control'
    }
    campoSegundoNome = () => {
        return ':nth-child(1) > :nth-child(3) > .form-control'
    }
    campoEndereco = () => {
        return '.col-md-8 > .form-control' 
    }
    campoEmail = () => {
        return '#eid > .form-control' 
    }
    campoTelefone = () => {
        return 'input[type="tel"]' 
    }
    campoSexo = () => {
        return 'input[type="radio"]'
    }
    campoHobbies = () => {
        return '#checkbox2'
    }
   
    campoLinguagem = () => {
        return '#msdd' 
    }
    
    campoPais = () => {
        return '[role=combobox]' 
    }
    campoSkill =() => {
        return '#Skills'
    }
    campoLocal = () => {
        return '#countries'
    }
    campoAno = () => { 
        return '#yearbox'
     }

    campoMes = () => { 
        return '[placeholder="Month"]'
     }

    campoDia = () => { 
        return '#daybox' 
    }

    CampoSenha = () => { 
        return '#firstpassword' 
    }

    CampoConfirmarSenha = () => {
         return '#secondpassword' 
        } 

    CampoSubmitButton = () => { 
        return '#submitbtn' 
    }
    

    botaorefresh = () => {
        return "#Button1"
    }
    
}
export default testElementos;