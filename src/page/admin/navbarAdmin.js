import { removeAuthen } from "../../untils/until";

const navbarAdmin = {
   async render (){
        return (
            `
            <div class="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
                 <!--
                   Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"
           
                   Tip 2: you can also add an image using data-image tag
               -->
                 <div class="logo"><a href="http://www.creative-tim.com" class="simple-text logo-normal">
                     Creative Tim
                   </a></div>
                 <div class="sidebar-wrapper">
                   <ul class="nav">
                     <li class="nav-item active  ">
                       <a class="nav-link" href="">
                         <i class="material-icons">dashboard</i>
                         <p>Thống kê</p>
                       </a>
                     </li>
                     <li class="nav-item ">
                       <a class="nav-link" href="/#/admin/product">
                         <i class="material-icons">content_paste</i>
                         <p>Sản phẩm</p>
                       </a>
                     </li>
                     <li class="nav-item ">
                       <a class="nav-link" href="/#/admin/category">
                         <i class="material-icons">content_paste</i>
                         <p>Loại Sản phẩm</p>
                       </a>
                     </li>
                     <li class="nav-item ">
                       <a class="nav-link" href="/#/admin/users">
                         <i class="material-icons">person</i>
                         <p>User</p>
                       </a>
                     </li>
                     <li class="nav-item ">
                       <a class="nav-link" href="/#/admin/order">
                         <i class="material-icons">content_paste</i>
                         <p>cart</p>
                       </a>
                     </li>
                     <li class="nav-item ">
                       <a class="nav-link" href="/#/admin/comment">
                         <i class="material-icons">content_paste</i>
                         <p>Comment</p>
                       </a>
                     </li>
                     <li class="nav-item ">
                       <a class="nav-link" href="/#/admin/slider">
                         <i class="material-icons">content_paste</i>
                         <p>Slider</p>
                       </a>
                     </li>
                   </ul>
                 </div>
               </div>
               <div class="main-panel">
                 <!-- Navbar -->
                 <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                   <div class="container-fluid">
                     <div class="navbar-wrapper">
                       <a class="navbar-brand" href="javascript:;">Dashboard</a>
                     </div>
                     <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                       <span class="sr-only">Toggle navigation</span>
                       <span class="navbar-toggler-icon icon-bar"></span>
                       <span class="navbar-toggler-icon icon-bar"></span>
                       <span class="navbar-toggler-icon icon-bar"></span>
                     </button>
                     <div class="collapse navbar-collapse justify-content-end">
                       <form class="navbar-form">
                         <div class="input-group no-border">
                           <input type="text" value="" class="form-control" placeholder="Search...">
                           <button type="submit" class="btn btn-white btn-round btn-just-icon">
                             <i class="material-icons">search</i>
                             <div class="ripple-container"></div>
                           </button>
                         </div>
                       </form>
                       <ul class="navbar-nav">
                         <li class="nav-item">
                           <a class="nav-link" href="javascript:;">
                             <i class="material-icons">dashboard</i>
                             <p class="d-lg-none d-md-block">
                               Stats
                             </p>
                           </a>
                         </li>
                         <li class="nav-item dropdown">
                         <button id="btnLogout"  class="dropdown-item" >Log out</button>
                         
                         </li>
                        
                       </ul>
                     </div>
                   </div>
                 </nav>
            `
        )
    },
    afterRender(){
      logout()
      function logout() {
        const btnLogout = document.querySelector('#btnLogout');
      btnLogout.onclick = function() {
        removeAuthen(function(){
        console.log('Đăng xuất thành công');
        window.location.hash = '/'
        })
      }
      }
    }
   
}
export default navbarAdmin;