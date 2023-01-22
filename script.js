const images = document.getElementById('images');
const img = document.querySelectorAll('#images img')
let index = 0;
function carousel (){
    index++;
    if(index > img.length){
        index = 0;
    }

    images.style.transform = `translateX(${-index * 500}px)`;
    
    
}

setInterval(carousel, 2000)