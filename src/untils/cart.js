export const getCartItems = () =>{
    const cartItems = localStorage.getItem('cart')  ? JSON.parse(localStorage.getItem('cart')) : []
   return cartItems;
}
//set
export const setCartItems = (data) =>{
    localStorage.setItem('cart',JSON.stringify(data));
}
// addtocart
export const addToCart = (newProduct) =>{
    //lay san pham tu localStorage
    let cartItems = getCartItems();
    //kiem tra san pham trong localStorage
    const existProduct = cartItems.find( product => product.id === newProduct.id )
    if(existProduct){
        existProduct.quantity++;
    }
    else{
        cartItems =[...cartItems,newProduct];
    }
    setCartItems(cartItems);
    
    alert('them vao cart thanh cong')
}
//remove
export const removeItemFromCart = (id) =>{
   const cartItems = getCartItems()
    console.log('cartItems',cartItems)
    const newCartItems = cartItems.filter(item => item.id != id)
    console.log('newCartItems', newCartItems)
    setCartItems(newCartItems);
}