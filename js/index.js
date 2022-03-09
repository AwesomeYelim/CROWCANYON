let menu = document.querySelectorAll("#menu li")
let menua = document.querySelectorAll("#menu li a")
// 메뉴 클릭시 on클래스 상태를 유지

menu[0].addEventListener("click", function(){
    menu[1].classList.remove("on")
    menu[2].classList.remove("on")
    menu[3].classList.remove("on")
    this.classList.add("on")
    window.addEventListener('scroll', function(){
       window.scroll(0, 10000) 
    })
})
menu[1].addEventListener("click", function(){
    menu[0].classList.remove("on")
    menu[2].classList.remove("on")
    menu[3].classList.remove("on")
    this.classList.add("on")
})
menu[2].addEventListener("click", function(){
    menu[0].classList.remove("on")
    menu[1].classList.remove("on")
    menu[3].classList.remove("on")
    this.classList.add("on")
})
menu[3].addEventListener("click", function(){
    menu[0].classList.remove("on")
    menu[1].classList.remove("on")
    menu[2].classList.remove("on")
    this.classList.add("on")
})


//   .forEach((e) =>
//     e.addEventListener("click", function(e){
        
//         if(menu !== "#menu li.on" || menu === "#menu li"){
//             this.classList.add("on")
//         }else{
//             this.classList.remove("on")
//         }
//     })
//   )
  


  



