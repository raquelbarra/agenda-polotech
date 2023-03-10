import { Header } from "../components/header.component.js"
import { CardContact } from "../components/card-contact.component.js"
import { searchContact } from "../services/contact.service.js"
import nomonkey from '../../imgs/nomonkey.png'

const root = document.getElementById('root')
const contacts = document.createElement('div')
contacts.setAttribute("id", "p-contacts")

const events = () => {
    searchContact()
        .then((contactsValue) => {
            renderContact(contactsValue)
        })
}

export const Contacts = () => {
    const header = Header()
    root.append(header)

    contacts.innerHTML = `
        <h1>Lista de contatos</h1>
        <div id="cards"></div>
    `

    events()
    return contacts
}

function renderContact(contactsValue) {

    const cards = contacts.querySelector('#cards')

    const numberContacts = contactsValue.data.length

    if(numberContacts > 0){
        contactsValue.data.forEach((item) => {
            const cardContact = CardContact(item)
            cards.append(cardContact)
        })
    } else {
        let msg = document.createElement('h5');
        msg.classList.add('inform');
        msg.innerHTML = `Não há contato disponível. <br> Cadastre seu primeiro contado <a href="/#contact-create"> clicando aqui!</a>
        <img src=${nomonkey} class="img-no-results">`;
        cards.append(msg);
    }

}