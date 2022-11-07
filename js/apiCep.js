
let form = document.getElementById('cadastro');

form.addEventListener('submit', function(){
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

        "id" : id,
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
        
        storage.push(veiculo);
        msgSuccess = 'Cadastro efetuado com sucesso.';

    } else {

        let idRegistro = document.querySelector('#idRegistro').value;
        storage[idRegistro] = curriculo;
        msgSuccess = 'Cadastro editado com sucesso.';
    }

    localStorage.setItem('CURRICULO', JSON.stringify(storage));

    alert(msgSuccess);

    form.reset();
    listarDados();
    document.querySelector('button').value = '';

})

    const limparFormulario = (endereco) => {
        document.getElementById('logradouro').value = '';
        document.getElementById('bairro').value = '';
        document.getElementById('cidade').value = '';
        document.getElementById('estado').value = '';

    }

    
    const preencherFormulario = (endereco) => {
        
        document.getElementById('logradouro').value = endereco.logradouro;
        document.getElementById('bairro').value = endereco.bairro;
        document.getElementById('cidade').value = endereco.localidade;
        document.getElementById('estado').value = endereco.uf;

    }
    const eNumero = (numero) => /^[0-9]+$/.test(numero);
    const cepValido = (cep) => cep.length == 8 && eNumero(cep);
    
    const pesquisarCep = async(cep) => {
        limparFormulario();
        document.getElementById('cep').value;
        const url = `http://viacep.com.br/ws/${cep}/json/`;
        if (cepValido(cep)) {
            
            const dados = await fetch(url);
            const endereco = await dados.json();

            if (endereco.hasOwnProperty('erro')) {
    
                document.getElementById('logradouro').value = 'CEP não encontrado';
                document.getElementById('logradouro').value;
    
            } else {
                
                preencherFormulario(endereco);
    
            }
        } else {
            document.getElementById('logradouro').value = 'CEP incorreto!';
            document.getElementById('logradouro').value;
        }
    }

