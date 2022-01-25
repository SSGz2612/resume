function nav_c1_1() {
    console.log( "click!" );
    var x = document.getElementById( "nav_c1_1_1" );
    var x1 = document.getElementById( "nav_c1_1" );
    var y = document.getElementById( "nav_c1_2_1" );
    var y1 = document.getElementById( "nav_c1_2" );
    var z = document.getElementById( "nav_c1_3_1" );
    var z1 = document.getElementById( "nav_c1_3" );

    if( x1.style.display === "flex" ) {
        x1.style.backgroundColor = "#232933";
        y1.style.display = "flex";
        z1.style.display = "flex";
    } else {
        x.style.display = "block";
    }
}

function navb2b4() {
    var x = document.getElementById( "nav-d" );

    if( x.style.display === "block" ) {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function sectiona2() {
    var y = document.getElementById( "sectiona3" );
    var w = document.getElementById( "s-a2" );
    var z = document.getElementById( "s-a3" );
    
    if( y.style.display === "block" ) {
        y.style.display = "none";
        w.style.display = "inline";
        z.style.display = "none";
    } else {
        y.style.display = "block";
        w.style.display = "none";
        z.style.display = "inline";
    }
}

function sectiona3() {
    var y = document.getElementById( "sectiona3" );
    var w = document.getElementById( "s-a2" );
    var z = document.getElementById( "s-a3" );
    
    if( y.style.display === "block" ) {
        y.style.display = "none";
        w.style.display = "inline";
        z.style.display = "none";
    } else {
        y.style.display = "block";
        w.style.display = "none";
        z.style.display = "inline";
    }
}