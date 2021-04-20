window.addEventListener("load", init);

function $(nev) {
    return document.querySelectorAll(nev);
}
function ID(nev) {
    return document.getElementById(nev);
}


function init() {
    ID("kuld").addEventListener("click", validalas);
}

function validalas() {
    console.log("Validálunk");
    
    var nevMezo = ID("nev").value;
    
    var szuro = /[A-Z]{1}[a-z]{2,}/;
    var hiba = "";
    var adat = "";
    var email1 = ID("email").value;
    var email2 = ID("email2").value;
    var van = false;
    
    var telefonszam = ID("tsz").value;
    var szamok = /[+]{1}[0-9]{11}/;
    
    var http = /[http:]/;
    var web = /[.hu]/;
    var weboldal = ID("web").value;
    if (!szuro.test(nevMezo)) {
        hiba += "Nagybetűvel kezdődjön! és legalább 3 karakterből álljon a név!<br>";
        ID("nev").style.border = "2px solid red";
    } else {
        ID("nev").style.border = "none";
        adat += "Név: "+nevMezo+"<br>";
    }
    
    for (var i = 0; i < email1.length; i++) {
        if (email1[i] === "@"){
            van = true;
        }
    }
    if (van === true){
        adat += "Email: "+email1+"<br>";
    }else{
        hiba += "Az Email-címben nincsen @!<br>";
    }
    if (email1 === email2  && email1 !== ""){
        adat += "Mind a két Email-cím helyes!"+ email1 +"<br>";
    }else{
        hiba += "Az Email-címek nem egyeznek!<br>";
    }
    
    if (!szamok.test(telefonszam)) {
        hiba += "A telefonszámban nem lehet betű és 11 számjegyűnek kell lennie<br>";
    } else {
        adat += "Telefonszám: "+telefonszam+"<br>";
    }
    
    var webjo = false;
    if (http.test(weboldal) && web.test(weboldal)) {
        webjo = true;
    }
    if (webjo === true){
        adat += "Weboldal: "+weboldal+"<br>";
    }else{
        hiba += "A weboldal helytelen!<br>";
    }
    
    $("aside section:nth-child(1) p")[0].innerHTML = hiba;
    $("aside section:nth-child(2) p")[0].innerHTML = adat;
    
}

