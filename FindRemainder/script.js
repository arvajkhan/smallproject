function btn(){
   let a =  Number(document.querySelector(".value1").value);
   let b =  Number(document.querySelector(".value2").value);
   let para = document.querySelector(".para")
   let remainder = a % b;
   para.innerHTML = `Remainder is ${a} % ${b} : = ${remainder}`

}