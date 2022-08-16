var allItems = document.querySelectorAll(".list li");
var itemShow = document.getElementById("content");
var btn = document.getElementById("show");
var finalPrice = document.getElementById("final");
var parentPrice = document.getElementById("parent");
var totalPrice = 0;
allItems.forEach(function(item){
    item.onclick = function(){
        itemShow.innerHTML += item.textContent + " ";
        if(itemShow != ""){
            btn.style.display= "block";
        }
        totalPrice += parseInt(item.getAttribute("price"));
    }
    btn.onclick = function(){
        finalPrice.innerHTML = totalPrice;
        parentPrice.style.visibility= "visible";
    } 
})