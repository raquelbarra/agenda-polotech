import { signin } from "../services/auth.service"

const login = document.createElement('form')
login.setAttribute("id", "p-login")

const events = () => {
    login.addEventListener('submit', (e) => {
        e.preventDefault()

        const fd = new FormData(login)
        const data = Object.fromEntries(fd)

        signin(data)
            .then((response) => {
                sessionStorage.setItem('@user', JSON.stringify(response.data))
                sessionStorage.setItem("@token", response.data.token)

                history.replaceState(null, "", "/#contacts")
                window.location.reload()
            })
    })
}

export const Login = () => {

    login.innerHTML = `
    <div class="main-login">
        <div class="right-login">
            <h1>Acesse agora!</h1>
            <div class="card-login">
                <h2>Login</h2>
                <div class="textfield">
                    <label for="email">E-mail</label>
                    <input type="text" name="email" placeholder="Digite seu e-mail">
                </div>
                <div class="textfield">
                    <label for="senha">Senha</label>
                    <input type="password" name="senha" placeholder="Digite sua senha">
                </div>
                <button class="btn-login" id="btn-entrar">Acessar</button>
                <a href="#join" class="cadastrar">Ou cadastre-se agora</a>
            </div>
        </div>
    </div>  
    `

    events()
    return login
}
