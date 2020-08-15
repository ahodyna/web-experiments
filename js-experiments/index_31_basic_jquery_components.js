function createComponent(someText, name) {
    let component = $('<div></div>')
    component.append(someText + " " + name)
    return component;
}

function appendComponent() {
    let rootDiv = $("#root")
    let myComponent = createComponent(Date(), "Alex")
    rootDiv.append(myComponent)
}
