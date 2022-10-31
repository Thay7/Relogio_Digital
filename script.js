//pegando os elementos pelos ids
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

//função tempo que irá pegar horas, minutos e segundos
const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hora = dateToday.getHours(); //passando a hora exata pra variavel
    let minuto = dateToday.getMinutes(); //passandoo os minutos exatos pra variavel
    let segundo = dateToday.getSeconds(); //passando os segundos exatos pra variavel

    //verificação para ver se precisa do 0 antes da hora, minutos e segundo
    if (hora < 10) hora = '0' + hora;

    if (minuto < 10) minuto = '0' + minuto;

    if (segundo < 10) segundo = '0' + segundo;

    //mudando o texto do id horas la do index, colocando a hora exata do dia de cima que cosneguimos com a função acima
    horas.textContent = hora;

    minutos.textContent = minuto;

    segundos.textContent = segundo;
})

