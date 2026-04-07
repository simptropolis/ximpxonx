
let temps = document.
getElementsByClassName('temporadas');
let con_temp = document.getElementById('con-temp');
let ite = document.getElementById('info-temps') ;

//-----------------------------------------

let cortina = document.createElement('div');
cortina.id = 'cortina';
cortina.innerHTML = 'Cargando...';
document.body.appendChild(cortina);

window.addEventListener('load', () => {

    document.body.classList.add("loaded");
    document.body.removeChild(cortina);

});


for (let i = 6; i < temps.length+6 ; i++) {
    
    
    if (i === 11) {
        
        continue;
            
    } else {

        temps[i-6].onclick = () => {
        
            localStorage.setItem('temporada selecionada',`${i}`);
        
            location.href = 'https://ximpxonx-temps.github.io/static/capag/index.html';
        
        
        
        };
    }
    
}
//bloque que elimina la 11 hasta que podamos integrarla, si es que podemos.
con_temp.removeChild(temps[5])