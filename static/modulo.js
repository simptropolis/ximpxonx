import {temps,con_temp, capitulosDe} from "./script.js";
export function eliminarTemps() {
    
    for (let i = temps.length-1; i > -1 ; i--) {
    
       con_temp.removeChild(temps[i]);
        
    }
    
}

export async function listarCapitulos(t) {
    
    
    try{
        
        let res = await fetch(`./T${t}/nombre.json`).then(r => r.json());
        
        let cantidad = Object.keys(res).length;
        let numero = ['.'];
        
        
        for (let i = 1; i <= cantidad ; i++) {
        
        if(i <10) {
            numero[i] = `0${i}`;
        } else {
            numero[i] = i;
        }
        
          
          let div = document.createElement('div');
          div.className = 'capitulos';
          div.innerHTML = `<div id="nc" class="cap">${i}</div><div id="tc" class="cap">${res[numero[i]]}</div>`;
          con_temp.appendChild(div);
          
          let url = `./T${t}/${t}x${numero[i]}.mp4`; 
          
          
          
          div.onclick = () => {
              document.body.innerHTML = `<h1>Ximpxonx</h1><div id="con-vid"><video src=${url} controls poster="./poster.jpg" width="95%" height="95%" >Lo siento mucho, hubo un error.</video></div><div id="con-titulo-vid">${res[numero[i]]}</div><h3>Temp: ${t} Ep: ${numero[i]}</h3>`;
              
          let atras = document.createElement('div');
          atras.id = 'atras';
          atras.innerText = 'atras';
          
           atras.onclick= () => {
              
           
              
              location.reload(true);
   
               
              
          };
          document.body.appendChild(atras);
          } 
          
            
        }
        
    } catch(err) {
        
        console.log(err);
        
    }
    
}
