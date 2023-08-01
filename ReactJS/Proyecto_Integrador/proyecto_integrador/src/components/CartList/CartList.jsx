import "./CartList.css";

import CartItem from "../CartItem/CartItem";

const itemsMock = [
    { 
        id: 1, 
        image: '/Fotos/Anteojos/ali-pazani-GwglcplmXDs-unsplash.jpg', 
        title: 'Anteojos 1', 
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae facere laudantium beatae et, eos minus deserunt modi, aliquid excepturi eius suscipit quasi! Suscipit corporis, laborum laudantium obcaecati sit excepturi vitae.',
        sizes: ['S', 'M'], 
        colors: ['Rojo', 'Violeta'], 
        price: 1500 
    },
    { 
        id: 2, 
        image: '/Fotos/Anteojos/apostolos-vamvouras-mKi4QEJXRCs-unsplash.jpg', 
        title: 'Anteojos 2', 
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae facere laudantium beatae et, eos minus deserunt modi, aliquid excepturi eius suscipit quasi! Suscipit corporis, laborum laudantium obcaecati sit excepturi vitae.',
        sizes: ['S', 'M'], 
        colors: ['Rojo', 'Violeta'], 
        price: 5500 
    },
    { 
        id: 3, 
        image: '/Fotos/Anteojos/noah-black-1p3N5SHz0Hk-unsplash.jpg', 
        title: 'Anteojos 3', 
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae facere laudantium beatae et, eos minus deserunt modi, aliquid excepturi eius suscipit quasi! Suscipit corporis, laborum laudantium obcaecati sit excepturi vitae.',
        sizes: ['S', 'M'], 
        colors: ['Rojo', 'Violeta'], 
        price: 1000 
    }
];

const cartItemsMock = [
    { productId: 1, size: 'S', color: 'Rojo', count: 2 },
    { productId: 2, size: 'S', color: 'Violeta', count: 1 }
];

const CartList = () => {

    const cartItems = 
        cartItemsMock
            .map(it => {
                const aux = itemsMock.find(i => i.id == it.productId);
                return {
                    title: aux.title,
                    size: it.size,
                    color: it.color,
                    price: aux.price,
                    count: it.count
                }
            })
            .map((val, index) => <CartItem cartItem={val} key={index} />)

    return <div className="cart-item-list">{cartItems}</div>
}

export default CartList;