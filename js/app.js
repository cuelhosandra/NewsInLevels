/*DESENVOLVIDO POR CRISTIANO FREESE*/
/* INJEÇÃO DE HTML NA TAG MAIN DO ARQUIVO INDEX.HTML */
async function injectContent() {
    //pega o endereço da url
    let url = location.href; 

    //divide o endereço pelo = e aplica os valores como array
    file = url.split('='); 

    let view = (file[1] != undefined) ? file[1] : 'inicio'; 

    //pega o valor após o = da url e aplica no fetch
    const resp = await fetch(`views/${view}.html`); 
    //o método fetch faz uma requisiçao ajax para um determinado local, neste caso para views/arquivo.html

    //converte o resultado da fetch para texto
    const html = await resp.text(); 

    //seleciona o destino para carregar o arquivo
    let inject = document.getElementById('content'); 

    inject.innerHTML = html; //aplica a injeção de conteúdo no container de destino
}

function onclickFooter(){
  document.getElementById("footer-social").style.color= 'red';
}

// Função para armazenar data, hora e página acessada no Local Storage
function CarregouPagina(){
  var data = new Date();

  var dia     = data.getDate();           
  var mes     = data.getMonth();          
  var ano    = data.getFullYear();           
  var hora    = data.getHours();          
  var min     = data.getMinutes();        
  var seg     = data.getSeconds();        

  var dataVis = `${dia}/${mes+1}/${ano}`;
  var horaVis = `${hora}:${min}:${seg}`;

  let url = location.href;
  let view = url.split('=');
  let paginaVis = (view[1] != undefined) ? view[1] : 'inicio'; 
  console.log(`${dataVis} - ${horaVis} - ${paginaVis}`);
    let storage = (localStorage.VISITAS) ? JSON.parse(localStorage.VISITAS) : [];

    // definir objeto do veículo
    let visita = {
      "DataVis" : dataVis,
      "HoraVis" : horaVis,
      "PaginaVis" : paginaVis
    }

    storage.push(visita);
    
    // salvar no localStorage
    localStorage.setItem('VISITAS', JSON.stringify(storage));
}

function onclickAccordion(){
  console.log("Clicou no Accordion");
}

/* EXECUÇÃO DAS FUNÇÕES */
injectContent();


/********************* FEITO POR SANDRA *************/

/********************* FEITO POR PAULO *************/

/********************* FEITO POR MICHEL *************/

/********************* FEITO POR ANAISA *************/

