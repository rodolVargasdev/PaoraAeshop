const botonR = document.querySelector(".main__shop-button-right");
const botonL = document.querySelector(".main__shop-button-left");
var contador = 0;

    document.querySelectorAll("#shop__item")[0].classList.add('show-once');
 

document.querySelectorAll("#shop__item")[0].classList.add('shop__item-select');
document.querySelectorAll("#shop__item")[0].classList.remove('shop__item');

document.querySelectorAll("#shop__item-hide")[0].classList.add('shop__');
document.querySelectorAll("#shop__item-hide")[0].classList.remove('shop__item-hide');

var i = 0;
var j = 0;

function goliat ()
{

    if(i==2)
    {
        document.querySelectorAll(".main__shop-container")[0].classList.add('animation-right');
        document.querySelectorAll(".main__shop-container")[0].classList.remove('animation-left');
    }

    i++;

    if(i>4)
    {
        i = 4;
    }

    document.querySelectorAll("#shop__item")[i].classList.add('shop__item-select');
    document.querySelectorAll("#shop__item")[i].classList.remove('shop__item');
    
    document.querySelectorAll("#shop__item")[i-1].classList.remove('shop__item-select');
    document.querySelectorAll("#shop__item")[i-1].classList.add('shop__item');

    document.querySelectorAll("#shop__item-hide")[i].classList.add('shop__');
    document.querySelectorAll("#shop__item-hide")[i].classList.remove('shop__item-hide');
    
    document.querySelectorAll("#shop__item-hide")[i-1].classList.remove('shop__');
    document.querySelectorAll("#shop__item-hide")[i-1].classList.add('shop__item-hide');
    
    console.log(i);
    if(i==4)
    {
        document.querySelectorAll(".main__shop-button-right")[0].classList.add('button-rigth-hide');
    }
    else if(i!=4)
    {
        document.querySelectorAll(".main__shop-button-right")[0].classList.remove('button-rigth-hide');
    }
}   


function goliat2 ()
{   
    
    if(i==2)
    {
        document.querySelectorAll(".main__shop-container")[0].classList.remove('animation-right');
        document.querySelectorAll(".main__shop-container")[0].classList.add('animation-left');
    }
    if(i<=0)
    {
        i = 0;
    }
    

    document.querySelectorAll("#shop__item")[i-1].classList.add('shop__item-select');
    document.querySelectorAll("#shop__item")[i-1].classList.remove('shop__item');

    document.querySelectorAll("#shop__item")[i].classList.remove('shop__item-select');
    document.querySelectorAll("#shop__item")[i].classList.add('shop__item');

    document.querySelectorAll("#shop__item-hide")[i-1].classList.add('shop__');
    document.querySelectorAll("#shop__item-hide")[i-1].classList.remove('shop__item-hide');
    
    document.querySelectorAll("#shop__item-hide")[i].classList.remove('shop__');
    document.querySelectorAll("#shop__item-hide")[i].classList.add('shop__item-hide');

    i--;
    if(i==4)
    {
        document.querySelectorAll(".main__shop-button-right")[0].classList.add('button-rigth-hide');
    }
    else if(i!=4)
    {
        document.querySelectorAll(".main__shop-button-right")[0].classList.remove('button-rigth-hide');
    }
    console.log(i);

}
botonL.addEventListener("click", goliat2);
botonR.addEventListener("click", goliat);
