var r1 = document.getElementById("nav_e");
var s1 = document.getElementById("nav_c1");

var boxDefault = document.getElementById("boxDefault");
var boxSelected = document.getElementById("boxSelected");
var boxENG = document.getElementById("boxENG");
var boxSPA = document.getElementById("boxSPA");
var boxUCR = document.getElementById("boxUCR");
var boxRUS = document.getElementById("boxRUS");

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
    "About me", "Knowledges", "Projects",
    "Hi there! I am", "Frontend Developer", "Download Resume", "ABOUT ME",
    "I am a Developer in Frontend and actually I working as Freelance making layout using HTML, CSS and JavaScript. I have experience in React and Redux, I understand PHP and SQL.",
    "Sergio D. Gimenez", "Sergio D. Gimenez | © 2022",
    "KNOWLEDGES", "About me", "Knowledges", "Projects", "PROJECTS", "Shop site", "Layout - Prorating", "Layout - Hayden", "Exchange Currency", "To-Do List", "Made with", "Made with", "Made with", "Made with", "Made with", "Made with", "Pokemon Cards", "As a programmer I constantly develop myself, improving skills of solving momentary problems by any means and as target is to be a FullStack developer. Personal qualities: high responsibility, attention to detail, ability to concentrate, high commitment, excellent ability for innovative, analytical thinking and expression of ideas."
]; // LAST - text_28 -> As a programmer...

var espL = [
    "Sobre mi", "Conocimientos", "Proyectos",
    "Hola! soy", "Desarrollador Frontend", "Descargar Curriculum", "SOBRE MI",
    "Soy un Desarrollador en el Frontend y actualmente trabajo como Freelance haciendo maquetación usando HTML, CSS y JavaScript. Tengo experiencia en React y Redux, y entiendo PHP y SQL.",
    "Sergio D. Gimenez", "Sergio D. Gimenez | © 2022",
    "CONOCIMIENTOS", "Sobre mi", "Conocimientos", "Proyectos", "PROYECTOS", "Sitio de compras", "Diseño - Prorating", "Diseño - Hayden", "Cambio de Divisas", "Lista de Tareas", "Hecho con", "Hecho con", "Hecho con", "Hecho con", "Hecho con", "Hecho con", "Cartas de Pokemon", "Como programador constantemente me autodesarrollo, mejorando habilidades para resolver problemas momentáneos por cualquier medio y como objetivo es ser un programador FullStack. Mis cualidades: alta responsabilidad, capacidad de concentración, atención a los detalles, alta determinación, pensamiento analítico y expresión de ideas."
];

var ukrL = [
    "Про Мене", "Знання", "Проекти",
    "Привіт! я", "Фронтенд Розробник", "Завантажити Резюме", "ПРО МЕНЕ",
    "Я Frontend Developer, на даний момент я працював фрілансером, роблячи верстку з використанням HTML, CSS та JavaScript і написання JS для веб-сайтів. У мене є досвід роботи React та Redux, я також розумію PHP, SQL.",
    "Серхіо Д. Хіменез", "Серхіо Д. Хіменез | © 2022", "ЗНАННЯ", "Про Мене", "Знання", "Проекти", "ПРОЕКТИ", "Shop site", "Layout - Prorating", "Layout - Hayden", "Exchange Currency", "To-Do List", "Зроблено з", "Зроблено з", "Зроблено з", "Зроблено з", "Зроблено з", "Зроблено з", "Pokemon Cards", "Як програміст я постійний саморозвиток, вдосконалення навичок вирішення миттєвих завдань будь-якими способами. Особисті якості: висока відповідальність, уважність до деталей, вміння концентруватися, висока цілеспрямованість, відмінні здібності до новаторського, аналітичного мислення та вираження ідей."
];

var rusL = [
    "Обо Мне", "Знание", "Проекты",
    "Всем привет! я", "Фронтенд Разработчик", "Скачать Резюме", "ОБО МНЕ",
    "Я Frontend Developer, в данный момент я работал фрилансером, делая верстку с использованием HTML, CSS и JavaScript. У меня есть опыт работы React и Redux и написания JS для сайтов, я также понимаю PHP, SQL.",
    "Серхио Д. Хименез", "Серхио Д. Хименез | © 2022", "ЗНАНИЕ", "Обо Мне", "Знание", "Проекты", "ПРОЕКТЫ", "Shop site", "Layout - Prorating", "Layout - Hayden", "Exchange Currency", "To-Do List", "Сделано с", "Сделано с", "Сделано с", "Сделано с", "Сделано с", "Сделано с", "Pokemon Cards", "Как программист я постоянное саморазвитие, совершенствование навыков решения сиюминутных задач любыми способами. Личные качества: высокая ответственность, внимательность к деталям, умение концентрироваться, высокая целеустремленность, отличные способности к новаторскому, аналитическому мышлению и выражению идей."
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