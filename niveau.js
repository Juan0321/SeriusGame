var etape=0;
var point=0;

function suivant(choix) {
    etape++;
    document.body.style.backgroundImage = 'url("image/etape'+etape+'.png")';
    console.log(choix=="attaque");
    console.log(choix)
    if (choix=="cafe"){
        document.getElementById("etape1").style.backgroundImage = 'url("image/cafe.png")';
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "block ruby";
        point++;
    }
    if (choix=="the"){
        document.getElementById("etape1").style.backgroundImage = 'url("image/the.png")';
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "block ruby";
        point++;
    }
    if (choix=="web"){
        document.getElementById("etape2").style.backgroundImage = 'url("image/web.png")';
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "block";
        point+=5;
    }
    if (choix=="mobile"){
        
        document.getElementById("etape2").style.backgroundImage = 'url("image/mobile.png")';
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "block";
    }
    if (choix=="desktop"){
        console.log("ici")
        document.getElementById("etape2").style.backgroundImage = 'url("image/descktop.png")';
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "block";
    }
    if(choix=="importante"){
        console.log("ici2")
        document.getElementById("etape3").style.backgroundImage = 'url("image/importante.png")';
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "block ruby";
        point+=3;
    }
    if(choix=="moyen"){
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "block ruby";
        point+=3;
    }
    if(choix=="noir"){
        document.getElementById("etape4").style.backgroundImage = 'url("image/noir.png")';
        document.getElementById("4").style.display = "none";
        point+=5;
    }
    if(choix=="sombre"){
        document.getElementById("etape4").style.backgroundImage = 'url("image/sombre.png")';
        document.getElementById("4").style.display = "none";
        point+=2;
    }
    if(etape==6){
        document.getElementById("karen").style.display = "block";
        document.getElementById("perso").style.display = "block";
        document.getElementById("attaque").style.display = "block";
        document.getElementById("suivant").style.display = "none";
    }
    if(choix=="attaque"){
        document.getElementById("etape1").style.backgroundImage = "";
        document.getElementById("etape2").style.backgroundImage = "";
        document.getElementById("etape3").style.backgroundImage = "";
        document.getElementById("etape4").style.backgroundImage = "";
        document.getElementById("attaque").style.display = "none";
        if(point>=9){document.body.style.backgroundImage = 'url("image/gagne.jpg")';}
        else{document.body.style.backgroundImage = 'url("image/perdu.jpg")';}
    }
    document.getElementById("point").innerHTML = point;
  }