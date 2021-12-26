function start(){
       toggleNavBar();
        toggleSublist();
        toggleListCart();
}

function toggleNavBar(){
    var btnNavBar = document.querySelector('.mobile-navbar-btn');
    var overley=document.querySelector('.overlay');
    var headerNavbar=document.querySelector('.header-navbar');
    var btnClose=document.querySelector('.btn-close');
    btnNavBar.onclick=function(){
        overley.style.display='block';
        headerNavbar.style.display='block';
    }
    btnClose.onclick=function(){
        overley.style.display='none';
        headerNavbar.style.display='none';
    }
}


function toggleSublist(){
    var dropdown = document.getElementsByClassName("btn-dropdown");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
}

function toggleListCart(){
    var mobileNavbarBtnCart = document.querySelector('.btn-cart-list-product');
    var overley=document.querySelector('.overlay');
    var cartListProduct=document.querySelector('.cart-list-product');
    var btnCloseCart=document.querySelector('.btn-close-cart');
    mobileNavbarBtnCart.onclick=function(){
        overley.style.display='block';
        cartListProduct.style.display='block';
    }
    btnCloseCart.onclick=function(){
        overley.style.display='none';
        cartListProduct.style.display='none';
    }
}


export default start;


