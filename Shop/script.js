var count = 1;
var products = new Array();
function addToBox(productsName, price) {
  document.getElementById("cart-number").innerHTML = count;
  count++;

  products.push({name: productsName, price: price});
  var ArrSeryalyze = JSON.stringify(products);
  localStorage.setItem('product', ArrSeryalyze);

}