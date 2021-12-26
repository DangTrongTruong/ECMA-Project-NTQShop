import { remove } from "../../api/protocol";
import { removeAuthen, reRender } from "../../untils/until";
import navbarAdmin from "./navbarAdmin";

const productAD ={

    async render(){
         const response = await fetch('http://localhost:3000/products');
         const datas = await response.json();
         const htmls = datas.map( datas => {
             return (
            `
                 <tr>
                     <td>${datas.id}</td>
                     <td>${datas.name}</td>
                     <td> <img style="width:70px;" src="${datas.image}" alt=""></td>
                     <td>${datas.price}</td>
                     <td>${datas.design}</td>
                     <td>${datas.material}</td>
                     <td>${datas.form}</td>
                     <td><button class="btn btn-danger btn-remove" data-id ="${datas.id}">Delete</button></td>
                     <td><button class="btn btn-success" ><a style="color:white" href="/#/update/product/${datas.id}">Update</a></button></td>
                  </tr>
                 `
             )
         }
          )
 
         return `
         <div class="wrapper ">
         ${await navbarAdmin.render()}
           <!-- End Navbar -->
           <div class="content">
             <div class="container-fluid" id="showContent">
             
             <div class="table-responsive">
             <button class="btn btn-primary"><a style="color: white;" href="/#/add/product">Create Product</a></button>
             <table class="table">
                     <thead class=" text-primary">
                            <th>ID</th>
                            <th>NAME</th>
                            <th>IMAGE</th>
                            <th>PRICE</th>
                            <th>DEGIGN</th>
                            <th>MATERIAL</th>
                            <th>FORM</th>
                            <th>DELETE</th>
                            <th>UPDATE</th>
                           
                     </thead>
                     <tbody>
                          ${htmls.join('')}
                     </tbody>
             </table>
             </div>
     
             </div>
           </div>
       </div>
     
         
         `
     },
     afterRender(){
      handleDelete()
        function handleDelete(){
          const btnRemove = document.querySelectorAll('.btn-remove');
       
        for(let btn of btnRemove){
          const id = btn.dataset.id
         
          btn.addEventListener('click',async (e) =>{
            if(window.confirm('ban co chac chan muon xoa khong ?')){
              await remove(id)
              await reRender(productAD,"#admin")
            }
          })
        }

        }
        
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
 
 export default productAD;