function addTable() {

    var total_price = 0
var arr = JSON.parse(localStorage.getItem('product'));
var table = document.createElement('table');
table.className = "table";
table.innerHTML = "<tr><th> Product Name </th>  <th> Price (lei)</th></tr>"

for (var x = 0; x < arr.length; x++) {
    table.innerHTML += "<tr><td>" + arr[x].name+    "</td><td>"   +  parseInt(arr[x].price) + "</td></tr>";
    document.getElementById("addTable").appendChild(table);
    total_price+=parseInt(arr[x].price);
}

document.getElementById("price").innerHTML = total_price + " lei";

}