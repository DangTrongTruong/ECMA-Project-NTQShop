import slider from "../components/page-component/sliderPageHome"
import listProductPageHome from "../components/page-component/listProductPageHome"
import historyPageHome from "../components/page-component/historyPageHome"
import blogPageHome from "../components/page-component/blogPageHome"
import { getAllSlider } from "../api/protocol"


const homePage = {
   async render(){
     const {data} = await getAllSlider()
     const htmls = data.map( item =>{
       return` 
       <div class="swiper-slide">
       <img style="width:100%;height:650px;object-fit: cover;" src="${item.src}" alt="">
       </div>
       `
     })
       console.log(slider.render())
        return `
        <div class="wrap-slider">

        <div class="swiper">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            ${htmls.join('')}
            
          </div>
          <!-- If we need pagination -->
          <div class="swiper-pagination"></div>

          <!-- If we need navigation buttons -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>

          <!-- If we need scrollbar -->
          <div class="swiper-scrollbar"></div>
        </div>

       
    </div>
                
                  ${await listProductPageHome.render()}
                  ${historyPageHome.render()}
                  ${blogPageHome.render()}
                `
        
        
    }
    ,afterRender() {
        
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:20,
            responsiveClass:true,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:2,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:true,
                    loop:false
                }
            }
        })

        const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          
            // And if we need scrollbar
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          });

    }

}

export default homePage;