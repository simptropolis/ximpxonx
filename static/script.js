import {eliminarTemps,listarCapitulos} from "./modulo.js" ;

export let temps = document.
getElementsByClassName('temporadas');
export let con_temp = document.getElementById('con-temp');
let ite = document.getElementById('info-temps') ;

//-----------------------------------------

export function capitulosDe(datos) {
    
    
    eliminarTemps();
    listarCapitulos(datos.temporada);
    ite.innerText = `Temporada ${datos.temporada}`;
    let atras = document.createElement('div');
          atras.id = 'atras';
          atras.innerText = 'atras';
          
           atras.onclick= () => {
              
           
              
              location.reload(true);
   
               
              
          };
          document.body.appendChild(atras);
          
    
}



for (let i = 6; i < temps.length+6 ; i++) {
    
    
    temps[i-6].onclick = () => {
        
        capitulosDe({temporada: i});
        
    };
    
}
