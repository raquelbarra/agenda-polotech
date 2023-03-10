import imonkey from '../../imgs/monkey-item-list.png'

export const CardContact = (contact) => {
    const cardContact = document.createElement('div')
    cardContact.setAttribute("id", "c-card-contact")
    
    const events = (contact) => {
        const anchor = cardContact.querySelector('a')
        anchor.addEventListener('click', (e) => {
            e.preventDefault()
            window.history.replaceState(contact, "", "/#contact-datails")
            window.location.reload()
        })
    }

    cardContact.innerHTML = `    
        <img src=${imonkey} width=70px>
        <h4>Nome: ${contact.nome}</h4>
        <a href="/#contacts">Ver detalhes do contato</a>
    `
    
    events(contact)
    return cardContact
}
