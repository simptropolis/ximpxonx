import {listarCapitulos} from "./modulo.js" ;

export let temps = document.
getElementsByClassName('temporadas');
export let con_capi = document.getElementById('con-capitulos');
let ite = document.getElementById('info-temps') ;

window.addEventListener('load', () => {

    document.body.classList.add("loaded");

});

export function capitulosDe(datos) {
    
    
    listarCapitulos(datos);
    ite.innerText = `Temporada ${datos}`;
    let atras = document.createElement('div');
          atras.id = 'atras';
          atras.innerText = 'atras';
          
           atras.onclick= () => {
              
           
              
              location.href ='https://ximpxonx-temps.github.io/';
   
               
              
          };
          document.body.appendChild(atras);
          
    
}

let temp_lo = Number(localStorage.getItem('temporada selecionada'));

capitulosDe(temp_lo);



