


let formulario = document.getElementById('cadastro');

formulario.addEventListener('submit', function(){
    let storage = (localStorage.CURRICULO) ? JSON.parse(localStorage.CURRICULO) : [];


    let nome = document.querySelector('#nome').value;
    let sobrenome = document.querySelector('#sobrenome').value;
    let cep = document.querySelector('#cep').value;
    let logradouro = document.querySelector('#logradouro').value;
    let numero = document.querySelector('#numero').value;
    let bairro = document.querySelector('#bairro').value;
    let cidade = document.querySelector('#cidade').value;
    let estado = document.querySelector('#estado').value;
    let email = document.querySelector('#email').value;
    let cartaTexto = document.querySelector('#cartaTexto').value;
    let arquivo = document.querySelector('#arquivo').value;


    let curriculo = {

        "nome" : nome,
        "sobrenome" : sobrenome,
        "cep" : cep,
        "logradouro" : logradouro,
        "numero" : numero,
        "bairro" : bairro,
        "cidade" : cidade,
        "estado" : estado,
        "email" : email,
        "cartaTexto" : cartaTexto,
        "arquivo" : arquivo
    
    }

    let submitButton = document.querySelector('button').value;

    if (!submitButton) {
        
        storage.push(curriculo);
        msgSuccess = 'Cadastro efetuado com sucesso.';

    } else {

        let idRegistro = document.querySelector('#idRegistro').value;
        storage[idRegistro] = curriculo;
        msgSuccess = 'Cadastro editado com sucesso.';
    }

    localStorage.setItem('CURRICULO', JSON.stringify(storage));

    alert(msgSuccess);

    formulario.reset();
    listarCurriculo();
    document.querySelector('button').value = '';

})

function listarCurriculo() {

    if (localStorage.CURRICULO) {

        let dados = (localStorage.CURRICULO) ? JSON.parse(localStorage.CURRICULO) : [];
        let estrutura = '';

        for (const i in dados) {
            
            estrutura += `
            <tbody>
                <tr>
                    <td>${dados[i].nome}</td>
                    <td>${dados[i].sobrenome}</td>
                    <td>${dados[i].cep}</td>
                    <td>${dados[i].logradouro}</td>
                    <td>${dados[i].numero}</td>
                    <td>${dados[i].bairro}</td>
                    <td>${dados[i].cidade}</td>
                    <td>${dados[i].estado}</td>
                    <td>${dados[i].email}</td>
                    <td>${dados[i].cartaTexto}</td>
                    <td>${dados[i].arquivo}</td>
                </tr>
            <tbody>
            `;
        }

        document.querySelector('table tbody').innerHTML = estrutura;

    } else {

        let estrutura = `
            <tr>
                <td colspan="12" align="center">Não existem dados</td>
            </tr>
        `;

        document.querySelector('table tbody').innerHTML = estrutura;
        
    }
}

listarCurriculo();
