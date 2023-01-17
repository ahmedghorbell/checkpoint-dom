var favs = Array.from(document.querySelectorAll('.fa-hand-holding-heart'))
var deletbtn = Array.from(document.querySelectorAll('.fa-dumpster'))
var cards = Array.from(document.querySelectorAll('.card'))
var plus = Array.from(document.querySelectorAll('.fa-square-plus'))
var minus = Array.from(document.querySelectorAll('.fa-square-minus'))

//LIKE
for(let fav of favs)(
    fav.addEventListener("click", function(){
        if(fav.style.color!='red'){
            (fav.style.color='red')
        } else{ (fav.style.color='black')
        }
    })
)
//DELETE

for(let i in deletbtn)(
    deletbtn[i].addEventListener("click", function(){
        cards[i].remove()
        total()
    })
)

//PLUS
for(let pl of plus)(
    pl.addEventListener("click", function(){
        pl.nextElementSibling.innerHTML++
        total()
    })
    )

//MINUS
for(let mn of minus)(
    mn.addEventListener("click", function(){
        if(mn.previousElementSibling.innerHTML>0){
            mn.previousElementSibling.innerHTML-- 
             }
             else{alert("stock cannot be less than 0")}
        total()
    })
)

//TOTAL

function total() {
    let qte = Array.from(document.querySelectorAll(".counter"))
    let price = Array.from(document.querySelectorAll(".unit-price"))
    let t = 0 
    
     for(let i = 0; i < price.length; i++){
        t = t + price[i].innerHTML * qte[i].innerHTML;
    }
    document.getElementById("totpri").innerHTML = t ;
}

