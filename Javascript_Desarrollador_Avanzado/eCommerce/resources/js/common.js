function renderPage(url, datos, cb){
    const xhr = new XMLHttpRequest()
    xhr.open('get', url)
    xhr.send()
    xhr.addEventListener('load', ()=>{
        let plantilla = xhr.response
        let template = Handlebars.compile(plantilla) 
        document.getElementById('view').innerHTML = template(datos)
        cb()
    })
}




