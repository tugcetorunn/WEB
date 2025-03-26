function tabloOlustur(satir, sutun){
    let div = document.getElementById("tablo")
    let table = document.createElement("table")
    div.appendChild(table)
    table.setAttribute("border", "1")
    let header = table.createTHead()
    let row = table.insertRow(0)

    for (let satirSayisi = 0; satirSayisi < satir; satirSayisi++) {
        let tr = document.createElement("tr")
        table.appendChild(tr)
        for (let sutunSayisi = 0; sutunSayisi < sutun; sutunSayisi++) {
            let td = document.createElement("td")
            tr.appendChild(td)
            td.innerHTML = "hello"
        }
    }
}

//let cell = row.insertCell()
//let cell = row.insertCell(0)
//cell.innerHTML = "Kolon " + sutunSayisi + 1

function tabloOlustur2(){
    let satir = parseInt(document.getElementById("satir").value)
    let sutun = parseInt(document.getElementById("sutun").value)

    let tablo = document.getElementById("tablo") // tablo id li table oluşturulmuş olması lazım body de
    let strTable = ""
    for (let i = 0; i < satir; i++) {
        strTable += "<tr>"
        for (let j = 0; j < sutun; j++) {
            strTable += "<td>selam</td>"        
        }
        strTable += "</tr>"
    }
    tablo.innerHTML = strTable
}