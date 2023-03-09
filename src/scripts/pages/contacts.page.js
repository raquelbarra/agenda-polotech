import { Header } from "../components/header.component.js"
import { CardContact } from "../components/card-contact.component.js"
import { searchContact } from "../services/contact.service.js"

const root = document.getElementById('root')
const btnCreateContact = document.createElement('button')
btnCreateContact.setAttribute("id", "b-new-contact")
btnCreateContact.innerHTML = 'Novo contato';
const contacts = document.createElement('div')
contacts.setAttribute("id", "p-contacts")

const events = () => {
    searchContact()
        .then((contatos) => {
            const cards = contacts.querySelector('#cards')

            contatos.data.forEach((item) => {
                const cardContact = CardContact(item)
                cards.append(cardContact)
            })
        })
    
    btnCreateContact.addEventListener('click', () => {
        window.location.href = "/#contact-create"
    });
}

export const Contacts = () => {
    const header = Header()
    root.append(header)
    root.append(btnCreateContact)

    contacts.innerHTML = `
        <h1>Contatos</h1>
        <div id="cards"></div>
    `

    events()
    return contacts
}
