const url = `https://jsonplaceholder.typicode.com`

const obtenerUsuarios = async () => {
    const res = await fetch(`${url}/users`)
    const data = await res.json()
    // console.log(data);
    return data
}

const obtenerPosts = async () => {
    const res = await fetch(`${url}/posts`)
    const data = await res.json()
    // console.log(data);
    return data
}

const obtenerComentarios = async () => {
    const res = await fetch(`${url}/comments`)
    const data = await res.json()
    // console.log(data);
    return data
}


async function proceso(){
    const users= await obtenerUsuarios()
    const posts= await obtenerPosts()
    const comments= await obtenerComentarios()  
    const datos = {
        users: users,
        posts: posts,
        comments: comments
    }
    function todosLosPost(obj){
        if(obj.id){
            console.log(obj.id)
            return datos.posts.filter(item=>item.userId === obj.id)
             
        }
        if(obj.nombre){
            console.log(obj.nombre);
            let dates = datos.users.filter(item=> item.name === obj.nombre) 
            console.log(dates);
            return datos.posts.filter(item=>item.userId === dates[0].id)
            
        }
    }
    console.log(datos)
    console.log(todosLosPost({id: 1}))
    console.log(todosLosPost({nombre: 'Clementine Bauch'}))
    //Retorna el objeto
    return datos
}

proceso()



