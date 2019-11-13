let productUnitCost = 0;
let productCurrency = "$";
let subtotal = 0;
let shippingPercentage = 0.15;
let total = 0;
let paymentTypeSelected = false;
const CREDIT_CARD_PAYMENT = "Tarjeta de crédito";
const BANKING_PAYMENT = "Transferencia bancaria";
let ERROR_MSG = "Ha habido un error :(, verifica qué pasó.";

//Función que se utiliza para actualizar los costos de publicación

    function updateTotalCosts(){
        let shippingCostHTML = document.getElementById("shippingCostText");
        let shippingToShow = Math.round((shippingPercentage * subtotal));
      
        shippingCostHTML.innerHTML = productCurrency + shippingToShow;
      
        let totalCostHTML = document.getElementById("totalCostText");
        let totalToShow =  shippingToShow + subtotal;
      
        totalCostHTML.innerHTML = productCurrency + totalToShow;
      
       
    //hay un error pero no se exactamente que estoy haciendo mal :(<---the sad face is me.
}


function updateSubtotal(){
    subtotal= article.currency + article.unitCost * cantidad.value;
  document.getElementById("subtotal").innerHTML=subtotal;
  subtotal= article.unitCost * cantidad.value;
  document.getElementById("subtotalCostText").innerHTML=productCurrency + subtotal;

  

}

function showInfo(){
  if (document.getElementById('creditCardPaymentRadio').checked){
    document.getElementById('creditCardPaymentRadio').style.display='none';
  } else {
    document.getElementById('creditCardPaymentRadio').style.display='block';

}}

function showPaymentTypeNotSelected(){
  //ask for help here, you probably need to use if but i'm not really sure where the fudge to start hahahah i'm dumb :)


}

function hidePaymentTypeNotSelected(){

}

function showArticles(article){
    let imgid = document.getElementById('img');
    let img = '<img src="'+ article.src+'" class="img-fluid img-thumbnail" width="100px">';
    let name = document.getElementById("name");
    let precio = document.getElementById("precio");
    let cantidad = document.getElementById("cantidad");
  
    imgid.innerHTML = img;
    name.innerHTML = article.name
    precio.innerHTML =  article.currency + article.unitCost;
    cantidad.value = article.count;
    updateSubtotal();
    updateTotalCosts();
  
    cantidad.onclick = function(){
      updateSubtotal();
      updateTotalCosts();
    }
    cantidad.onkeyup = function(){
      updateSubtotal();
      updateTotalCosts();
    }
    

}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(response){
        article = response.data.articles[0];
    showArticles(article);
   });


   document.getElementById("Pradio").addEventListener("change", function(){
    shippingPercentage = 0.15;
    updateTotalCosts();
  });

  document.getElementById("Eradio").addEventListener("change", function(){
    shippingPercentage = 0.07;
    updateTotalCosts();
  });

  document.getElementById("Standardradio").addEventListener("change", function(){
    shippingPercentage = 0.05;
    updateTotalCosts();
  });

 

});