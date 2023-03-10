import { Header } from "../components/header.component.js"
import { createContact } from "../services/contact.service.js";
import rmonkey from '../../imgs/monkey-register.png'

const root = document.getElementById('root')

const divCreateContact = document.createElement('div')
divCreateContact.setAttribute("id", "p-create-contacts")
const title =  document.createElement('h1')
title.innerHTML = `Cadastrar contato`;
const btnBack = document.createElement('a');
btnBack.href = "/#contacts";
btnBack.innerHTML = "Voltar";
divCreateContact.append(title)
divCreateContact.append(btnBack)

const formContacts = document.createElement('form')
formContacts.setAttribute("id", "f-contact")

const events = () => {
    formContacts.addEventListener('submit', (e) => {
        e.preventDefault()

        const fd = new FormData(formContacts)
        const data = Object.fromEntries(fd)

        createContact(data)
            .then((response) => {
                if(response.status === 409) {
                    clearValues()
                    notificationError(response.mensagem);              
                }
                
                if(response.status === 200) {
                    clearValues();
                    notificationSuccess();
                }
            })
            .catch((error) => {
                console.error(error)
            })
    })
}

export const CreateContact = () => {
    const header = Header()
    root.append(header)
    root.append(divCreateContact)


    formContacts.innerHTML = `
    <div class="alert-error d-none" id="msgError"></div>
    <div class="alert-success d-none" id="msgSuccess"></div>
    <div class="card-form">
        <div class="text-field">
            <label for="nome">Nome</label>
            <input type="text" name="nome" placeholder="Informe o nome">
        </div>
        <div class="text-field">
            <label for="telefone">Telefone</label>
            <input type="text" name="telefone" placeholder="Informe o telefone">
        </div>
        <div class="text-field">
            <label for="email">E-mail</label>
            <input type="text" name="email" placeholder="Informe o e-mail">
        </div>
        <div class="text-field">
            <button class="btn-plus">Cadastrar</button>
        </div>
    </div>
    <div class='img-create'>
        <img src=${rmonkey} >
    </div>
    `;

    events()
    return formContacts
}

function clearValues(){
    var inputs = document.querySelectorAll("input")
    inputs.forEach(element => {
        element.value = '';
    });
}

function notificationSuccess(){
    const msgSuccess = formContacts.querySelector("#msgSuccess")
    msgSuccess.innerText = "Cadastro realizado com sucesso"
    msgSuccess.classList.remove('d-none');
    setTimeout(() => {
        msgSuccess.classList.add('d-none');
      }, "1000");  
}

function notificationError(txt){
    const msgError = formContacts.querySelector("#msgError")
    msgError.innerText = txt
    msgError.classList.remove('d-none');
    setTimeout(() => {
        msgError.classList.add('d-none');
        }, "1000");      
}