export const loadCSS = (elem: HTMLElement, style: string) => {
    const css = elem.ownerDocument.createElement("style");
    css.innerHTML = style
    elem.shadowRoot?.appendChild(css)
}