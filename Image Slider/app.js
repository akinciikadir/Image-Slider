const images = document.querySelectorAll('.images img');
let temp = 0;

function showImage(i){

    temp +=i;

    if(temp < 0){
        temp = images.length - 1;
    }

    else if(temp >= images.length){
        temp = 0;
    }

    images.forEach(image =>{

        image.style.display = 'none';
        

    });

    images[temp].style.display = 'block';

}

showImage(0)
