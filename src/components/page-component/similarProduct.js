import { getAll } from "../../api/protocol";


const similarProduct = {
  
   async render(id){
     
      try {
      const { data } = await getAll();
      
      const items = data.find( item => item.id === parseInt(id.id))
      const listItemsCategory = data.filter( item => item.categoryID === items.categoryID)
      const productSimilar = listItemsCategory.map( item => {
        return (
          `
                   <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                       <div class="item">
                          <a class="wrap-image-item" href="/#/detail/${item.id}"><img src="${item.image}"></a>
                           <div class="info-item">
                               <a href="/#/detail/${item.id}" class="title-info-item">${item.name}</a>
                               <span class="price-item">${item.price}đ</span>
                           </div>
                       </div>
                   </div>
       `
        )
      } )
      
      
      
      
        return`
        <div class="similar-product">
            <h3 class="title-similar-product">
              Sản phẩm tương tự
            </h3>
            <div class="row similar-product-main">
             ${productSimilar.join('')}
            </div>
          </div>
        `
      } catch (error) {
        console.log(error)
      }
    }
}

export default similarProduct;