import { getAll } from "../../api/protocol";


const listProductPageHome = {

    async render() {

        try {
            const { data } = await getAll()
            const product = data.map( item =>{
              return(  `
                    <div class="item">
                    <img src="${item.image}" alt="" class="image-item">
                        <div class="info-item">
                            <a href="#/detail/${item.id}" class="title-info-item">${item.name}</a>
                            <span class="price-item">${item.price}đ</span>
                        </div>
                    </div>

                 `)
            }
    )
            
            return `
        <div class="container wrap-content">
        <div class="featured-product">
            <div class="featured-product-title">
                <h3 class="title">Sản phẩm NTQ</h3>
            </div>
            <div class="featured-product-carousel">
                <div id="slider" class="owl-carousel owl-theme">
                    ${product.join('')}
                </div>
            </div>
        </div>

        <div class="wrap-poster-content">
            <div class="row">
                <div  class="col-lg-4 col-md-6 com-xs-12">
                    <div class="poster-item leftfly">
                        <div style="background-image: url(./src/public/image/poster-vest.jpeg)" class="background-poster-item"></div>
                        <a class="poster-link" href="/#/product/3">vest nam ntq</a>
                    </div>
                </div>
                <div   class="col-lg-4 col-md-6 com-xs-12">
                    <div class="poster-item opacity-see">
                        <div style="background-image: url(./src/public/image/somi.jpeg)" class="background-poster-item"></div>
                        <a class="poster-link" href="/#/product/1">sơ mi nam ntq</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 com-xs-12">
                    <div class="poster-item rightfly">
                        <div class="poster-item-child">
                            <div style="background-image: url(./src/public/image/quan-1.jpeg)" class="background-poster-item"></div>
                            <a class="poster-link" href="/#/product/2">Quần nam ntq</a>
                        </div>
                        <div class="grap-div"></div>
                        <div class="poster-item-child">
                            <div style="background-image: url(./src/public/image/phukien.jpeg)" class="background-poster-item"></div>
                            <a class="poster-link" href="#">Phụ kiện - phiếu quà tặng</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
        
   
        `
        }

        catch (error) {
            console.log(error);
        }


    }




}
export default listProductPageHome;