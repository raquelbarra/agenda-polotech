import { Header } from "../components/header.component.js"
import { createContact } from "../services/contact.service.js";

const root = document.getElementById('root')
const title =  document.createElement('h1')
title.innerHTML = `Cadastrar contato`;
const formContacts = document.createElement('form')
formContacts.setAttribute("id", "f-contacts")

const events = () => {
    formContacts.addEventListener('submit', (e) => {
        e.preventDefault()

        const fd = new FormData(formContacts)
        const data = Object.fromEntries(fd)

        createContact(data)
            .then((response) => {
                const msgError = formContacts.querySelector("#msgError")
                const msgSuccess = formContacts.querySelector("#msgSuccess")

                if(response.status === 409) {
                    msgError.innerText = response.mensagem
                    msgError.classList.remove('d-none');
                }
                
                if(response.status === 200) {
                    msgSuccess.innerText = "Cadastro realizado com sucesso"
                    msgSuccess.classList.remove('d-none');
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
    root.append(title)

    formContacts.innerHTML = `
    <a href="#contacts">Voltar</a>
    <div class="alert-error d-none" id="msgError"></div>
    <div class="alert-success d-none" id="msgSuccess"></div>
    <div>
        <div class="">
            <label for="nome">Nome</label>
            <input type="text" name="nome" placeholder="Informe o nome">
        </div>
        <div class="">
            <label for="telefone">Telefone</label>
            <input type="text" name="telefone" placeholder="Informe o telefone">
        </div>
        <div class="">
            <label for="email">E-mail</label>
            <input type="text" name="email" placeholder="Informe o e-mail">
        </div>
        <button class="">Cadastrar</button>
    </div>
    `;

    events()
    return formContacts
}
