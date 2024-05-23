import { LitElement, css, html, render } from 'lit'
import{
  getAllcoats,
  getAllShirts,
  getAllJeans,
  getAllProducts,
  getAllCarrito,
  getDeleteCarrito,
  getBuyCarrito,
  getEmptyCarrito,
  getProduct
} from './modules/producto.js';

export class MyElement extends LitElement {
  static properties = {
    selectedCategoria: {type: String},
    number: {type: Number}
  };

  constructor() {
    super();
    this.selectedCategoria = 'Todos los productos';
    this.number = 0;
    this.showCarrito = false;
    this.carritoInstance = null;
    this.CarritoDetails();
  }
  
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
            <button class="boton-menu boton-categoria" @click="${()=> this.changeCategory('Todos los productos')}"><box-icon name='hand-right' type='solid' color='#4b33a8'></box-icon>Todos los productos</button>
          </li>
          <li>
            <button class="boton-menu boton-categoria" @click="${()=> this.changeCategory('abrigos')}"><box-icon name='hand-right' type='solid' color='#4b33a8' ></box-icon>Abrigos</button>
          </li>
          <li>
            
            <button class="boton-menu boton-categoria" @click="${()=> this.changeCategory('camisas')}"><box-icon name='hand-right' type='solid' color='#4b33a8' ></box-icon>Camisetas</button>
          </li>
          <li>
            <button class="boton-menu boton-categoria" @click="${()=> this.changeCategory('pantalones')}"><box-icon name='hand-right' type='solid' color='#4b33a8' ></box-icon>Pantalones</button>
          </li>
          <li>
            <button class="boton-menu boton-carrito" @click="${()=> this.changeCategory('carrito')}"><box-icon name='cart' type='solid' color='#ffffff' ></box-icon>Carrito <span class="numerito">${this.number}</span></button>
          </li>
        </ul>
      </nav>
      <footer>
        <p class="texto-footer">© 2024 Andres Caste</p>
      </footer>
    </aside>
    <main>
      <h2 class="titulo-principal">${this.selectedCategoria}</h2>
      <my-producto .category="${this.selectedCategoria}" @product-added="${this.updateNumber}"></my-producto>
      ${this.showCarrito ? html`<my-carrito></my-carrito>` : ''}
    </main>
  </div>
    `
  }

  changeCategory(category) {
    this.selectedCategoria = category;
    if (this.selectedCategoria === 'carrito'){
      if (!this.showCarrito) {
        // Si no hay una instancia creada, cambia el estado para mostrarla
        this.showCarrito = true;
      }
    } else {
      // Si se selecciona otra categoría, oculta el carrito
      this.showCarrito = false;
    }
    
  }
  updateNumber(){
    this.CarritoDetails();
  }

  async CarritoDetails(){
    let data = await getAllCarrito();
    let conteo = data.length;
    this.number = conteo;
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
  .numerito{
      background-color: var(--clr-white);
      color: var(--clr-main);
      padding: .15rem .25rem;
      border-radius: .25rem;
  }
  .boton-carrito.active .numerito {
      background-color: var(--clr-main);
      color: var(--clr-white);
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
  /** CARRITO **/

  .contenedor-carrito{
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
  }

  .carrito-vacio,
  .carrito-comprado{
      color: var(--clr-main);
  }
  .carrito-productos{
      display: flex;
      flex-direction: column;
      gap: 1rem;
  }
  .carrito-producto{
      display: flex;
      justify-content: space-between;
      background-color: var(--clr-gray);
      color: var(--clr-main);
      padding: 0.5rem;
      padding-right: 1.5rem;
      border-radius: 1rem;
      align-items: center;
  }
  .carrito-producto-imagen{
      width: 4rem;
      border-radius: 1rem;
  }
  .carrito-producto small{
      font-size: .75rem;
  }
  .carrito-producto-eliminar{
      border: 0;
      background-color: transparent;
      cursor: pointer;
  }
  .carrito-acciones{
      display: flex;
      justify-content: space-between;
  }
  .carrito-acciones-vaciar{
      border: 0;
      background-color: var(--clr-gray);
      padding: 1rem;
      border-radius: 1rem;
      color: var(--clr-main);
      text-transform: uppercase;
      cursor: pointer;
  }
  .carrito-acciones-derecha{
      display: flex;
  }
  .carrito-acciones-total{
      display: flex;
      border: 0;
      background-color: var(--clr-gray);
      padding: 1rem;
      border-radius: 1rem;
      color: var(--clr-main);
      text-transform: uppercase;
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
      gap: 1rem;
  }
  .carrito-acciones-comprar{
      border: 0;
      background-color: var(--clr-main);
      padding: 1rem;
      border-radius: 1rem;
      color: var(--clr-white);
      text-transform: uppercase;
      cursor: pointer;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
  }
  .disabled{
      display: none;
  }
    `
}

