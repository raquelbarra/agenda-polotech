import { createUser } from "../services/user.service"

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
    <div class="main-cadastro">
        <div class="left-cadastro">
            <div>
                <h1><span>Não possui cadastro?</span><br> Preencha o formulário ao lado! &rarr;</h1>
                <div class="alert-error d-none" id="msgError"></div>
            </div>
        </div>
        <div class="right-cadastro">
            <div class="card-cadastro">
                <h2>Cadastre-se</h2>
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

                <button class="btn-cadastrar">Cadastrar</button>
                <a href="#login" class="voltar">Voltar para a página de Login</a>
            </div>
        </div>
    </div> 
`

events()

return join
}