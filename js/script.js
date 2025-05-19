var ALLBtn = document.querySelectorAll(".btn")
var content = document.querySelector("#content")
var showprice = document.querySelector("#showprice")
var price = document.querySelector("#price")
var clear = document.querySelector("#clear")
var totalprice = 0
var totalPriceCard = document.getElementById("total-price");


ALLBtn.forEach(function(item){
      item.onclick = function(){
        content.innerHTML += item.getAttribute("product")+"<br>"
        totalprice += +(item.getAttribute("price"))

        if(content.innerHTML != ""){
            showprice. style .display = "block"
            showprice. style .margin = "auto"
            showprice. style .backgroundColor = "(rgb(80, 97, 57))"
             showprice. style .color = "#fff"
              showprice. style .width = "140px"
              showprice. style .height = "40px"
              showprice.style. outline = "none"

              clear .style .display = "block"
              clear. style .margin = "auto"
            clear. style .backgroundColor ="(rgb(104, 36, 36))"
            clear . style .color = "#fff"
              clear. style .width = "140px"
              clear. style .height = "40px"
        }
    }
})
showprice.addEventListener('click',() =>{
    if(totalprice > 500){
        alert("you got discount 10%")
         totalprice -= 50 
        //   totalprice = totalprice * 0.7;
        totalPriceCard.textContent = "Total Price after discount: " + totalprice.toLocaleString() + " EGP";
    }else{
         totalPriceCard.textContent = "Total Price: " + totalprice.toLocaleString() + " EGP";
    }
//    price.innerHTML = totalprice
totalPriceCard.style.display = "block";
             showprice. style .backgroundColor = "(rgb(80, 97, 57))"
             showprice. style .color = "#fff"
console.log(totalprice)
})
    



clear .onclick = function(){
    content.innerHTML = ""
     totalPriceCard.style.display = "none";
     clear. style .backgroundColor ="(rgb(104, 36, 36))"
             clear. style .color = "#fff"
              showprice.style.display = "none";
               clear.style.display = "none";
    price.innerHTML = totalprice = 0
}
////////////////////////
var inputsearch = document.getElementById("search")
var cardlist = document.querySelectorAll(".card")
var notfound = document.getElementById("notfound")



inputsearch.addEventListener('input', () =>{
    var inputValue = inputsearch.value.toLowerCase()

    var anyVaisble = false 
     cardlist.forEach((item) =>{
        if(item.textContent.toLowerCase().includes(inputValue)){
            item.style.display = "list-item"
            anyVaisble = true
        }else{
            item.style.display = "none"
        }
    })
          notfound.style.display = anyVaisble ? "none" : "block"
})
