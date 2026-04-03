import {temps,con_capi, } from "./script.js";



export async function listarCapitulos(t) {
    
  
    
    
    try{
        
        let res = await fetch(`./T${t}/nombre.json`).then(r => r.json());
        let descripcion = await fetch(`./T${t}/descripcion.json`).then(r => r.json());
        
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
          con_capi.appendChild(div);

          
          
          let url = `./T${t}/${t}x${numero[i]}.mp4`; 
          
          
          
          div.onclick = () => {

              
              
              document.body.innerHTML = `<h1>Ximpxonx</h1><div id="con-vid"><video src=${url} controls poster="../poster.jpg" width="95%" height="75%" id="vid" >Lo siento mucho, hubo un error.</video><div id="descripcion"><h3 style="text-align:center;">Descripcion:</h3><p>${descripcion[numero[i]]}</p></div></div><div id="con-titulo-vid">${res[numero[i]]}</div><h3>Temp: ${t} Ep: ${numero[i]}</h3>`;
              
                if (window.innerWidth > window.innerHeight) {

                    let vid = document.getElementById('vid') ;
                    vid.style.width = '50vw';
                    vid.style.height = '50vh';
                    let con_vid = document.getElementById('con-vid');
                    con_vid.style.flexDirection = 'row';
                    con_vid.style.justifyContent = 'space-around';
                    con_vid.style.paddingTop = '0px';
                    con_vid.style.height = '55vh';
                    let desc = document.getElementById('descripcion');
                    desc.style.height = '80%';
                    desc.style.width = '30%';
            
            
                }

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
