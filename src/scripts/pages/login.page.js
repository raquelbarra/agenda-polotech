const login = document.createElement('form')
login.setAttribute("id", "p-login")

const events = () => {
    login.addEventListener('submit', (e) => {
        e.preventDefault()

        const fd = new FormData(login)
        const dados = Object.fromEntries(fd)

        console.log(dados)
    })
}

export const Login = () => {
    const nome = "Dannyel"

    login.innerHTML = `
    <div class="main-login">
        <div class="right-login">
            <h1><span>Olá, ${nome}! </span><br> Acesse com seus dados!</h1>
            <div class="card-login">
                <h2>Login</h2>
                <div class="textfield">
                    <label for="usuario">Usuário</label>
                    <input type="text" name="usuario" placeholder="Digite seu usuário">
                </div>
                <div class="textfield">
                    <label for="senha">Senha</label>
                    <input type="password" name="senha" placeholder="Digite sua senha">
                </div>
                <div class="radio">
                    <div class="salvar">
                        <label for="salvar">Salvar</label>
                        <input name="salvar" id="salvar" type="radio" value="true" />
                    </div>
                    <div class="nao-salvar">
                        <label for="nao-salvar">Não salvar</label>
                        <input name="salvar" id="nao-salvar" type="radio" value="false" />
                    </div>
                </div>
                <button class="btn-login" id="btn-entrar">Acessar</button>
                <a href="#join" class="cadastrar">Ou cadastre-se agora</a>
            </div>
        </div>
    </div>  
    `
    // <a href="/#404">ERRO</a>

    events()
    return login
}
