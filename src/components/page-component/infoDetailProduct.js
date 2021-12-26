import { get , getCate } from "../../api/protocol"
import { addToCart } from "../../untils/cart"


const infoDetailProduct ={
  async  render({id}){
        
        
        try {
          const idProduct = await parseInt(id)
          const {data} = await get(idProduct)
          const {data:dataCate} = await getCate(data.categoryID)
          return ` <div class="row detail-info-product">
          <div class="col-lg-6 col-md-12">
            <div class="wrap-image-product">
              <img src="${data.image}" alt="" class="image-product image-preview image-preview-js">
            </div>
          </div>
          <div class="col-lg-6 col-md-12 info-product">
            <h1 class="title-product">${data.name}</h1>
            <span class="price-product">${data.price}</span>
            <p class="design-product">${data.design}</p>
            <p class="material-product"><strong>Chất liệu:</strong>${data.material}</p>
  
            <div class="product-count">
              <input type="number" min ="0"  class="number-product" id="quantityValue">
              <button class="button-cart" id="btnAddToCart" data-id="${data.id}">Thêm vào giỏ hàng</button>
            </div>
  
           
            <p class="category-product"><strong>Loại sản phẩm:</strong>${dataCate.name}</p>
  
          </div>
        </div>
  
        <div class="detail-tabs-wrap">
          <div class="product-tabs-nav">
            <h3  class="button-tab active">Đánh giá sản phẩm</h3>
          
          </div>
          <div class="product-tab-panel">
            <div class="panel-tab-content">
            <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Comment</th>
              </tr>
            </thead>
            <tbody id="showComment" data-id="${idProduct}" >
             
             
            </tbody>
          </table>
            </div>
            <div class="panel-tab-content">
              <div class="assess">
                <p class="assess-title">Đánh giá</p>
                <p class="assess-content">
                
                </p>
              </div>
              <div class="form-tab-content">
                <p class="form-tab-title">Hãy là người nhận xét" <span id="name-product">${data.name}</span>"</p>
                <form nameproduct="${data.name}" data-id="${data.id}" id="formComment" action="" method="">
  
  
                  <div class="form-group">
                    <label for="email" class="form-label">Nhận xét của bạn</label>
                    <textarea id="contentComent" rows="4" cols="100%" name="comment" form="usrform">
                          </textarea>
                    <span class="form-message"></span>
                  </div>
  
                  <div class="row">
                    <div class="col-ld-6 col-md-6 col-sm-12">
                      <div class="form-group">
                        <label for="fullname" class="form-label">Tên đầy đủ</label>
                        <input id="fullname" name="fullname" type="text" placeholder="Nhập họ và tên"
                          class="form-control">
                        <span class="form-message"></span>
                      </div>
                    </div>
                    <div class="col-ld-6 col-md-6 col-sm-12">
                      <div class="form-group">
                        <label for="email" class="form-label">Email</label>
                        <input id="email" name="email" type="text" placeholder="Nhập địa chỉ email" class="form-control">
                        <span class="form-message"></span>
                      </div>
                    </div>
                  </div>
                  <button type='submit' class="form-submit">Gửi đi</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      `
        } catch (error) {
          console.log(error)
        }
        
}
}

export default infoDetailProduct