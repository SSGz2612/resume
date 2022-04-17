var r1 = document.getElementById("nav_e");
var s1 = document.getElementById("nav_c1");

var boxDefault = document.getElementById("boxDefault");
var boxSelected = document.getElementById("boxSelected");
var boxENG = document.getElementById("boxENG");
var boxSPA = document.getElementById("boxSPA");
var boxUCR = document.getElementById("boxUCR");
var boxRUS = document.getElementById("boxRUS");

// var cardProjectShop = document.getElementById("cardProjectShop");
// var cardProjectRating = document.getElementById("cardProjectRating");
// var cardProjectExchange = document.getElementById("cardProjectExchange");
// var cardProjectToDo = document.getElementById("cardProjectToDo");
// var cardProjectHayden = document.getElementById("cardProjectHayden");

var v1 = document.getElementById( "nav_d1_1");
var v2 = document.getElementById( "nav_d1_2");

var t1 = document.getElementById("nav_d1_2_1");

var u1 = document.getElementById("nav_d1_2_1_1");
var u2 = document.getElementById("nav_d1_2_1_2");
var u3 = document.getElementById("nav_d1_2_1_3");
var u4 = document.getElementById("nav_d1_2_1_4");
var u5 = document.getElementById("nav_d1_2_1_5");
var u6 = document.getElementById("nav_d1_2_1_6");
var u7 = document.getElementById("nav_d1_2_1_7");

var engL = [
    "ABOUT ME", "KNOWLEDGES", "PROJECTS",
    "Hi there! I am", "Frontend Developer", "Download Resume", "ABOUT ME",
    "I am a Junior Developer in Frontend and actually I working as Freelance making layout using HTML, CSS and JavaScript. I have experience in React and Redux, I understand PHP and SQL. My goal is constant self-development, improving the skills of solving momentary problems by any means. My ultimate goal is to be Full stack. Personal qualities: high responsibility, ability to concentrate, attention to details, high determination, analytical thinking and expression of ideas.",
    "Sergio D. Gimenez", "Sergio D. Gimenez | © 2022",
    "KNOWLEDGES", "ABOUT ME", "KNOWLEDGES", "PROJECTS", "PROJECTS", "Shop site", "Layout - Prorating", "Layout - Hayden", "Exchange Currency", "To-Do List"
]; // LAST - text_19

var espL = [
    "SOBRE MI", "CONOCIMIENTOS", "PROYECTOS",
    "Hola! soy", "Desarrollador Frontend", "Descargar Curriculum", "SOBRE MI",
    "Soy un Desarrollador Junior en el Frontend y actualmente trabajo como Freelance haciendo maquetación usando HTML, CSS y JavaScript. Tengo experiencia en React y Redux, entiendo PHP y SQL. Mi objetivo es el autodesarrollo constante, mejorando las habilidades para resolver problemas momentáneos por cualquier medio. Mi objetivo final es ser Full stack. Mis cualidades: alta responsabilidad, capacidad de concentración, atención a los detalles, alta determinación, pensamiento analítico y expresión de ideas",
    "Sergio D. Gimenez", "Sergio D. Gimenez | © 2022",
    "CONOCIMIENTOS", "SOBRE MI", "CONOCIMIENTOS", "PROYECTOS", "PROYECTOS", "Sitio de compras", "Diseño - Prorating", "Diseño - Hayden", "Cambio de Divisas", "Lista de Tareas" 
];

var ukrL = [
    "ПРО МЕНЕ", "ЗНАННЯ", "ПРОЕКТИ",
    "Привіт! я", "Фронтенд Розробник", "Завантажити Резюме", "ПРО МЕНЕ",
    "Я Junior Frontend Developer, на даний момент я працюю фрілансером, роблю верстку з використанням HTML, CSS і JavaScript. Маю досвід роботи з React та Redux, знаюся на PHP та SQL. Моя мета – постійний саморозвиток, вдосконалення навичок вирішення миттєвих завдань будь-якими способами. Моя кінцева мета це Full stack. Мої особисті якості: висока відповідальність, вміння концентруватися, уважність до деталей, висока цілеспрямованість, аналітичне мислення та вираження ідей.",
    "Серхіо Д. Хіменез", "Серхіо Д. Хіменез | © 2022", "ЗНАННЯ", "ПРО МЕНЕ", "ЗНАННЯ", "ПРОЕКТИ", "ПРОЕКТИ", "Shop site", "Layout - Prorating", "Layout - Hayden", "Exchange Currency", "To-Do List"
];

