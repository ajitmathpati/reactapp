function customRender(reactElement,container ) {
    /* const DomElement = document.createElement(reactElement.type);
     DomElement.innerHTML = reactElement.Children
     DomElement.setAttribute('href', reactElement.props.href)
     DomElement.setAttribute('target', reactElement.props.target)
     continer.appendChild(DomElement)*/

    const DomElement = document.createElement(reactElement.type)
    DomElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop ==='children') continue;
        DomElement.setAttribute(prop, reactElement.props[prop])

    }
    container .appendChild(DomElement)

}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visite google '
}



const container  = document.getElementById("root")
customRender(reactElement, container );

