import { Header } from "../components/header.component.js"
import dmonkey from '../../imgs/monkey-details.png'

const root = document.getElementById('root')
const contactsDetails = document.createElement('div')
contactsDetails.setAttribute("id", "p-contact-details")

export const ContactDetails = () => {
    const header = Header()
    root.append(header)

    const contato = window.history.state

    contactsDetails.innerHTML = `

        <h1> Detalhes do contato </h1>

        <a href="/#contacts">Voltar para contatos</a>

        <div class="content">
            <p><b>Nome:</b> ${contato.nome}</p>
            <p><b>E-mail:</b> ${contato.email}</p>
            <p><b>Telefone:</b> ${contato.telefones[0].numero}</p>
        </div>
        <div class='img-details'>
            <img src=${dmonkey}>
        </div>
        `

    return contactsDetails
}
