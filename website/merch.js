var merchCart = JSON.parse(sessionStorage.getItem("merchandise"))

if (merchCart == null) {
    merchCart = [];
}

console.log(merchCart);

/*function addMerchCart() {

    var itemName = document.getElementById("itemName").innerHTML;
        var size = document.getElementById("size").value;
    var merchType = itemName + " - " + size;
    
    var price = parseFloat(document.getElementById("itemPrice").innerHTML);
        var quantity = parseInt(document.getElementById("quantity").value);
    var itemTotal = quantity * price;

    var item = {
        type: merchType,
        quantity: quantity,
        price: price,
        total: itemTotal
        }

    merchCart.push(item);
    console.log(merchCart);
    
  sessionStorage.setItem('merchandise', merchCart);
  }
  */
  //


 function addMerchSetter() {
  
    const itemName = document.getElementById("itemName").innerHTML;
    const size = document.getElementById("size").value;
  const merchType = itemName + " - " + size;

  const quantity = parseInt(document.getElementById("quantity").value);

  const price = parseFloat(document.getElementById("itemPrice").innerHTML);

  const itemTotal = quantity * price;
  console.log(price, itemTotal);

  /*localStorage.setItem('type', merchType);
  localStorage.setItem('quantity', quantity);
  localStorage.setItem('price', price);
  localStorage.setItem('total', itemTotal);*/

  var item = {
    type: merchType,
    quantity: quantity,
    price: price,
    total: itemTotal
    }

merchCart.push(item);
var jsonMerch = JSON.stringify(merchCart);
sessionStorage.setItem("merchandise", jsonMerch);

console.log(jsonMerch);
}

function setter() {
   
}

  //