const join = document.createElement('form')

export const Join = () => {
join.innerHTML = `
    <div class="main-cadastro">
        <div class="left-cadastro">
            <h1><span>Não possui cadastro?</span><br> Preencha o formulário ao lado! &rarr;</h1>
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
                    <label for="usuario">Nome de Usuário</label>
                    <input type="text" name="usuario" placeholder="Escolha um nome de usuário">
                </div>

                <button class="btn-cadastrar">Cadastrar</button>
                <a href="#login" class="voltar">Voltar para a página de Login</a>
            </div>
        </div>
    </div> 
`

return join
}