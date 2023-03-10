import { Login } from './scripts/pages/login.page.js'
import { NotFound } from './scripts/pages/not-found.page.js'
import { Join } from './scripts/pages/join.page.js'
import { Contacts } from './scripts/pages/contacts.page.js'
import { CreateContact } from './scripts/pages/contact-create.page.js'
import { ContactDetails } from './scripts/pages/contact-details.page.js'

function redirectPage() {
    const body = document.querySelector('body');
    const root = document.querySelector('#root')

    const Router = {
        "#login": { component: Login, private: false },
        "#join": { component: Join, private: false },
        "#404": { component: NotFound, private: false },
        "#contacts": { component: Contacts, private: true },
        "#contact-create": { component: CreateContact, private: true },
        "#contact-datails": { component: ContactDetails, private: true },
    }

    // recupera a rota pela hash, se não existir recupera a rota #404
    const route = Router[window.location.hash] || Router['#404']

    // valida se o usuário está autenticado em uma rota privada
    const notAuthenticated = route.private && !sessionStorage.getItem("@token")
    
    // verifica se não possui hash, ou seja, se é a rota raiz
    const isRootRoute = !window.location.hash

    if (isRootRoute || notAuthenticated) {
        window.location.href = "/#login"
        return
    }
    
    root.classList.add('d-none');
   
    const loadSpinner = document.createElement("div");
    const spinner = document.createElement("div");
    loadSpinner.classList.add('load');
    spinner.classList.add('spinner');
    loadSpinner.append(spinner);
    body.append(loadSpinner);
    loadSpinner.classList.remove('d-none');

    root.innerHTML = null
    root.append(route.component())

    setTimeout(() => {
        root.classList.remove('d-none');
        loadSpinner.classList.add('d-none');
    }, 1000);
    
}

window.addEventListener('load', () => {
    redirectPage()
    window.addEventListener('hashchange', redirectPage)
})
