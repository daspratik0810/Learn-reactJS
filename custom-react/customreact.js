//classic fucntion to render 
/*function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)  //DOM element is created
    domElement.innerHTML = reactElement.children    //in the innerHTMl it is changed to "Click me to visit google"
    domElement.setAttribute("href", reactElement.props.href)  //Attributes are set of href to "https://google.com"
    domElement.setAttribute("target", reactElement.props.target)  //Attributes are set of target to _blank
    
    container.appendChild(domElement)
}*/

//better way to render using for-loop

function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)  //DOM element is created
    domElement.innerHTML = reactElement.children    //in the innerHTMl it is changed to "Click me to visit google"
    
    for ( const prop in reactElement.props ){
        if (prop === "children") continue;

        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElemet)
}



const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit google"
}




const mainContainer = document.querySelector("#root")

customRender(reactElement, mainContainer)  //kya inject krna hai (reactElement), kisme inject krna hai (mainContainer)

