import { LitElement, css, html } from 'lit'

export class MyCarrito extends LitElement {
  constructor() {
    super()
  }

  render() {
    return html`
    <div class="wrapper">
        <aside>
          <header>
            <h1 class="logo">AndresShop</h1>
          </header>
          <nav>
            <ul>
                <li>
                    <a class="boton-menu boton-volver" href="../index.html">Seguir Comprando</a>
                </li>
                <li>
                    <a class="boton-menu boton-carrito active" href="src/carrito.html">Carrito</a>
                </li>
            </ul>
          </nav>
          <footer>
            <p class="text-footer">© 2024 Andres Caste</p>
          </footer>
        </aside>
        <main>
          <h2 class="titulo-principal">Todos los productos</h2>
          <div class="contenedor-productos">
            <div class="producto">
              <img class="producto-imagen" src="src/assets/free-nature-images.jpg" alt="">
              <div class="producto-detalles">
                <h3 class="producto-titulo">Abrigo 01</h3>
                <p class="producto-precio">$1000</p>
                <button class="producto-agregar">Agregar</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    `
  }



  static get styles() {
    return css`
      
    `
  }
}

window.customElements.define('my-carrito', MyCarrito)
