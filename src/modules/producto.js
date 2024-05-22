export const getAllProducts = async()=>{
    let url = 'https://file.notion.so/f/f/eaa1771c-fc19-40d4-8527-37ca1caab8fa/8f181ea0-47f7-49a5-9b85-48db35d8ec38/Documentos_DB.json?id=a21b973c-4a2b-4e71-b3f3-1b6e38a01f05&table=block&spaceId=eaa1771c-fc19-40d4-8527-37ca1caab8fa&expirationTimestamp=1716321600000&signature=dfLfRnhbPSEQnkFfmTlCM0ZfJFJheqvmfo0yktNj3L0&downloadName=Documentos_DB.json'
    let options = {
      method: 'GET',
      Headers: {
        "content-type": "application/json"
      }
    }
    let responder = await fetch(url,options)
    let result = await responder.json();
    let allProducts = [...result.abrigo, ...result.camiseta, ...result.pantalon];
    console.log(allProducts);
  }
export const getAllcoats = async()=>{
    let url = 'https://file.notion.so/f/f/eaa1771c-fc19-40d4-8527-37ca1caab8fa/8f181ea0-47f7-49a5-9b85-48db35d8ec38/Documentos_DB.json?id=a21b973c-4a2b-4e71-b3f3-1b6e38a01f05&table=block&spaceId=eaa1771c-fc19-40d4-8527-37ca1caab8fa&expirationTimestamp=1716321600000&signature=dfLfRnhbPSEQnkFfmTlCM0ZfJFJheqvmfo0yktNj3L0&downloadName=Documentos_DB.json'
    let options = {
          method: 'GET',
          Headers: {
            "content-type": "application/json"
          }
      }
  
      let responder = await fetch(url, options);
      let result = await responder.json();
      let coats = result.abrigo
      console.log(coats);
  } 
  
  export const getAllShirts = async()=>{
    let url = 'https://file.notion.so/f/f/eaa1771c-fc19-40d4-8527-37ca1caab8fa/8f181ea0-47f7-49a5-9b85-48db35d8ec38/Documentos_DB.json?id=a21b973c-4a2b-4e71-b3f3-1b6e38a01f05&table=block&spaceId=eaa1771c-fc19-40d4-8527-37ca1caab8fa&expirationTimestamp=1716321600000&signature=dfLfRnhbPSEQnkFfmTlCM0ZfJFJheqvmfo0yktNj3L0&downloadName=Documentos_DB.json'
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
    let url = 'https://file.notion.so/f/f/eaa1771c-fc19-40d4-8527-37ca1caab8fa/8f181ea0-47f7-49a5-9b85-48db35d8ec38/Documentos_DB.json?id=a21b973c-4a2b-4e71-b3f3-1b6e38a01f05&table=block&spaceId=eaa1771c-fc19-40d4-8527-37ca1caab8fa&expirationTimestamp=1716321600000&signature=dfLfRnhbPSEQnkFfmTlCM0ZfJFJheqvmfo0yktNj3L0&downloadName=Documentos_DB.json'
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