import {listarCapitulos} from "./modulo.js" ;

export let temps = document.
getElementsByClassName('temporadas');
export let con_capi = document.getElementById('con-capitulos');
let ite = document.getElementById('info-temps') ;

let cortina = document.createElement('div');
cortina.id = 'cortina';
cortina.innerHTML = 'Cargando...';
document.body.appendChild(cortina);

window.addEventListener('load', () => {

    document.body.classList.add("loaded");
    document.body.removeChild(cortina);

});



export function capitulosDe(datos) {
    
    
    listarCapitulos(datos);
    

    let con_por = document.createElement('div');
    con_por.innerHTML = `<img src="./T${datos}/portada.jpg" id="portada" />`;
    con_por.id = 'con-por';
    document.body.appendChild(con_por);

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



