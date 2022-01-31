var s1 = document.getElementById( "nav_c1" );
var s2 = document.getElementById( "nav_d1" );

var x1 = document.getElementById( "nav_c1_1" );
var x2 = document.getElementById( "nav_c1_1_1" );
var w1 = document.getElementById( "nav_c1_2" );
var y1 = document.getElementById( "nav_c1_3" );
var z1 = document.getElementById( "nav_c1_4" );

var v1 = document.getElementById( "nav_d1_1" );
var v2 = document.getElementById( "nav_d1_2" );

var t1 = document.getElementById( "nav_d1_2_1" );

var u1 = document.getElementById( "nav_d1_2_1_1" );
var u2 = document.getElementById( "nav_d1_2_1_2" );
var u3 = document.getElementById( "nav_d1_2_1_3" );
var u4 = document.getElementById( "nav_d1_2_1_4" );
var u5 = document.getElementById( "nav_d1_2_1_5" );
var u6 = document.getElementById( "nav_d1_2_1_6" );
var u7 = document.getElementById( "nav_d1_2_1_7" );

var engL = [
    "About me", "Knowledges", "Projects",
    "Hi there! I am", "Frontend Developer", "Download Resume", "About me",
    "I am a Junior Developer in Frontend with basic knowledge in Backend, actually in constant learning and ready for future projects. I also have interesting in moviles applications and games applications, I consider myself responsible, growth mind and patient.",
    "Sergio D. Gimenez", "Sergio D. Gimenez | © 2022",
    "Knowledges"
];

var ukrL = [
    "Про мене", "Знання", "Проекти",
    "Привіт! я", "Фронтенд Розробник", "Завантажити Резюме", "Про мене",
    "Я молодший розробник у Frontend з базовими знаннями в Backend, фактично постійно навчаюсь і готовий до майбутніх проектів. У мене також є цікаві додатки в кіно та ігри, я вважаю себе відповідальним, розумним зростанням і терплячим.",
    "Серхіо Д. Хіменез", "Серхіо Д. Хіменез | © 2022",
    "Знання"
];

var rusL = [
    "Обо мне", "Знания", "Проекты",
    "Всем привет! я", "Фронтенд Разработчик", "Скачать Резюме", "Обо мне",
    "Я младший разработчик в области Frontend с базовыми знаниями в области Backend, постоянно учусь и готов к будущим проектам. У меня также есть интересные приложения для кино и игр, я считаю себя ответственным, умом роста и терпеливым.",
    "Серхио Д. Хименез", "Серхио Д. Хименез | © 2022",
    "Знания"
];

function changeL( lan ) {
    for( let x = 0; x < lan.length; x++ ) {
        document.getElementById( "text_" + ( x + 1 ) ).innerHTML = lan[ x ];
    }
}

function nav_c1_1() {
    x1.style.display = "none";
    w1.style.display = "flex";
    y1.style.display = "flex";
    z1.style.display = "flex";
}

function nav_c1_2() {
    x1.style.display = "flex";
    x2.style.backgroundImage = "url( 'tools/united-kingdom.png' )";
    w1.style.display = "none";
    y1.style.display = "none";
    z1.style.display = "none";

    changeL( engL );
}

function nav_c1_3() {
    x1.style.display = "flex";
    x2.style.backgroundImage = "url( 'tools/ukraine.png' )";
    w1.style.display = "none";
    y1.style.display = "none";
    z1.style.display = "none";

    changeL( ukrL );
}

function nav_c1_4() {
    x1.style.display = "flex";
    x2.style.backgroundImage = "url( 'tools/russia.png' )";
    w1.style.display = "none";
    y1.style.display = "none";
    z1.style.display = "none";

    changeL( rusL );
}

function nav_d1_2() {
    if( x1.style.display == "none" ) {
        x1.style.display = "flex";
        
        v1.style.display = "none"; // nav_d1_1
        v1.style.backgroundColor = "#FFFFFF"; // nav_d1_1
        v1.style.height = "70px"; // nav_d1_1
        v1.style.borderRadius = "0px 30px 30px 0px"; // nav_d1_1

        u1.style.display = "block";
        u2.style.display = "block";
        u3.style.display = "block";
        u4.style.display = "block";
        u5.style.display = "block";
        u6.style.display = "block";
        u7.style.display = "block";

        t1.style.height = "40px";

        v2.style.backgroundColor = "#FFFFFF";
    } else {
        x1.style.display = "none";
        
        v1.style.display = "flex"; // nav_d1_1
        v1.style.backgroundColor = "#232933"; // nav_d1_1
        v1.style.height = "60px"; // nav_d1_1
        v1.style.borderRadius = "30px 0px 0px 30px"; // nav_d1_1

        u1.style.display = "none";
        u2.style.display = "none";
        u3.style.display = "none";
        u4.style.display = "none";
        u5.style.display = "none";
        u6.style.display = "none";
        u7.style.display = "none";

        t1.style.height = "30px";
        t1.style.backgroundColor = "#FFFFFF";
        t1.style.borderRadius = "15px";

        v2.style.backgroundColor = "#232933";
    }
}