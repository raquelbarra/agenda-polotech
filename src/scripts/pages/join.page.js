import { createUser } from "../services/user.service"
import rmonkey from '../../imgs/monkey-register.png'

const join = document.createElement('form')
join.setAttribute("id", "p-signup")

const events = () => {
    join.addEventListener('submit', (e) => {
        e.preventDefault()

        const fd = new FormData(join)
        const data = Object.fromEntries(fd)

        createUser(data)
            .then((response) => {
                const msgError = join.querySelector("#msgError")

                if(response.status === 409) {
                    msgError.innerText = response.mensagem
                    msgError.classList.remove('d-none');
                }
                
                if(response.status === 200) {
                    window.location.href = "/#login"
                }
            })
            .catch((error) => {
                console.error(error)
            })
    })
}

export const Join = () => {
join.innerHTML = `
    <div class="main-register">
        <div class="left-register">
            <div>
                <h1><span>Não possui cadastro?</span><br> Preencha o formulário ao lado! <img src=${rmonkey}> &rarr;</h1>
                <div class="alert-error d-none" id="msgError"></div>
            </div>
        </div>
        <div class="right-register">
            <div class="card-register">
                <h2>
                    Cadastre-se
                </h2>
                <div class="textfield">
                    <label for="email">E-mail</label>
                    <input type="text" name="email" placeholder="Escolha seu melhor E-mail">
                </div>
                <div class="textfield">
                    <label for="senha">Senha</label>
                    <input type="password" name="senha" placeholder="Escolha uma senha">
                </div>
                <div class="textfield">
                    <label for="nome">Nome</label>
                    <input type="text" name="nome" placeholder="Informe seu nome">
                </div>

                <button class="btn-register">Cadastrar</button>
                <a href="#login" class="btnBackLogin">Voltar para a página de Login</a>
                <small>&copy; 2023 Banana Company</small>
            </div>
        </div>
    </div> 
`

events()

return join
}