export class Productos extends LitElement{
  static properties = {
    products: {type: Array},
    category: {type: String}
  }
  constructor(){
    super();
    this.products = [];
    this.category = 'all';
  }
  updated(changedProperties) {
    if (changedProperties.has('category')) {
      this.loadProducts();
    }
  }
  async loadProducts() {
    switch (this.category) {
      case 'abrigos':
        this.products = await getAllcoats();
        break;
      case 'camisas':
        this.products = await getAllShirts();
        break;
      case 'pantalones':
        this.products = await getAllJeans();
        break;
      case 'carrito':
        this.products = null; 
        break;
      default:
        this.products = await getAllProducts();
    }
    
  }
  render() {
    return html`
    <div class="contenedor-productos">
      ${this.products ? 
        (Array.isArray(this.products) && this.products.length > 0 ? 
          this.products.map(product => html`
            <div class="producto">
              <img class="producto-imagen" src="${product.imagen}">
              <div class="producto-detalles">
                <h3 class="producto-titulo">${product.nombre}</h3>
                <p class="producto-precio">$${product.precio}</p>
                <button class="producto-agregar" @click="${() => this.addToCart(product)}">Agregar</button>
              </div>
            </div>
          `)
        : html`<p>No products yay.</p>`)
      : html``}
    </div>
    `;
  }

  addToCart(product) {
    getProduct(product);
    this.dispatchEvent(new CustomEvent('product-added'));
  }
  static get styles() {
    return css`
    .contenedor-productos{
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: 1rem;
  }
  .producto-imagen{
      width: 100%;
      border-radius: 1rem;
      height: 45vh;
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
      height: 20vh;
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
  }
  
}

export class Carrito extends LitElement{
  static properties = {
    products: {type: Array},
    carrito: {type: Array}
  }
  constructor(){
    super();
    this.products = [];
    this.carrito = [];
    this.loadProductsCarrito()
  }
  async loadProductsCarrito(){
    this.products = await getAllCarrito();
  }
  render(){
    return html`
    <div class="carrito-productos">
                ${Array.isArray(this.products) && this.products.length > 0 ?
                  this.products.map(product => html`
                  <div class="carrito-producto">
                  <img class="carrito-producto-imagen" src="${product.imagen}">
                  <div class="carrito-producto-titulo">
                        <small>Titulo</small>
                        <h3>${product.nombre}</h3>
                  </div>
                  <div class="carrito-producto-cantidad">
                        <small>Cantidad</small>
                        <p>${product.cantidad}</p>
                    </div>
                    <div class="carrito-producto-precio">
                        <small>Precio</small>
                        <p>${product.precio}</p>
                    </div>
                    <div class="carrito-producto-subtotal">
                        <small>Subtotal</small>
                        <p>${product.precio}</p>
                    </div>
                    <button @click="${() => this.deleteToCart(product)}" class="carrito-producto-eliminar">
                        <box-icon  type='solid' name='trash' color="#961818"></box-icon>
                    </button>
                  `)
                  :html`<p>No products found</p>`
                }
                  
            <div class="carrito-acciones">
                <div class="carrito-acciones-izquierda">
                    <button @click="${() => this.EmptyCarrito()}" class="carrito-acciones-vaciar">Vaciar Carrito</button>
                </div>
                <div class="carrito-acciones-derecha">
                    <div class="carrito-acciones-total">
                        <p>Total:</p>
                        <p>$${this.calculateTotal()}</p>
                    </div>
                    <button @click="${()=> this.buyNow()}" class="carrito-acciones-comprar">comprar ahora</button>
                </div>
            </div>
      </div>
    `;
  }
  async deleteToCart(product) {
    let existProductIndex = this.products.findIndex((val) => val.nombre === product.nombre);
    if (existProductIndex !== -1) {
      let productId = this.products[existProductIndex].id;
      this.products.splice(existProductIndex, 1);
  
      await getDeleteCarrito(productId);
      console.log('Producto eliminado');
    }
    this.products = [...this.products];
  }
  async buyNow(){
    await getBuyCarrito();
    this.products = [];
    console.log('Producto comprado');
  }
  async EmptyCarrito(){
    await getEmptyCarrito();
    this.products = [];
    console.log('Producto cancelados');
  }
  calculateTotal() {
    return this.products.reduce((total, product) => total + product.precio * product.cantidad, 0);
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

  /** CARRITO **/

  .contenedor-carrito{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .carrito-vacio,
  .carrito-comprado{
    color: var(--clr-main);
  }
  .carrito-productos{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .carrito-producto{
    display: flex;
    justify-content: space-between;
    background-color: var(--clr-gray);
    color: var(--clr-main);
    padding: 0.5rem;
    padding-right: 1.5rem;
    border-radius: 1rem;
    align-items: center;
  }
  .carrito-producto-imagen{
    width: 4rem;
    border-radius: 1rem;
  }
  .carrito-producto small{
    font-size: .75rem;
  }
  .carrito-producto-eliminar{
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
  .carrito-acciones{
    display: flex;
    justify-content: space-between;
  }
  .carrito-acciones-vaciar{
    border: 0;
    background-color: var(--clr-gray);
    padding: 1rem;
    border-radius: 1rem;
    color: var(--clr-main);
    text-transform: uppercase;
    cursor: pointer;
  }
  .carrito-acciones-derecha{
    display: flex;
  }
  .carrito-acciones-total{
    display: flex;
    border: 0;
    background-color: var(--clr-gray);
    padding: 1rem;
    border-radius: 1rem;
    color: var(--clr-main);
    text-transform: uppercase;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    gap: 1rem;
  }
  .carrito-acciones-comprar{
    border: 0;
    background-color: var(--clr-main);
    padding: 1rem;
    border-radius: 1rem;
    color: var(--clr-white);
    text-transform: uppercase;
    cursor: pointer;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
  .disabled{
    display: none;
  }
  `
}


customElements.define('my-carrito', Carrito)
customElements.define('my-element', MyElement);
customElements.define('my-producto', Productos);