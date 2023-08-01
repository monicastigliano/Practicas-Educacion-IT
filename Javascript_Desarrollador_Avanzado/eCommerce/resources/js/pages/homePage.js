function homePage(){
    let los_articulos = getArticulos()
    
    function  filtrar_busquesa(val){
        if(val === '' || val === undefined || val === null) return
        else{
        let resultado = los_articulos.filter(el => el.nombre.includes(val))
        render_seleccion({datos: resultado})}
    }
    function filtrar_seleccion(val){
        let los_articulos = getArticulos()
        if(val === '' || val === undefined || val === null) return
        else{
        switch (val) {
            case 'nombre': 
                los_articulos.sort((a, b)=>{
                    if(a.nombre < b.nombre){
                        return -1
                    }
                    if(a.nombre > b.nombre){
                        return 1
                    }
                    return 0
                })
                render_seleccion({datos: los_articulos})
            break;
        
            case 'precio':
                los_articulos.sort((a, b)=>{
                    if(parseInt(a.precio) < parseInt(b.precio)){
                        return -1
                    }
                    if(parseInt(a.precio) > parseInt(b.precio)){
                        return 1
                    }
                    return 0
                })
                render_seleccion({datos: los_articulos})
            break;
        
            case 'id': 
                los_articulos.map(el=>parseInt(el.id)).sort((a, b)=>{
                    if(parseInt(a.id) < parseInt(b.id)){
                        return -1
                    }
                    if(parseInt(a.id) > parseInt(b.id)){
                        return 1
                    }
                    return 0  
                })
                render_seleccion({datos: los_articulos})
            break;
        
            default:
                break;
        }}
    }
    
    function  filtrarId(val){
        if(val === '' || val === undefined || val === null){ return}
        else{
        let resultado = los_articulos.filter(el => parseInt(el.nombre.id) === parseInt(val))
        renderPage('articulosPage.hbs', {datos: resultado}, ()=>{console.log('Listo')})
        }
    }

    let array_selecccion = ['nombre', 'precio', 'id']
    let query = location.search 
    console.log(query);
    if( query != ''){
        let params = new URLSearchParams(query)
        if(params.get('q')){
            //cadena de búsqueda
            let q = params.get('q')
            console.log(q);
            filtrar_busquesa(q)
        } else 
            if(params.get('s')){
                //cadena de selección
                let s = params.get('s')
                console.log('s ' + s);
                if(array_selecccion.includes(s)){
                    filtrar_seleccion(s)
                } else console.log('No existe esa selección');
            }
            else if(params.get('id')){
                //cadena de Id
                console.log(query);
                filtrarId(id)
            }
    }
}