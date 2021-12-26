import { getOrder } from "../../api/protocol";
import { getCartItems } from "../../untils/cart";

const detailPay = {
   async render(idAddOrder){
        const cartItems = getCartItems();
        const dataCart = cartItems.map( cartItem =>{
            return (
                `
                <tr>
                <th  scope="row">${cartItem.name} x ${cartItem.quantity}</th>
                <td style="font-weight: bolder;">${cartItem.price * cartItem.quantity} đ</td>
              </tr>
                `
            )
        })
        
        const idOrder = parseInt(idAddOrder.id);
        const {data} = await getOrder(idOrder)
        console.log(data)
        return (
            `
            <div style="margin-top: 200px;" class="wrapper-detailPay">
       <div class="container">
           <div class="row">
               <div class="col-lg-7 col-md-12 col-sm-12">
                <div style class="product-payment-form">
                    <h2>CHI TIẾT ĐƠN HÀNG</h2>
                    <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">SẢN PHẨM</th>
                            <th scope="col">TỔNG CỘNG</th>
                          </tr>
                        </thead>
                        <tbody>
                        ${dataCart.join('')}
                        <tr>
                          <th  scope="row">Tổng cộng</th>
                          <td style="font-weight: bolder;">${data.sumpPrice} đ</td>
                        </tr>

                        </tbody>
                      </table>
                      
                </div>
               </div>
               <div class="col-lg-5 col-md-12 col-sm-12">
                   <div style="padding:20px;background-color:rgba(230, 222, 222, 0.548);box-shadow: 2px 2px 2px #ccc;" class="invoice">
                       <h4 style="color: darkseagreen;">Cảm ơn bạn đơn hàng đã được xác nhận</h4>
                       <ul>
                           <li>Mã đơn hàng: <span>${data.id}</span> </li>
                           <li>Ngày: <span>${data.timeOrder}</span> </li>
                           <li>Tổng cộng:<span>${data.sumpPrice} đ</span> </li>
                       </ul>
                   </div>
               </div>
           </div>
       </div>
   </div>
            `
        )
    }
}
export default detailPay