import header from "../../components/layout/header";
import { getCartItems, removeItemFromCart } from "../../untils/cart";
import { reRender } from "../../untils/until";

const cartPage = {

    render(){
        const cartItems = getCartItems();
        const dataCart = cartItems.map( cartItem =>{
            return (
                `
                <tr>
                <th scope="row"><span id="btnDeleteCartItem" data-id="${cartItem.id}"><i style="font-size:20px;color:red;cursor: pointer;" class="fas fa-trash-alt"></i></span></th>
                <td style="display: flex;">
                    <img style="width:15%; margin-right:10px;" src="${cartItem.image}" alt="product">
                    <span>${cartItem.name}</span>
                </td>
                <td style="font-weight: bolder;">${cartItem.price}đ</td>
                <td style="text-align: center"><span>${cartItem.quantity}</span></td>
                <td style="font-weight: bolder;">${cartItem.quantity * cartItem.price}đ</td>
              </tr>
                `
            )
        })

        const dataSumPrice = cartItems.reduce((acc, item) => {
           return acc+= parseInt(item.price*item.quantity);
        },0)
       
        return (
            `
            <div style="margin-top: 150px;" class="wrapperCart">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-md-12 col-sm-12 col-12">
                        <div style="border-left: 1px solid #ccc; padding: 10px;margin-top: 15px;" class="showCartProduct">
                            <table class="table">
                                <thead>
                                  <tr>
                                    <th scope="col"></th>
                                    <th scope="col">SẢN PHẨM</th>
                                    <th scope="col">GIÁ</th>
                                    <th scope="col">SỐ LƯỢNG</th>
                                    <th scope="col">TỔNG CỘNG</th>
                                  </tr>
                                </thead>
                                <tbody>
                                 ${dataCart.join('')}
                                </tbody>
                              </table>
                              <div class="showCartProduct-button">
                                <a href="/" style="text-transform:uppercase;color:white" type="button" class="btn btn-dark"> <- Tiếp tục xem sản phẩm</a>
                                
                              </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                        <div style class="product-payment-form">
                            <table class="table">
                                <thead>
                                  <tr>
                                    <th scope="col">TỔNG SỐ LƯỢNG</th>
                                    <th scope="col"></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th  scope="row">Tổng cộng</th>
                                    <th scope="col">${dataSumPrice}đ</th>
                                    
                                  </tr>
                                </tbody>
                              </table>
                              <a href="/#/formpay"  style="text-transform:uppercase;width:100%" type="button" class="btn btn-dark">Tiến hành thanh toán</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `
        )
    },afterRender(){
      const btnDelete = document.querySelectorAll('#btnDeleteCartItem');
      for( let btn of btnDelete ){
        const idCartItem = btn.dataset.id;
        
        btn.addEventListener('click',function(){
          if(window.confirm('Bạn có chắc chắn muốn xoá không ?')){
          removeItemFromCart(idCartItem)
          reRender(cartPage,'#root')
          reRender(header,'#header')
          }
          else{
            reRender(cartPage,'#root')
          }
        })
      }
    }
}
export default cartPage;