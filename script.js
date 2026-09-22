let products = [];

function addProduct() {

    let productName = document.getElementById("productName").value.trim();
    let price = parseFloat(document.getElementById("price").value);
    let quantity = parseInt(document.getElementById("quantity").value);

    let error = document.getElementById("error");

    error.innerHTML = "";

    if (productName === "") {
        error.innerHTML = "Please enter product name.";
        return;
    }

    if (isNaN(price) || price <= 0) {
        error.innerHTML = "Please enter a valid price.";
        return;
    }

    if (isNaN(quantity) || quantity <= 0) {
        error.innerHTML = "Please enter a valid quantity.";
        return;
    }

    let product = {
        name: productName,
        price: price,
        quantity: quantity,
        total: price * quantity
    };

    products.push(product);

    displayBill();

    document.getElementById("productName").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
}


function displayBill() {

    let table = document.getElementById("billTable");

    table.innerHTML = "";

    let grandTotal = 0;

    for (let i = 0; i < products.length; i++) {

        let product = products[i];

        let row = `
            <tr>
                <td>${product.name}</td>
                <td>₹${product.price.toFixed(2)}</td>
                <td>${product.quantity}</td>
                <td>₹${product.total.toFixed(2)}</td>
            </tr>
        `;

        table.innerHTML += row;

        grandTotal += product.total;
    }

    document.getElementById("grandTotal").innerHTML =
        grandTotal.toFixed(2);
}


function showJSON() {

    if (products.length === 0) {
        document.getElementById("jsonData").innerHTML =
            "No products added.";
        return;
    }

    let jsonData = JSON.stringify(products, null, 4);

    document.getElementById("jsonData").innerHTML = jsonData;
}