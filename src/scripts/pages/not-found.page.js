const notFound = document.createElement('div')
notFound.setAttribute("id", "p-not-found")

const SECONDS_TO_REDIRECT = 10
let secondsToRedirect = SECONDS_TO_REDIRECT
let interval = null

const clear = () => {
    secondsToRedirect = SECONDS_TO_REDIRECT
    clearInterval(interval)
}

const accountant = () => {
    const em = notFound.querySelector('em')

    clearInterval(interval)

    interval = setInterval(() => {
        em.innerHTML = --secondsToRedirect
        console.log(secondsToRedirect);

        if(secondsToRedirect === 0) {
            clear()
            window.location.href = "/#login"
        }
    }, 1000)
}

const anchorA = () => {
    const anchor = notFound.querySelector('a')
    anchor.addEventListener('click', clear)
}

const events = () => {
    accountant()
    anchorA()
}

export const NotFound = () => {
    notFound.innerHTML = `
    <div class="main">
        <h1>Ops! Página não encontrada!</h1>
        <h3>Erro 404</h3>

        <p>Você será redirecionado em <em>${secondsToRedirect}</em></p>
        <a href="/#login">Voltar ao início</a>
    </div>    
    `

    events()
    return notFound
}
