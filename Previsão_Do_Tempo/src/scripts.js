let key = "400c1b91d6a24ffc4fb3fa77a13b1abd"

 function colocarDadosNaTela(dados){
      
   document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
   document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC"
   document.querySelector(".previsao").innerHTML = dados. weather[0].description
   document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
   document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

 async function buscarCidade(cidade){

    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json ())
    
    colocarDadosNaTela(dados)
}
 
 
 function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
 }