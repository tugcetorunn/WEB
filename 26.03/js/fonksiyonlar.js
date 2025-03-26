function kareAl(sayi){ // ctor gibi return type ı yoktur
    
    return sayi * sayi;
}

function topla(sayi1, sayi2){

    return sayi1 + sayi2;
}

function yaz(mesaj){

    document.writeln("mesaj : " + mesaj)
}

// params
function sayilariTopla(...sayilar){

    let toplam = 0;
    for (let sayi of sayilar) {
        toplam += sayi;
    }

    return toplam;
}

// recursive func
function faktoriyel(sayi){

    if(sayi == 1) return 1
    return sayi * faktoriyel(sayi - 1)
}

// metod içinde metod tanımlama

function silindirHacimHesapla(yaricap , yukseklik){

    return daireAlanHesapla(yaricap) * yukseklik

    function daireAlanHesapla(yaricap){

        return Math.PI * yaricap * yaricap
    }
}

// zar atan bir metod yazınız
 function zarAt(){

    return parseInt(Math.random() * 6) + 1
 }
