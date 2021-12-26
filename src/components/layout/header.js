import start from "./header2"
import category from "../page-component/category"
import { getCartItems } from "../../untils/cart";
import { getAll, search } from "../../api/protocol";
const header = {
   
    async render() {
        const cartItems = getCartItems();
       
        const listCartItem = cartItems.map( item =>{
            return (
                `
                <li style="display:flex;padding:5px" class="sup-item sub-item-cart">
                    <img style="width:20%;margin-right:10px" src="${item.image}" alt="">
                    <span>${item.name}</span>
                 </li>
                `
            )
        })
        return `
        <div class="header">
        <div class="overlay">
            <div class="btn-close">
                <i class="fas fa-times"></i>
            </div>
        </div>
        <div class="header-mobile">
            <div class="mobile-navbar-btn">
                <i class="fas fa-bars"></i>
            </div>
            <div class="mobile-logo">
                <a href="/"> <img src="./src/public/image/LogoNTQ.png" alt=""></a>
            </div>
            <div class="mobile-navbar-btn btn-cart-list-product">
            <a href="/#/cart" ><i class="fas fa-shopping-bag"></i></a>
                
            </div>
            <ul class="cart-list-product">
                <div class="btn-close-cart">
                <i class="fas fa-times"></i>
                   
                </div>
                <h3 class="title-cart-list-product">Giỏ hàng</h3>
                                ${listCartItem.join('')}
                               <a style="width:100%;" href="/#/cart"> type="button" class="btn btn-danger">ĐẾN GIỎ HÀNG</a>
                
            </ul>
        </div>
        <div class="header-top-wrap">
            <div class="container">
                <div class="header-top">
                    <div class="header-top__contact">
                            <div class="contact-icon">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                            </div>
                            <div class="contact-icon ">
                                <a href="#"><i class="fab fa-google-plus-g"></i></a>
                            </div>
                            <span class="hotline">hotline: <span class="phone-number">123456789</span></span>
                            
                    </div>
                    <div class="header-top__info">
                            <a href="#" class="info">Chăm sóc khách hàng</a>
                            <a href="#" class="info">Tin tức</a>
                            <a href="#" class="info">Tin tức</a>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="header-wrap">
            <div class="container header-navbar">
                <div class="header-logo">
                   <a href="/"> <img src="./src/public/image/LogoNTQ.png" alt=""></a>
                </div>
                
                    <ul class="nav">
                        <li class="search-mobile">
                            <input type="text" class="search-text" placeholder="Tìm kiếm">
                                    <div class="search-btn">
                                        <i class="fas fa-search"></i>
                                    </div>
                        </li>
                        <li class="nav-item">
                            <a class="link-navbar" href="/">Trang chủ</a>
                        </li>
                        <li class="nav-item">
                            <a class="link-navbar" href="/about">Giới thiệu
                            </a>
                            
                            
                                   
                        </li>
                        <li class="nav-item">
                            <a class="link-navbar" href="">Khách hàng doanh ngiệp
                            </a>
                           
                        </li>
                        <li class="nav-item">
                            <a class="link-navbar" href="/#/product/1">Sản phẩm
                            </a>
                            <div class="btn-dropdown">
                                <i class="fas fa-angle-down"></i>
                            </div>
                            
                            <ul class="sup-list sup-list--product">
                                <ul class="list-collumn-item">
                                    <li class="sup-item">
                                        <a href="/#/product/1" class="link-sup-item link-sup-item--title">Trang phục nam</a>
                                    </li>
                                   ${await category.render()}
                                    
                                </ul>
                              
                            </ul>

                        </li>
                        <li class="nav-item">
                            <a class="link-navbar" href="">Hệ thống cửa hàng</a></li>
                        <li class="nav-item">
                            <a class="link-navbar" href="">Liên hệ</a>
                        </li>
                        <li class="nav-item nav-item--item-search">
                            <a class="link-navbar" href="">
                            <i class="fas fa-search"></i>
                            </a>
                            <ul class="sup-list">
                                <li class="sup-item sup-item--search">
                                    <input id="searchProduct" type="text" class="search-text" placeholder="Tìm kiếm">
                                    <div class="search-btn">
                                        <i class="fas fa-search"></i>
                                    </div>
                                </li>
                                <ul  id='listSearchProduct'>
                                </ul>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="link-navbar" href="/#/cart">
                                <i class="fas fa-shopping-bag"></i>
                            </a>
                            <ul style="width:300px;" class="sup-list cart-list-product">
                               ${listCartItem.join('')}
                               <a href="/#/cart" style="width:99%;" type="button" class="btn btn-danger">ĐẾN GIỎ HÀNG</a>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="link-navbar" href="/#/login">
                                 <i class="fas fa-user"></i>
                            </a>
                        </li>
                    </ul>
               
            </div>
        </div>
    </div>
        `
    },
    start
    ,afterRender(){
        const searchProduct = document.querySelector('#searchProduct');
        const listSearchProduct = document.querySelector('#listSearchProduct')
        searchProduct.oninput = (e) => {
           const result = search();
           
           result
           .then( res =>{
            
              const listItemsSearch = res.data.filter( item => {
                    return  item.name.includes(e.target.value);
              })

              const products = listItemsSearch.map( product => {
                  return (
                      `
                      <a href="#/detail/${product.id}" style="display:flex;padding:5px;color:white" class="sup-item sub-item-cart">
                        <img style="width:20%;margin-right:10px" src="${product.image}" alt="">
                        <span style="color:black">${product.name}</span>
                      </a>
                      `
                  )
              }) 

              listSearchProduct.innerHTML = products.join('')
           })

        }
    }

}
export default header;


