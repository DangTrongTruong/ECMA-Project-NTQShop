const blogPageHome ={
    render(){
        return `
        <div class="wrap-blog">
    <div class="container">
        <h3 class="title-blog">Tin tức - sự kiện</h3>
        <div class="row blog-content">
            <div class="col-lg-4 col-md-12 blog-item">
                <img src="./src/public/image/blog-item.jpeg" alt="" class="image-blog-item">
                <div class="main-blog-item">
                    <h5 class="title-blog-item">15 năm một chặng đường thành công</h5>
                    <p class="info-blog-item">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos consectetur vitae illo reiciendis ullam dicta nesciunt inventore non voluptatum delectus odit totam, aspernatur eos natus modi placeat consequatur doloremque accusantium?</p>
                    <a href="" class="link-blog-item">Xem thêm</a>
                </div>
            </div>
            <div class="col-lg-4 col-md-12 blog-item">
                    <img src="./src/public/image/blog-item-2.jpeg" alt="" class="image-blog-item">
                   <div class="main-blog-item">
                        <h5 class="title-blog-item">Những bước đột phá trong sản phẩm 2020</h5>
                        <p class="info-blog-item">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos consectetur vitae illo reiciendis ullam dicta nesciunt inventore non voluptatum delectus odit totam, aspernatur eos natus modi placeat consequatur doloremque accusantium?</p>
                        <a href="" class="link-blog-item">Xem thêm</a>
                   </div>
            </div>
            <div class="col-lg-4 col-md-12 blog-item">
                    <img src="./src/public/image/blog-item-3.jpeg" alt="" class="image-blog-item">
                    <div class="main-blog-item">
                        <h5 class="title-blog-item">dấu ấn 15 thành công,những khát khao thành hiện thực</h5>
                        <p class="info-blog-item">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos consectetur vitae illo reiciendis ullam dicta nesciunt inventore non voluptatum delectus odit totam, aspernatur eos natus modi placeat consequatur doloremque accusantium?</p>
                        <a href="" class="link-blog-item">Xem thêm</a>
                    </div>
            </div>
        </div>
    </div>
</div>
<div style=" background-image:url(./src/public/image/statis.jpeg);" class="wrap-statis">
    <div class="container  statis-content">
       <div class="row">
        <div class="col-lg-4 col-md-12 statis-item">
            <p class="count-item">2</p>
            <p class="info-statis-item">Cơ sở tổng thành phố Hà Nội</p>
        </div>
        <div class="col-lg-4 col-md-12 statis-item">
            <p class="count-item">6</p>
            <p class="info-statis-item">Triệu sản phẩm tiêu thụ 2019</p>
        </div>
        <div class="col-lg-4 col-md-12 statis-item">
            <p class="count-item">6</p>
            <p class="info-statis-item">Chi nhánh con các tỉnh thành</p>
        </div>
       </div>
    </div>
</div>
        `
    }
}

export default blogPageHome;