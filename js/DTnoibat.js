const listImage = document.querySelector('.list-images');
const imgs = document.getElementsByTagName('img');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const length = imgs.length;
let current = 0;

const handleChangeSlide = (direction) => {
    let width = imgs[0].offsetWidth;
    if (direction === 'right') {
        if (current === length - 5) {
            current = 0;
        } else {
            current++;
        }
    } else if (direction === 'left') {
        if (current === 0) {
            current = length - 5;
        } else {
            current--;
        }
    }
    listImage.style.transform = `translateX(${(width + 40) * -1 * current}px)`;
    document.querySelector('.active').classList.remove('active');
    document.querySelector('.index-item-' + current).classList.add('active');
};

btnRight.addEventListener('click', () => {
    handleChangeSlide('right');
});

btnLeft.addEventListener('click', () => {
    handleChangeSlide('left');
});
