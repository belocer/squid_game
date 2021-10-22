window.addEventListener('load', () => {
    let triangle_down = document.querySelector('.triangle_down');
    let triangle_up = document.querySelector('.triangle_up');
    let circle_down = document.querySelector('.circle_down');
    let circle_up = document.querySelector('.circle_up');
    let rectangle_down = document.querySelector('.rectangle_down');
    let rectangle_up = document.querySelector('.rectangle_up');
    let arr_obj = [
        [triangle_down, triangle_up],
        [circle_down, circle_up],
        [rectangle_down, rectangle_up],
    ];

    let i = 0;
    setInterval(() => {
        arr_obj.forEach(item => {
            item[0].style.opacity = '0'
            item[1].style.opacity = '0'
        });
        arr_obj[i][0].style.opacity = '1'
        arr_obj[i][1].style.opacity = '1'
        i === 2 ? i = 0 : i++;
    }, 9000);

    let obj = {
        run_text__wrap: '.sg__container',
        run_text: '.run-text',
        bias_transform: 300
    }
    new RunText(obj);
    let obj_dark = {
        run_text__wrap: '.sg__container',
        run_text: '.run-text-dark',
        bias_transform: 350
    }
    new RunText(obj_dark);

    /*** Фигуры на масках */
    let mask_person1 = document.querySelector('.mask_person1');
    let mask_person2 = document.querySelector('.mask_person2');
    let mask_person3 = document.querySelector('.mask_person3');

    let arr_img_figure = [
        'triangle_white',
        'circle_white',
        'rectangle_white',
    ];

    let arr_dom_element = [
        mask_person1,
        mask_person2,
        mask_person3
    ];

    let j = 0
    setInterval(() => {
        arr_dom_element.forEach(item => {
            j = getRandomInt(3)
            item.style.background = `url(./img/dest/${arr_img_figure[j]}.webp) center center no-repeat no-repeat`;
            item.style.backgroundSize = `contain`;
        })
    }, 3000);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    /* Раздвигаем двери */
    let top_door = document.querySelector('.top_door');
    let bottom_door = document.querySelector('.bottom_door');
    top_door.style.transform = 'translateY(-100%)';
    bottom_door.style.transform = 'translateY(100%)';

    setInterval(() => {
        top_door.style.transform = 'translateY(0)';
        bottom_door.style.transform = 'translateY(0)';
    }, 26250);
    setInterval(() => window.location.reload(), 29000);

    /** Рандомный запуск аудио **/
    let audio_bg1 = document.getElementById('audio_bg1')
    let audio_bg2 = document.getElementById('audio_bg2')
    /*audio_bg2.addEventListener('canplay', () => {

        getRandomInt(2) ? audio_bg1.play() : audio_bg2.play();
    });*/

    let greetings = document.createElement("audio");
    greetings.src = `./audio/music${getRandomInt(2) + 1}.mp3`;
    greetings.setAttribute('autoplay', 'true');
    greetings.setAttribute('volume', '0.4');
    greetings.setAttribute('type', 'audio/mpeg');
    greetings.autoplay = true;
    document.body.appendChild(greetings);
});

/** Верхнее видео **/

let header__video = document.getElementById('header__video')
header__video.addEventListener('canplaythrough', () => {
    setTimeout(() => header__video.play(), 22500);
});

/* ВСё заканчивается через 28 сек */