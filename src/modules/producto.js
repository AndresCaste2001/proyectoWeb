export const getAllProducts = async()=>{
    let url = 'https://file.notion.so/f/f/eaa1771c-fc19-40d4-8527-37ca1caab8fa/8f181ea0-47f7-49a5-9b85-48db35d8ec38/Documentos_DB.json?id=a21b973c-4a2b-4e71-b3f3-1b6e38a01f05&table=block&spaceId=eaa1771c-fc19-40d4-8527-37ca1caab8fa&expirationTimestamp=1716487200000&signature=KxAj7OWNF6YZzr-Mb2NMG_JybmTuB-ZB_RTH3zmFqzk&downloadName=Documentos_DB.json'
    let options = {
      method: 'GET',
      Headers: {
        "content-type": "application/json"
      }
    }
    let responder = await fetch(url,options)
    let result = await responder.json();
    let allProducts = [...result.abrigo, ...result.camiseta, ...result.pantalon];
    return allProducts;
  }
export const getAllcoats = async()=>{
    let url = 'https://file.notion.so/f/f/eaa1771c-fc19-40d4-8527-37ca1caab8fa/8f181ea0-47f7-49a5-9b85-48db35d8ec38/Documentos_DB.json?id=a21b973c-4a2b-4e71-b3f3-1b6e38a01f05&table=block&spaceId=eaa1771c-fc19-40d4-8527-37ca1caab8fa&expirationTimestamp=1716487200000&signature=KxAj7OWNF6YZzr-Mb2NMG_JybmTuB-ZB_RTH3zmFqzk&downloadName=Documentos_DB.json'
    let options = {
          method: 'GET',
          Headers: {
            "content-type": "application/json"
          }
      }
  
      let responder = await fetch(url, options);
      let result = await responder.json();
      let coats = result.abrigo
      return coats;
  } 
  
  export const getAllShirts = async()=>{
    let url = 'https://file.notion.so/f/f/eaa1771c-fc19-40d4-8527-37ca1caab8fa/8f181ea0-47f7-49a5-9b85-48db35d8ec38/Documentos_DB.json?id=a21b973c-4a2b-4e71-b3f3-1b6e38a01f05&table=block&spaceId=eaa1771c-fc19-40d4-8527-37ca1caab8fa&expirationTimestamp=1716487200000&signature=KxAj7OWNF6YZzr-Mb2NMG_JybmTuB-ZB_RTH3zmFqzk&downloadName=Documentos_DB.json'
    let options = {
        method: 'GET',
        Headers: {
          "content-type": "application/json"
        }
    }
    let responder = await fetch(url, options);
    let result = await responder.json();
    let shirts = result.camiseta
    return shirts
  } 
  
  export const getAllJeans = async()=>{
    let url = 'https://file.notion.so/f/f/eaa1771c-fc19-40d4-8527-37ca1caab8fa/8f181ea0-47f7-49a5-9b85-48db35d8ec38/Documentos_DB.json?id=a21b973c-4a2b-4e71-b3f3-1b6e38a01f05&table=block&spaceId=eaa1771c-fc19-40d4-8527-37ca1caab8fa&expirationTimestamp=1716487200000&signature=KxAj7OWNF6YZzr-Mb2NMG_JybmTuB-ZB_RTH3zmFqzk&downloadName=Documentos_DB.json'
    let options = {
        method: 'GET',
        Headers: {
          "content-type": "application/json"
        }
    }
  
    let responder = await fetch(url, options);
    let result = await responder.json();
    let jeans  = result.pantalon
    return jeans 
  } 

  export const getAllCarrito= async()=>{
    let url = 'http://localhost:5501/carrito'
    let options = {
        method: 'GET',
        Headers: {
          "content-type": "application/json"
        }
    }
    let responder = await fetch(url, options);
    let result = await responder.json();
    return result
  }

  export const getDeleteCarrito = async(id)=>{
    try{
    let url = `http://localhost:5501/carrito${id}`
    let options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    }
  
    let responder = await fetch(url, options);
    let result = await responder.json();
    console.log(result);
    } catch (error) {
      console.error('Ocurrió un error al obtener el carrito de compras:', error);
    }
  }
  
  export const getBuyCarrito = async()=>{
    try{
    let data = await getAllCarrito();
    for (let item of data){
      let url = `http://localhost:5501/carrito${item.id}`
      let options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      }
    
      let responder = await fetch(url, options);
      let result = await responder.json();
      console.log(result);
    }
    } catch (error) {
      console.error('Ocurrió un error al obtener el carrito de compras:', error);
    }
  }
  
  export const getEmptyCarrito = async()=>{
    try{
    let data = await getAllCarrito();
    for (let item of data){
      let url = `http://localhost:5501/carrito${item.id}`
      let options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      }
    
      let responder = await fetch(url, options);
      let result = await responder.json();
      console.log(result);
    }
    } catch ( error){
      console.error('Ocurrió un error al obtener el carrito de compras:', error);
    }
  }