var rusL = [
    "ОБО МНЕ", "ЗНАННЯ", "ПРОЕКТЫ",
    "Всем привет! я", "Фронтенд Разработчик", "Скачать Резюме", "ОБО МНЕ",
    "Я Junior Frontend Developer, в данный момент я работаю фрилансером, делаю верстку с использованием HTML, CSS и JavaScript. Имею опыт работы с React и Redux, разбираюсь в PHP и SQL. Моя цель – постоянное саморазвитие, совершенствование навыков решения сиюминутных задач любыми способами. Моя конечная цель это Full stack. Мои личные качества: высокая ответственность, умение концентрироваться, внимательность к деталям, высокая целеустремленность, аналитическое мышление и выражение идей.",
    "Серхио Д. Хименез", "Серхио Д. Хименез | © 2022", "ЗНАННЯ", "ОБО МНЕ", "ЗНАННЯ", "ПРОЕКТЫ", "ПРОЕКТЫ", "Shop site", "Layout - Prorating", "Layout - Hayden", "Exchange Currency", "To-Do List"
];

function changeL( lan ) {
    for( let x = 0; x < lan.length; x++ ) {
        document.getElementById( "text_" + ( x + 1 ) ).innerHTML = lan[ x ];
    }
}

function defaultLanguage() {
    boxDefault.style.display = "none";
    boxENG.style.display = "flex";
    boxSPA.style.display = "flex";
    boxUCR.style.display = "flex";
    boxRUS.style.display = "flex";
}

function englishLanguage() {
    boxDefault.style.display = "flex";
    boxSelected.style.backgroundImage = "url('tools/united-kingdom.png')";
    boxENG.style.display = "none";
    boxSPA.style.display = "none";
    boxUCR.style.display = "none";
    boxRUS.style.display = "none";

    changeL( engL );
}

function spainLanguage() {
    boxDefault.style.display = "flex";
    boxSelected.style.backgroundImage = "url('tools/spain.png')";
    boxENG.style.display = "none";
    boxSPA.style.display = "none";
    boxUCR.style.display = "none";
    boxRUS.style.display = "none";

    changeL( espL );
}

function ukraineLanguage() {
    boxDefault.style.display = "flex";
    boxSelected.style.backgroundImage = "url('tools/ukraine.png')";
    boxENG.style.display = "none";
    boxSPA.style.display = "none";
    boxUCR.style.display = "none";
    boxRUS.style.display = "none";

    changeL( ukrL );
}

function russianLanguage() {
    boxDefault.style.display = "flex";
    boxSelected.style.backgroundImage = "url('tools/russia.png')";
    boxENG.style.display = "none";
    boxSPA.style.display = "none";
    boxUCR.style.display = "none";
    boxRUS.style.display = "none";

    changeL( rusL );
}

function nav_d1_2() {
    if( r1.style.display == "flex" ) {
        r1.style.display = "none";

        u1.style.display = "block";
        u2.style.display = "block";
        u3.style.display = "block";
        u4.style.display = "block";
        u5.style.display = "block";
        u6.style.display = "block";
        u7.style.display = "block";

        t1.style.height = "30px";
        t1.style.backgroundColor = "#FFFFFF";
    } else {
        r1.style.display = "flex";

        u1.style.display = "none";
        u2.style.display = "none";
        u3.style.display = "none";
        u4.style.display = "none";
        u5.style.display = "none";
        u6.style.display = "none";
        u7.style.display = "none";

        t1.style.height = "25px";
        t1.style.backgroundColor = "#232933";
        t1.style.borderRadius = "15px";
    }
}

// const projectShop = () => {
//     if( cardProjectShop.style.display == "flex" ) {
//         cardProjectShop.style.display = "none";
//     } else {
//         cardProjectShop.style.display = "flex";
//     }
// }

// const projectRating = () => {
//     if( cardProjectRating.style.display == "flex" ) {
//         cardProjectRating.style.display = "none";
//     } else {
//         cardProjectRating.style.display = "flex";
//     }
// }

// const projectExchange = () => {
//     if( cardProjectExchange.style.display == "flex" ) {
//         cardProjectExchange.style.display = "none";
//     } else {
//         cardProjectExchange.style.display = "flex";
//     }
// }

// const projectTodo = () => {
//     if( cardProjectToDo.style.display == "flex" ) {
//         cardProjectToDo.style.display = "none";
//     } else {
//         cardProjectToDo.style.display = "flex";
//     }
// }

// const projectHayden = () => {
//     if( cardProjectHayden.style.display == "flex" ) {
//         cardProjectHayden.style.display = "none";
//     } else {
//         cardProjectHayden.style.display = "flex";
//     }
// }