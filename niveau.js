var etape=0;

function suivant(choix) {
    etape++;
    document.body.style.backgroundImage = 'url("image/etape'+etape+'.png")';
    console.log(choix);
    if (choix=="cafe"){
        document.getElementById("etape1").style.backgroundImage = 'url("image/cafe.png")';
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "block ruby";
    }
    if (choix=="the"){
        document.getElementById("etape1").style.backgroundImage = 'url("image/the.png")';
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "block ruby";
    }
    if (choix=="web"){
        document.getElementById("etape2").style.backgroundImage = 'url("image/web.png")';
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "block";
    }
    if (choix=="mobile"){
        
        document.getElementById("etape2").style.backgroundImage = 'url("image/mobile.png")';
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "block";
    }
    if (choix=="desktop"){
        console.log("ici")
        document.getElementById("etape2").style.backgroundImage = 'url("image/mobile.png")';
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "block";
    }
    if(choix=="importante"){
        console.log("ici2")
        document.getElementById("etape3").style.backgroundImage = 'url("image/mobile.png")';
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "block ruby";
    }
    if(choix=="moyen"){
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "block ruby";
    }
    if(choix=="noir"){
        document.getElementById("etape4").style.backgroundImage = 'url("image/mobile.png")';
        document.getElementById("4").style.display = "none";
    }
    if(choix=="sombre"){
        document.getElementById("etape4").style.backgroundImage = 'url("image/mobile.png")';
        document.getElementById("4").style.display = "none";
    }
  }