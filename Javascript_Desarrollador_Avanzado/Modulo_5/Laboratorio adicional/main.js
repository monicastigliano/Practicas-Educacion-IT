let array = [1, 2, 3, 4, 5, 30]

//const count = (array_num) => new Promise((res) => res(array_num.length));
let count = new Promise((a, b) =>{
    a(array)
})
    
count.then((valor)=>{
    console.log('cantidad de elementos ' + valor.length)
})    

let sum = new Promise((a, b) =>{
    a(array)
})
    
sum.then((valor)=>{
    let res = valor.reduce((prev, current) => prev + current, 0);
    console.log('Suma de los elementos ' + res)
})  

let max = new Promise((a, b) =>{
    a(array)
})
    
max.then((valor)=>{
    let res = 0
    for(let i = 0; i < valor.length; i++) {
        if(valor[i]>res){
            res = valor[i]
        }
        
    }
    console.log('El máximo es ' + res)
}) 

let min = new Promise((a, b) =>{
    a(array)
})
    
min.then((valor)=>{
    let res = 9999
    for(let i = 0; i < valor.length; i++) {
        if(valor[i] < res){
            res = valor[i]
        }
        
    }
    console.log('El mínimo es ' + res)
}) 