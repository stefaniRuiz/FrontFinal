/*!
* Start Bootstrap - The Big Picture v5.0.6 (https://startbootstrap.com/template/the-big-picture)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-the-big-picture/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
btConsulta.addEventListener('click', listaMonstros)

function listaMonstros() { 
let nome = txNome.value;
txNome.value = ''

fetch('http://127.0.0.1:3000/arrayJson')// faz o pedido assícrono
  .then( res => res.json())
  .then( listaCompleta => { 
      const listaFiltrada = listaCompleta.filter(monstro =>
      monstro.nome.toUpperCase().includes(nome.toUpperCase())

    )
    // apaga do HTML a resposta anterior
    corpoTabelaGM.innerHTML = ""

    listaFiltrada.forEach(monstro => {
      let linha = document.createElement('tr')
      linha.innerHTML =`
          
          
          <td>${monstro.descricao}</td>
        
          `
          corpoTabelaGM.appendChild(linha)

          imgGM.src = monstro.img
    })
  })
}
