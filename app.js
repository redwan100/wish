const homeSection = document.querySelector('.home_section');
const popUpSection = document.querySelector('.popup_section');
const giftBox = document.querySelector('.gift_box');
const closeBtn = document.querySelector('.close');

giftBox.addEventListener('click', () => {
    if (giftBox) {
        popUpSection.classList.add('active')
    } else {
        popUpSection.classList.remove('active')
        
    }
})


closeBtn.addEventListener('click', () => {
    popUpSection.classList.remove('active');
})





