export const loadCSS = (elem: HTMLElement, style: string) => {
    const css = elem.ownerDocument.createElement("style");
    elem.innerHTML = style
    elem.shadowRoot?.appendChild(css)
}