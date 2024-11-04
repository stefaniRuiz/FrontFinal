/*!
* Start Bootstrap - The Big Picture v5.0.6 (https://startbootstrap.com/template/the-big-picture)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-the-big-picture/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
/*--btConsulta.addEventListener('click', listaMonstros)

function listaMonstros() { 
let nome = txNome.value;
txNome.value = ''

fetch('arrayJson')// faz o pedido assícrono
  .then( res => res.json())
  .then( listaCompleta => { 
      const listaFiltrada = listaCompleta.filter(monstro =>
        monstro.nome.toUpperCase().includes(nome.toUpperCase())
    )

    // apaga do HTML a resposta anterior
    corpoTabelaGM.innerHTML = ""

    if(listaFiltrada.length > 0) {
      listaFiltrada.forEach(monstro => {
        let linha = document.createElement('tr')
        linha.innerHTML =`
            
            
            <td>${monstro.descricao}</td>
          
            `
            corpoTabelaGM.appendChild(linha)
  
            imgGM.src = monstro.img
      })
    
    } else {
      // Caso a lista filtrada esteja vazia, significa que não encontramos nenhum nome
      alert('Monstro não encontrado! Tente um nome da Lista de Monstros')
    }
  })
}
*/

fetch('/FrontFinal/monstros.json')
.then( resposta => {
  return resposta.json()
})
.then(dados =>{
  dados.forEach(monstro=>{    
    let opMonstro = document.createElement('option')
    opMonstro.innerText = monstro.nome
    opMonstro.value = monstro.nome    
    listaDeMonstros.appendChild(opMonstro)
  })
})



btConsulta.addEventListener('click', listaMonstros)

function listaMonstros() { 
let nome = txNome.value;
txNome.value = ''

fetch('/FrontFinal/monstros.json')// faz o pedido assícrono
  .then( res => res.json())
  .then( listaCompleta => { 
      const listaFiltrada = listaCompleta.filter(monstro =>
        monstro.nome.toUpperCase().includes(nome.toUpperCase())
    )

    // apaga do HTML a resposta anterior
    corpoTabelaGM.innerHTML = ""

    if(listaFiltrada.length > 0) {
      listaFiltrada.forEach(monstro => {
        let linha = document.createElement('tr')
        linha.innerHTML =`
            
            
            <td>${monstro.descricao}</td>
          
            `
            corpoTabelaGM.appendChild(linha)
  
            imgGM.src = monstro.img
      })
    
    } else {
      // Caso a lista filtrada esteja vazia, significa que não encontramos nenhum nome
      alert('Monstro não encontrado! Tente um nome da Lista de Monstros')
    }
  })
}