export const CardContact = (contato) => {
    const cardContact = document.createElement('div')
    cardContact.setAttribute("id", "c-card-contact")
    
    const events = (contato) => {
        const anchor = cardContact.querySelector('a')
        anchor.addEventListener('click', (e) => {
            e.preventDefault()
            window.history.replaceState(contato, "", "/#contact-datails")
            window.location.reload()
        })
    }

    cardContact.innerHTML = `
        <h3>${contato.nome}</h3>
        <a href="/#contacts">Ver detalhes do contato</a>
    `
    
    events(contato)
    return cardContact
}
