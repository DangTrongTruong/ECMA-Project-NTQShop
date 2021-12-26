import category from '../components/page-component/category'
import categoryProduct from '../components/page-component/categoryProduct'


const product = {
   async render(data) {
         
        return `
    <div class="product-wrap">
            <div class="product-top">
                <h1 class="title-product-top">Cửa hàng</h1>
            </div>
        <div class="product-main container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="category">
                        <h3 class="title-category">Danh mục sản phẩm</h3>
                        <ul class="list-category">
                            <li class="item-list-category">
                                <a href="" class="link-item">Trang phục nam</a>
                                <i class="fas fa-caret-down dropdown"></i>
                                <ul class="sub-list-item-category">
                                    ${await category.render()}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-9 col-md-12">
                    <div class="row product-list">
                     ${await categoryProduct.render(data)}
                    </div>

                </div>
            </div>
        </div>
    </div>
        `
    }
    , afterRender() {
        var dropdown = document.querySelectorAll(".dropdown");
        var i;

        for (i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function () {
                var dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                } else {
                    dropdownContent.style.display = "block";
                }
            });
        }
    }

}

export default product;