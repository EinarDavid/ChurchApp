const dominio = "http://83.229.86.168:7000"

var ret = (ruta, callback, datos = {}, method = 'GET', cabecera = {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'})=>{
  let data = {
    method: method,
    headers: cabecera
  }

  if(method!="GET")
  {
    var formBody = [];
    for (var key in datos) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(datos[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    data.body= formBody
  }
//  console.log(data)
  fetch(dominio + ruta, data)
        .then(response => {return(response.json())})
          .then(function(myJson) {callback(myJson)});
}

module.exports = ret;
