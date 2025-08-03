
let temps = document.
getElementsByClassName('temporadas');
let con_temp = document.getElementById('con-temp');
let ite = document.getElementById('info-temps') ;

//-----------------------------------------





for (let i = 6; i < temps.length+6 ; i++) {
    
    
    temps[i-6].onclick = () => {
        
        localStorage.setItem('temporada selecionada',`${i}`);
        
        location.href = './capag/index.html';
        
        
        
    };
    
}
