const searchBox = document.getElementById("search-item");
const products = document.querySelectorAll(".product-box"); // dot missing

searchBox.addEventListener("input", function () {

    let searchValue = searchBox.value.toLowerCase(); // not ariaValueMax

    products.forEach(function(p){
        //searching by using product name
        let productName = p.querySelector("h3").textContent.toLowerCase(); 
        // p not product
        // toLowerCase() needs ()

        if(productName.includes(searchValue)){
            p.style.display = "";
        }
        else{
            p.style.display = "none";
        }

        //searching by using price
        let productPrice = p.querySelector("h4").textContent.toLowerCase();
        if(productPrice.includes(searchValue)){
         p.style.display ="";
        }else{
         p.style.display = "none";
        }

    });

});

//By using Filter
// searchBox.addEventListener("input", ()=>{
//     //take user typed valuse
//     let searchValue = searchBox.value.toLowerCase();

//     //matched with product List
//     let matchedProducts = [...products].filter(function(p){
//         let productName = p.querySelector("h3").textContent.toLowerCase();
//         return productName.includes(searchValue);
//     });
//      products.forEach(function(p){
//       p.style.display="none";
//    });

//    matchedProducts.forEach(function(p){
//       p.style.display="";
//    });
// })