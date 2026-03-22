function btn(){
     let value = Number(document.querySelector(".num1").value);
     let para = document.querySelector(".para")

     if(value % 10 == 0){
        para.innerHTML = "Number is Multiple Of 10 is : " + value +" ✅  "
     }else{
       para.innerHTML = "This Number not Multiple of 10 : " + value  + "  ❌ "
     }
}