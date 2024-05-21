import { LitElement, css, html } from 'lit'

export class MyElement extends LitElement {
  constructor() {
    super()
  }
  static styles = css`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap');

:root {
    --clr-main: #4b33a8;
    --clr-main-light: #785ce9;
    --clr-white: #ececec;
    --clr-gray: #e2e2e2;
    --clr-red: #961818;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
}

h1, h2, h3, h4, h5, h6, p, a, input, textarea, ul{
    margin: 0;
    padding: 0;
}

ul {
    list-style-type: none;
}

a {
    text-decoration: none;
}
.wrapper{
    display: grid;
    grid-template-columns: 1fr 4fr;
    background-color: var(--clr-main);
}
aside{
    padding: 2rem;
    padding-right: 0;
    color: var(--clr-white);
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
}
.logo{
    font-weight: 400;
    font-size: 1.3rem;
}
.menu {
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

.boton-menu{
    background-color: transparent;
    border: 0;
    color: var(--clr-white);
    cursor: pointer;
    display: flex;
    gap: 1rem;
    font-weight: 600;
    padding: 1rem;
    font-size: .85rem;
}


.boton-menu.active {
    background-color: var(--clr-white);
    color: var(--clr-main);
    width: 100%;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    position: relative;
}
.boton-menu.active::before {
  content: '';
  position: absolute;
  width: 1rem;
  height: 2rem;
  bottom: 100%;
  right: 0;
  background-color: transparent;
  border-bottom-right-radius: .5rem;
  box-shadow: 0 1rem 0 var(--clr-white);
}
.boton-menu.active::after {
  content: '';
  position: absolute;
  width: 1rem;
  height: 2rem;
  top: 100%;
  right: 0;
  background-color: transparent;
  border-top-right-radius: .5rem;
  box-shadow: 0 -1rem 0 var(--clr-white);
}
.boton-carrito {
    margin-top: 2rem;
}

.texto-footer{
    color: var(--clr-main-light);
    font-size: 0.85rem;
}
main{
    background-color: var(--clr-white);
    margin: 1rem;
    margin-left: 0;
    border-radius: 2rem;
    padding: 3rem;
}
.titulo-principal{
    color: var(--clr-main);
    margin-bottom: 2rem;
}
.contenedor-productos{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 1rem;
}
.producto-imagen{
    max-width: 100%;
    border-radius: 1rem;
}
.producto-detalles {
    background-color: var(--clr-main);
    color: var(--clr-white);
    padding: .5rem;
    border-radius: 1rem;
    margin-top: -2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: .25rem;
}
.producto-titulo{
    font-size: 1rem;
}
.producto-agregar{
    border: 0;
    background-color: var(--clr-white);
    color: var(--clr-main);
    padding: .5rem;
    text-transform: uppercase;
    border-radius: 2rem;
    cursor: pointer;
    border: 2px solid var(--clr-white);
    transition: background-color 0.2s, color 0.2s;
}
.producto-agregar:hover {
    background-color: var(--clr-main);
    color: var(--clr-white);
}
  `
  render() {
    return html`
    <div class="wrapper">
    <aside>
      <header>
        <h1 class="logo">AndresShop</h1>
      </header>
      <nav>
        <ul class="menu">
          <li>
            <button class="boton-menu boton-categoria active"><box-icon name='hand-right' type='solid' color='#4b33a8'></box-icon>Todos los productos</button>
          </li>
          <li>
            
            <button class="boton-menu boton-categoria"><box-icon name='hand-right' type='solid' color='#4b33a8' ></box-icon>Abrigos</button>
          </li>
          <li>
            
            <button class="boton-menu boton-categoria"><box-icon name='hand-right' type='solid' color='#4b33a8' ></box-icon>Camisetas</button>
          </li>
          <li>
            <button class="boton-menu boton-categoria"><box-icon name='hand-right' type='solid' color='#4b33a8' ></box-icon>Pantalones</button>
          </li>
          <li>
            <a class="boton-menu boton-carrito" href="src/carrito.html"><box-icon name='cart' type='solid' color='#ffffff' ></box-icon>Carrito <span class="numerito">0</span></a>
          </li>
        </ul>
      </nav>
      <footer>
        <p class="texto-footer">© 2024 Andres Caste</p>
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

window.customElements.define('my-element', MyElement)
