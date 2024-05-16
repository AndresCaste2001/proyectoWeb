import { LitElement, css, html } from 'lit'

export class MyElement extends LitElement {
  constructor() {
    super()
  }

  render() {
    return html`
    <p>HOla mundo</p>
    `
  }



  static get styles() {
    return css`
      
    `
  }
}

window.customElements.define('my-element', MyElement)
