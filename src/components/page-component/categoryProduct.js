
import {getAll} from "../../api/protocol"
const categoryProduct ={
   async render(id){
    try {
        const idCategory = await parseInt(id.id); 
        const {data} = await getAll();
        
        const products = data.filter( item => item.categoryID === idCategory );
        console.log(products);
        const items = products.map( item => {
            return (
                `
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div class="item">
                    <a href="/#/detail/${item.id}" class="wrap-image-item"> <img src="${item.image}"></a>
                        <div class="info-item">
                            <a href="/#/detail/${item.id}" class="title-info-item">${item.name}</a>
                            <span class="price-item">${item.price}đ</span>
                        </div>
                    </div>
                </div>
                `
            )
        })
        return items.join('')

    } catch (error) {
        console.log(error)
    }
}
}
export default categoryProduct;
