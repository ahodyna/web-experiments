function createComponent (someText, name) {
    
    let labelNode = document.createElement("label");
    let someTextNode = document.createTextNode(someText + " " + name);
    labelNode.appendChild(someTextNode);

    let componentSection = document.createElement("div")
    componentSection.appendChild(labelNode)

    return componentSection;
}


function appendComponent() {
    let rootDiv = document.getElementById("root")

    let myComponent = createComponent(Date(), "Alex")
    rootDiv.appendChild(myComponent)
    
}