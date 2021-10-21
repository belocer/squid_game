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
    }, 3000);

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
});

/** Верхнее видео **/

let header__video =  document.getElementById('header__video')
header__video.addEventListener('canplay', () => {
    setTimeout(() =>header__video.play(), 23000);
});

/* ВСё заканчивается через 28 сек */