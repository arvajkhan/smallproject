function btn(){
    let a = Number(document.querySelector(".first_value").value);
    let b = Number(document.querySelector(".second_value").value);
    let c = Number(document.querySelector(".third_value").value);
    let para = document.querySelector(".para")

    let smallestNumber = Math.max(a,b,c)
    para.innerHTML = "Largest Number " + smallestNumber;
}