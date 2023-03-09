import { Header } from "../components/header.component.js"

const root = document.getElementById('root')
const contactsDetails = document.createElement('div')
contactsDetails.setAttribute("id", "p-contact-details")

export const ContactDetails = () => {
    const header = Header()
    root.append(header)

    const contato = window.history.state

    contactsDetails.innerHTML = `
        <a href="/#contacts">Voltar para contatos</a>

        <br>
        <p><b>Nome:</b>${contato.nome}</p>
        <p><b>E-mail:</b>${contato.email}</p>
        <h3>Telefone</h3>
        `

    contato.telefones.forEach((telefone) => {
        contactsDetails.innerHTML += `
            <hr>
            <p>${telefone.tipo}</p>        
            <p>${telefone.numero}</p>        
        `
    })

    return contactsDetails
}
