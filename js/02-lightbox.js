/*    Зроби таку саму галерею як в першому завданні, але використовуючи бібліотеку SimpleLightbox, яка візьме на себе обробку кліків по зображеннях, відкриття і закриття модального вікна, а також гортання зображень за допомогою клавіатури.

використовуй цей шаблон.

<li class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img class="gallery__image" src="small-image.jpg" alt="Image description" />
    </a>
</li>

Розбий його на декілька підзавдань:

1----Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.

2----Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. Необхідно додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.

3----Ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery. Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».

4----Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.      */


import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListRef = document.querySelector('.gallery');

galleryListRef.addEventListener('click', onClickImg);

function onClickImg(e) {
    e.preventDefault();

    if (!e.target.classList.contains('gallery__image')) { return };

    new SimpleLightbox('.gallery a', { captionsData: 'alt', animationSpeed: 400, captionDelay: 250, alertError: 'Image not found', heightRatio: 0.8});
    
	galleryListRef.removeEventListener('click', onClickImg);
}


function createImgEl(arr) {
    const exampleOfCard = arr.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`
    }).join('');

    galleryListRef.innerHTML = exampleOfCard;    
}

createImgEl(galleryItems)