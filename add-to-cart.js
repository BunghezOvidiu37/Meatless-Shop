// let adaugareProdusCos = document.querySelector("#added-product-number"), count= 0;
// function addProductToCart(){
//     let inputProdusNumar = document.querySelector("#inputProdusNumar").value;
//     count+= inputProdusNumar;
//     document.getElementById("inputProdusNumar").value = '1';
    
//     if(count == 0){
//         adaugareProdusCos.innerHTML = +count;
//     }
//     else{
//         adaugareProdusCos.innerHTML = +inputProdusNumar 
//     }
// }


    let addProduct = document.querySelectorAll(".button-main-page");
    let products = [
      {
        name: "Buger",
        tag: "Verdino",
        price: "17",
        inCart: 0,
      },
      {
        name: "Gouda",
        tag: "Verdino",
        price: "15",
        inCart: 0,
      },
      {
        name: "Hot-Dog",
        tag: "Verdino",
        price: "22",
        inCart: 0,
      },
      {
        name: "Mici",
        tag: "Verdino",
        price: "12",
        inCart: 0,
      }
    ];


    for (let i = 0; i<addProduct.length; i++){
        addProduct[i].addEventListener('click', () =>{
            cartNumbers(products[i]);
        })
    }


    function onLoadCartNumbers(){
        let productNumbers = localStorage.getItem('cartNumbers');

        if(productNumbers) {
            document.querySelector('#added-product-number').textContent = productNumbers;
        }
        
    }

    //adding product number to cart icon and to localStorage
    function cartNumbers(product){
        let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers)

        if(productNumbers){
            localStorage.setItem("cartNumbers", productNumbers +1);
            document.querySelector("#added-product-number").textContent = productNumbers + 1;

        }
        else{
            localStorage.setItem("cartNumbers", 1);
            document.querySelector('#added-product-number').textContent = 1;
        }

        setItems(product);

    }

    function setItems(product){
        console.log('inside of setItems function');
        console.log('my product is', product);
    }

    onLoadCartNumbers();