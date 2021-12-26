import { getCartItems } from "../../untils/cart"
import { addOrder } from "../../api/protocol"
const formPay = {
    render(){
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
        const dataSumPrice = cartItems.reduce((acc, item) => {
            return acc+= parseInt(item.price*item.quantity);
         },0)
        
        return(
            `
            <div style="margin-top: 200px;"class="wrapper-formPay">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-12 col-sm-12">
                    <h2>THÔNG TIN THANH TOÁN</h2>
                    <form data-sumPrice="${dataSumPrice}"  class="row g-3" id="formOrder">
                       
                        <div class="col-md-6">
                          <label for="lastName" class="form-label">Họ</label>
                          <input type="text" class="form-control" id="lastName">
                        </div>
                        <div class="col-md-6">
                          <label for="firstName" class="form-label">Tên</label>
                          <input type="text" class="form-control" id="firstName">
                        </div>
                        <div class="col-12">
                          <label for="inputAddress" class="form-label">Địa chỉ giao hàng</label>
                          <input type="text" class="form-control" id="inputAddress" placeholder="Số nhà - tên đường">
                        </div>
                        <div class="col-md-6">
                            <label for="phoneNumber" class="form-label">Số điện thoại</label>
                            <input type="number" class="form-control" id="phoneNumber">
                        </div>
                        <div class="col-md-6">
                            <label for="email" class="form-label">Địa chỉ Email</label>
                            <input type="email" class="form-control" id="email">
                        </div>
                        <div class="col-12">
                          <button type="submit" class="btn btn-primary">ĐẶT HÀNG</button>
                        </div>
                      </form>
                </div>
                <div class="col-lg-5 col-md-12 col-sm-12">
                    <div style class="product-payment-form">
                        <h2>ĐƠN HÀNG CỦA BẠN</h2>
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
                                <td style="font-weight: bolder;">${dataSumPrice} đ</td>
                              </tr>

                            </tbody>
                          </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
            `
        )
    },afterRender(){
        const formOrder = document.querySelector('#formOrder');
        formOrder.addEventListener('submit',function(e){
            const sumPrice = formOrder.getAttribute('data-sumPrice');
            const date = new Date();
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const hour = date.getHours();
            const minutes = date.getMinutes();
            const timeOrder = `${day}/${month}/${year} - ${hour}h:${minutes}'`;
            e.preventDefault();
            const datas = {
                lastName:document.querySelector('#lastName').value,
                firstName:document.querySelector('#firstName').value,
                address:document.querySelector('#inputAddress').value,
                phoneNumber:document.querySelector('#phoneNumber').value,
                email:document.querySelector('#email').value,
                timeOrder:timeOrder,
                product:getCartItems(),
                sumpPrice:sumPrice,
            }
            const result = addOrder(datas)
            result
            .then ( res =>{
              if(res.status === 201){
                window.location.hash=`/detailpay/${res.data.id}`
              }
            })
        })
    }
}
export default formPay