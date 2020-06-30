let products = [];

function addProduct() {
    let inputNode = document.getElementById("nameInput");
    let name = inputNode.value
    let cost = document.getElementById("costInput").value

    products.push({ "name": name, "cost": Number.parseFloat(cost) })
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