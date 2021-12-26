import instance from "./instance";
export const getAll = () =>{
    const url="/products";
    return instance.get(url)
}
export const get = (id) =>{
    const url=`/products/${id}`;
    return instance.get(url)
}
export const search = (data) =>{
    const url=`/products?${data}`;
    return instance.get(url)
}
export const remove = (id) =>{
    const url=`/products/${id}`;
    return instance.delete(url)
}
export const add = (data) => {
    const url="/products";
    return instance.post(url,data)
}
export const update = (id,data) =>{
    const url=`/products/${id}`;
    return instance.patch(url,data)
}


// category protocol
export const updateCate = (id,data) =>{
    const url=`/category/${id}`;
    return instance.patch(url,data)
}
export const addCate = (data) => {
    const url="/664/category";
    return instance.post(url,data)
}
export const getAllCate = () =>{
    const url="/category";
    return instance.get(url)
}
export const getCate = (id) =>{
    const url=`/category/${id}`;
    return instance.get(url)
}
export const removeCate = (id) =>{
    const url=`/category/${id}`;
    return instance.delete(url)
}

//users
export const getUsers = () =>{
    const url=`/users`;
    return instance.get(url)
}
export const removeUser = (id) =>{
    const url=`/users/${id}`;
    return instance.delete(url)
}
//order Product
export const getAllOrder = () =>{
    const url="/order";
    return instance.get(url)
}
export const getOrder = (id) =>{
    const url=`/order/${id}`;
    return instance.get(url)
}
export const removeOrder = (id) =>{
    const url=`/order/${id}`;
    return instance.delete(url)
}
export const addOrder = (data) => {
    const url="/order";
    return instance.post(url,data)
}
//comment
export const getAllComment = () =>{
    const url="/comment";
    return instance.get(url)
}
export const addComment = (data) => {
    const url="/comment";
    return instance.post(url,data)
}
export const removeComment = (id) =>{
    const url=`/comment/${id}`;
    return instance.delete(url)
}
export const getComment = (idProduct) =>{
    const url=`/comment/${idProduct}`;
    return instance.get(url)
}
// slider
export const getAllSlider = () =>{
    const url="/slider";
    return instance.get(url)
}
export const removeSlider = (id) =>{
    const url=`/slider/${id}`;
    return instance.delete(url)
}
export const addSlider = (data) => {
    const url="/slider";
    return instance.post(url,data)
}