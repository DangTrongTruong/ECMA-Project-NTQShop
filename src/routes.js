import Navigo from 'navigo';
import aboutPage from './page/about';
import addProduct from './page/admin/addProduct';
import categoryAD from './page/admin/categoryAD';
import commentPage from './page/admin/commentAD';
import orderAdminPage from './page/admin/orderAD';
import productAD from './page/admin/productAD';
import sliderAD from './page/admin/sliderAD';
import UpdateCate from './page/admin/updateCate';
import updateProduct from './page/admin/updateProduct';
import usersPage from './page/admin/users';
import cartPage from './page/cart/cartPage';
import detailPay from './page/cart/detailPay';
import formPay from './page/cart/formPay';
import homePage from './page/homePage';
import loginPage from './page/login/loginPage';
import signPage from './page/login/signPage';
import product from './page/product';
import productDetail from './page/productDetail';
const router = new Navigo('/',{hash:true , linksSelector: "a"});



const show = async (page,afterRender) => {
    document.querySelector('#root').innerHTML = await page;
    if(afterRender){
       await afterRender();
    }
    
}

const showAD = async (page,afterRender) => {
    document.querySelector('#admin').innerHTML = await page
    if(afterRender){
        await afterRender();
     }
}



const showLogin = (page,afterRender) => {
    document.querySelector('#login').innerHTML = page
    if(afterRender){
        afterRender();
    }
}


const routes = () =>{
    router

        .on('/', () => show(homePage.render(),homePage.afterRender))
        .on('/login', () => showLogin(loginPage.render(),loginPage.afterRender))
        .on('/sign', () => showLogin(signPage.render(),signPage.afterRender))
        .on('/admin/category', () => showAD(categoryAD.render(),categoryAD.afterRender))
        .on('/admin/slider', () => showAD(sliderAD.render(),sliderAD.afterRender))
        .on('/admin/order', () => showAD(orderAdminPage.render(),orderAdminPage.afterRender))
        .on('/admin/comment', () => showAD(commentPage.render(),commentPage.afterRender))
        .on('/updateCate/:id', ({data}) => showAD(UpdateCate.render(data),UpdateCate.afterRender))
        .on('/admin/product', () => showAD(productAD.render(),productAD.afterRender))
        .on('/add/product', () => showAD(addProduct.render(),addProduct.afterRender))
        .on('/update/product/:id', ({data}) => showAD(updateProduct.render(data),updateProduct.afterRender))
        .on('/admin/users', () => showAD(usersPage.render(),usersPage.afterRender))
        .on('/product/:id',({data}) => show(product.render(data),product.afterRender))
        .on('/detail/:id', ({data}) => show(productDetail.render(data),productDetail.afterRender))
        .on('/cart', () => show(cartPage.render(),cartPage.afterRender))
        .on('/formpay', () => show(formPay.render(),formPay.afterRender))
        .on('/detailpay/:id', ({data}) => show(detailPay.render(data)))
        .on('/about', () => show(aboutPage.render()))
        .notFound(()=>{
            console.log("not Found Page")
        })
        .resolve()
}

export default routes;