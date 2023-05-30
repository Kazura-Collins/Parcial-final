import { loadCSS } from "../../utils/styles"
import style from "./style.css"

export default class Form extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';
        loadCSS(this, style)

        const container = this.ownerDocument.createElement('div');
        container.className= "Container"
        this.shadowRoot?.appendChild(container);
        const Lname = this.ownerDocument.createElement('label');
        Lname.textContent= "Nombre de la receta"
        Lname.className= "LabelName"
        container.appendChild(Lname);
        
        const name = this.ownerDocument.createElement('input');
        container.appendChild(name);
        name.addEventListener

        const Lingredientes = this.ownerDocument.createElement('label');
        Lingredientes.textContent= "Escriba los ingredientes"
        container.appendChild(Lingredientes);

        const ingredientes = this.ownerDocument.createElement('input');
        container.appendChild(ingredientes);

        const Linstrucciones = this.ownerDocument.createElement('label');
        Linstrucciones.textContent= "Escriba las instrucciones de la receta"
        container.appendChild(Linstrucciones);

        const instrucciones = this.ownerDocument.createElement('input');
        container.appendChild(instrucciones);

        const Image = this.ownerDocument.createElement('img');
        container.appendChild(Image);

        const button = this.ownerDocument.createElement("button");
        button.textContent= "Guardar"
        button.addEventListener 
        container.appendChild(button);

        
    }
}

customElements.define('app-form', Form)