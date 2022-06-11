const botonR = document.querySelector(".main__shop-button-right");
var contador = 0;

if(contador = 0)
{
    document.querySelectorAll("#shop__item")[0].classList.add('show-once');
    contador = 1;
}

function goliat ()
{
    let i = 1;
    document.querySelectorAll("#shop__item")[1].classList.add('shop__item-select');
    document.querySelectorAll("#shop__item")[1].classList.remove('shop__item');
    i--;
    document.querySelectorAll("#shop__item")[0].classList.remove('shop__item-select');
    document.querySelectorAll("#shop__item")[0].classList.add('shop__item');

    document.querySelectorAll("#shop__item-hide")[1].classList.add('shop__');
    document.querySelectorAll("#shop__item-hide")[1].classList.remove('shop__item-hide');
    document.querySelectorAll("#shop__item-hide")[0].classList.remove('shop__');
    document.querySelectorAll("#shop__item-hide")[0].classList.add('shop__item-hide');
    
}
botonR.addEventListener("click", goliat);

const botonL = document.querySelector(".main__shop-button-left");
function goliat2 ()
{   
    let i = 1;
    document.querySelectorAll("#shop__item")[0].classList.add('shop__item-select');
    document.querySelectorAll("#shop__item")[0].classList.remove('shop__item');
    i--;
    document.querySelectorAll("#shop__item")[1].classList.remove('shop__item-select');
    document.querySelectorAll("#shop__item")[1].classList.add('shop__item');

    document.querySelectorAll("#shop__item-hide")[0].classList.add('shop__');
    document.querySelectorAll("#shop__item-hide")[0].classList.remove('shop__item-hide');
    document.querySelectorAll("#shop__item-hide")[1].classList.remove('shop__');
    document.querySelectorAll("#shop__item-hide")[1].classList.add('shop__item-hide');

}
botonL.addEventListener("click", goliat2);
