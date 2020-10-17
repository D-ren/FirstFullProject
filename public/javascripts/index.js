// для кнопки Order Now 

let scroll = document.getElementById('scroll');
let btn = document.querySelector('.btn');

function btnScroll() {
  scroll.scrollIntoView({
    behavior: 'smooth'
  })
}

btn.addEventListener('click', btnScroll);


// для всплывающего окна по нажатию на кнопку + Add

let addAnim = document.querySelectorAll('.addAnimation');

addAnim.forEach(elem => {
  elem.onclick = () => {
    document.getElementsByClassName('text-added')[0].style.right = '1.5vw';
    setTimeout("document.getElementsByClassName('text-added')[0].style.right = '-25vw'", 1500)
  }
});

