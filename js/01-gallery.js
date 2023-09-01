// 1----Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

// 2----Реалізація делегування на ul.gallery і отримання url великого зображення.

// 3----Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.

// 4----Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.

// 5----Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.


//Розмітка елемента галереї
//Посилання на оригінальне зображення повинно зберігатися в data-атрибуті source на елементі <img>, і вказуватися в href посилання. Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

/*<li class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img
        class="gallery__image"
        src="small-image.jpg"
        data-source="large-image.jpg"
        alt="Image description"
    />
    </a>
</li>

Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку. Заборони цю поведінку за замовчуванням.*/



import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListRef = document.querySelector('.gallery');

galleryListRef.addEventListener('click', onClickImg);

function onClickImg(e) {
    e.preventDefault();
    const { target } = e;
    const { alt } = target;
    const imgBigger = target.dataset.source;
    const bodyRef = document.querySelector("body");
    
    const biggerImgModal = basicLightbox.create(`
    <div class="modal">        
        <img
        width="800" height="600"
        src="${imgBigger}"
        alt="${alt}"/>
        <p style="color:white; font-size:24px; background-color:#504b5c; border-radius: 10px; text-align:center; opacity: 0.8;">${alt}</p>
    </div>
    `)
    
    if (!target.classList.contains('gallery__image')) { return };

    target.setAttribute("src", imgBigger);
    biggerImgModal.show()

    bodyRef.addEventListener("keydown", handleClick);

    function handleClick(event) {
        const { code } = event;
        if (code !== 'Escape') {return};
        
        biggerImgModal.close()
        bodyRef.removeEventListener("keydown", handleClick);
    };
}

function createImgEl(arr) {
    const exampleOfCard = arr.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
        </li>`
    }).join('');

    galleryListRef.innerHTML = exampleOfCard;    
}

createImgEl(galleryItems)