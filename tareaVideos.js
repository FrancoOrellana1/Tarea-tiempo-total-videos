

const $tiempoTotal = document.querySelector('#calcular-tiempo');


$tiempoTotal.onclick= function(){
    const $horasTotales = document.querySelectorAll('#horas');
    const $minutosTotales = document.querySelectorAll('#minutos');
    const $segundosTotales = document.querySelectorAll('#segundos');
    let contadorSegundos = 0;
    let contadorMinutos = 0;
    let contadorHoras = 0;
    let auxiliar= 0;

    for(let i=0; i<$segundosTotales.length; i++){
        contadorSegundos += Number($segundosTotales[i].value);
    }
    if(contadorSegundos>60){
        auxiliar = contadorSegundos;
        contadorSegundos= Number(contadorSegundos%60);
        contadorMinutos= Number((auxiliar-contadorSegundos)/60);
    }
    for(let i=0;i<$minutosTotales.length; i++){
        contadorMinutos += Number($minutosTotales[i].value);
    }
    if(contadorMinutos>60){
        auxiliar=contadorMinutos;
        contadorMinutos=Number(contadorMinutos%60);
        contadorHoras= Number((auxiliar-contadorMinutos)/60);
    }
    for(let i=0; i<$horasTotales.length; i++){
        contadorHoras += Number($horasTotales[i].value);
    }

    const textoTotalTiempo = document.querySelector('#resultado');
    textoTotalTiempo.innerText = ('Tiempo Total = ' + contadorHoras + 'horas ' +
    contadorMinutos + 'minutos ' + contadorSegundos + 'segundos');
    
    
    return false
}