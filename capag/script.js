import {listarCapitulos} from "./modulo.js" ;

export let temps = document.
getElementsByClassName('temporadas');
export let con_capi = document.getElementById('con-capitulos');
let ite = document.getElementById('info-temps') ;


export function capitulosDe(datos) {
    
    
    listarCapitulos(datos);
    ite.innerText = `Temporada ${datos}`;
    let atras = document.createElement('div');
          atras.id = 'atras';
          atras.innerText = 'atras';
          
           atras.onclick= () => {
              
           
              
              location.href ='../index.html';
   
               
              
          };
          document.body.appendChild(atras);
          
    
}

let temp_lo = Number(localStorage.getItem('temporada selecionada'));

capitulosDe(temp_lo);



