function btn(){
    let a = document.querySelector(".num1").value;
    let para = document.querySelector(".para")

    let square = a * a
    para.innerHTML = "Square Value: " + square
    
}