//  <ul class="sup-list">
//  <li class="sup-item">
//      <a href="" class="link-sup-item">Tổng quan về công ty</a>
//  </li>
//  <li class="sup-item">
//      <a href="" class="link-sup-item">Lịch sử hình thành</a>
//  </li>
//  <li class="sup-item">
//      <a href="" class="link-sup-item">Tầm nhìn -Sứ mệnh</a>
//  </li>
//  <li class="sup-item">
//      <a href="" class="link-sup-item">Câu chuyện thương hiệu</a>
//  </li>
// </ul>


                            // <div class="btn-dropdown">
                           //     <i class="fas fa-angle-down"></i>
                            // </div>

                            //         <ul class="sup-list">
                            //                 <li class="sup-item">
                            //                     <a href="" class="link-sup-item">Hệ thống quản lý chất lượng</a>
                            //                 </li>
                            //                 <li class="sup-item">
                            //                     <a href="" class="link-sup-item">Dây chuyền sản xuất</a>
                            //                 </li>
                            //                 <li class="sup-item">
                            //                     <a href="" class="link-sup-item">Đội ngũ nhân sự</a>
                            //                 </li>
                            //                 <li class="sup-item">
                            //                     <a href="" class="link-sup-item">Hệ thống nhà máy</a>
                            //                 </li>
                            //         </ul>

                              // <ul class="list-collumn-item">
                                //     <li class="sup-item">
                                //         <a href="" class="link-sup-item link-sup-item--title">Phụ kiện</a>
                                //     </li>
                                //     <li class="sup-item">
                                //         <a href="" class="link-sup-item">Giày</a>
                                //     </li>
                                //     <li class="sup-item">
                                //         <a href="" class="link-sup-item">Ca vat</a>
                                //     </li>
                                //     <li class="sup-item">
                                //         <a href="" class="link-sup-item">Tất</a>
                                //     </li>

                                // </ul>
                                // <ul class="list-collumn-item">
                                //     <li class="sup-item">
                                //         <a href="" class="link-sup-item link-sup-item--title">Khuyến mãi</a>
                                //     </li>
                                //     <li class="sup-item">
                                //         <a href="" class="link-sup-item">Voucher</a>
                                //     </li>
                                //     <li class="sup-item">
                                //         <a href="" class="link-sup-item">Sự kiện</a>
                                //     </li>

                                // </ul>