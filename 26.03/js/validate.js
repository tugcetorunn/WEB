function kontrolEt(){
    // let inputs = document.getElementsByTagName("input")

    // let sayac = 0
    // for (let input of inputs) {
    //     if (input.value == "") {
    //         input.style.color = "red"
    //         sayac++
    //     }
    // }
    // if(sayac < inputs.length){
    //     return false
    // }
        
    // return true
    
    let inputs = document.querySelectorAll("input[type = 'text']")
    
    let count = inputs.length
    for (let item of inputs) {
        if(item.value == ""){
            item.style.border = "2px solid red"
        }
        else{
            item.style.border = null
            count--
        }
    }

    return count == 0 ? true : false   
}