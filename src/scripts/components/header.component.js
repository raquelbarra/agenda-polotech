import banana from '../../imgs/banana.png';

export const Header = () => {
    const header = document.createElement('header')
    header.setAttribute("id", "c-header")
    header.classList.add('header');

    const user = JSON.parse(sessionStorage.getItem("@user"))

    const events = () => {
        const logout = header.querySelector('#logout')
        logout.addEventListener('click', () => {
            sessionStorage.clear()
            history.replaceState(null, "", "/#login")// modifica a rota sem reload
            window.location.reload() // força o reload da página com a nova hash
        })
    }

    header.innerHTML = `
        <div class="logo">
            <a href="#contacts" class="logo"> <img src=${banana}> Contact Monkey</a>
        </div>
        <div class="menu-geral">
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            <ul class="menu">
                <li> <a href="#contacts"> Olá, ${user.nome} </a> </li>
                <li> <a href="#contacts">Contatos</a></li>
                <li> <a href="#contact-create">Novo contato</a></li>
                <li> <a id="logout">Sair</a></li>
            </ul>
        </div>
    `
    
    events()
    return header
}
