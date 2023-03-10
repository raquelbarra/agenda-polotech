import { signin } from "../services/auth.service"
import bmonkey from '../../imgs/ballon-monkey.png'

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
        <div class="login">
            <h1>Acesse agora!</h1>
            <div class="card-login">
                <img src=${bmonkey}>
                <h2>Login</h2>
                <div class="textfield">
                    <label for="email">E-mail</label>
                    <input type="email" name="email" placeholder="Digite seu e-mail">
                </div>
                <div class="textfield">
                    <label for="senha">Senha</label>
                    <input type="password" name="senha" placeholder="Digite sua senha">
                </div>
                <button class="btn-login">Acessar</button>
                <a href="#join" class="register">Ou cadastre-se agora</a>
                <small>&copy; 2023 Banana Company</small>
            </div>
        </div>
    </div>  
    `

    events()
    return login
}
