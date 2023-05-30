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
        if(this.shadowRoot) this.shadowRoot.innerHTML = "";
        loadCSS(this, style)

        const Lname = this.ownerDocument.createElement('label');
        Lname.textContent= "Nombre de la receta"
        Lname.className= "LabelName"
        this.shadowRoot?.appendChild(Lname);
        
        const name = this.ownerDocument.createElement('input');
        this.shadowRoot?.appendChild(name);
        name.addEventListener

        const Lingredientes = this.ownerDocument.createElement('label');
        Lingredientes.textContent= "Escriba los ingredientes"
        this.shadowRoot?.appendChild(Lingredientes);

        const ingredientes = this.ownerDocument.createElement('input');
        this.shadowRoot?.appendChild(ingredientes);

        const Linstrucciones = this.ownerDocument.createElement('label');
        Linstrucciones.textContent= "Escriba las instrucciones de la receta"
        this.shadowRoot?.appendChild(Linstrucciones);

        const instrucciones = this.ownerDocument.createElement('input');
        this.shadowRoot?.appendChild(instrucciones);

        const Image = this.ownerDocument.createElement('img');
        this.shadowRoot?.appendChild(Image);

        const button = this.ownerDocument.createElement("btn");
        this.shadowRoot?.appendChild(button);
    }
}

customElements.define('app-form', Form)