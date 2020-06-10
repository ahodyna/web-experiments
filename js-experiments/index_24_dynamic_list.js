let products = [];

function addProduct() {
    let name = document.getElementById("nameInput").value
    let cost = document.getElementById("costInput").value

    products.push({ "name": name, "cost": Number.parseInt(cost) })
    console.log(products)


    let node = document.createElement("LI");                
    let textnode = document.createTextNode(name);         
    node.appendChild(textnode);                              
    document.getElementById("productsList").appendChild(node); 
}

function sumProduct() {
    let counter = 0;
    for (let i = 0; i < products.length; i++){
        counter += products[i].cost
    }
    document.getElementById("productsSum").value = counter;
}