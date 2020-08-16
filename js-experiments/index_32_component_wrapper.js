
function wrap(element) {
    let el = document.createElement(element)

    let result = {
        wrapped: el,
        appendText: function(text) {
            let textNode = document.createTextNode(text)
            let labelNode = document.createElement('label')
            labelNode.appendChild(textNode)
            this.wrapped.appendChild(labelNode)
        }
    }
    return result
}

function createComponent(someText, name) {
    let component = wrap('div')     // jquery works the same way
    component.appendText(someText + " " + name)
    return component;
}

function appendComponent() {
    let rootDiv = document.getElementById('root')
    let myComponent = createComponent(Date(), "Alex")
    rootDiv.appendChild(myComponent.wrapped)
}