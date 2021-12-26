import { getAllOrder, removeOrder } from "../../api/protocol";
import { removeAuthen, reRender } from "../../untils/until";
import navbarAdmin from "./navbarAdmin";

const orderAdminPage = {
    async render() {
        try {
            
            const { data } = await getAllOrder();
            
             const htmls = data.map(item => {
                 
                 return (
                     `
                     <tr>
                         <td>${item.id}</td>
                         <td>${item.lastName} ${item.firstName}</td>
                         <td>${item.phoneNumber}</td>
                         <td>${item.address}</td>
                         <td>${item.email}</td>
                         <td>${item.timeOrder}</td>
                         <td>${item.product.map( item => ` - ${item.name} x ${item.quantity} <br>`).join('')}</td>
                         <td>${item.sumpPrice} đ</td>
                         <td><button class="btn btn-danger btn-remove" data-id="${item.id}" >Delete</button></td>
                         <td><button class="btn btn-success"><a style="color:white" href="">Update</a></button></td>
                      </tr>
                     `
                 )
             }
             )
     
             return /*html*/ `
             
             <div class="wrapper ">
               ${await navbarAdmin.render()}
                 <!-- End Navbar -->
                 <div class="content">
                   <div class="container-fluid" id="showContent">
                   <form class="form-floating mb-3" id="formAddProduct">
                   <input type="text" class="form-control" id="categoryName" placeholder="category">
                   <label for="categoryName">CATEGORY NAME</label>
                   <button type="submit" class="btn btn-primary">Thêm loại sản phẩm</button>
                   </form>
                   
                   <div style="overflow: auto;" class="table-responsive">
                   <table class="table">
                           <thead class=" text-primary">
                                  <th>ID-ORDER</th>
                                  <th>NAME</th>
                                  <th>PHONE-NUMBER</th>
                                  <th>ADDRESS</th>
                                  <th>EMAIL</th>
                                  <th>TIME-ORDER</th>
                                  <th>PRODUCT-ORDER</th>
                                  <th>TOTAL-MONEY</th>
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
        } catch (error) {
            console.log(error);
        }
       
    },
    afterRender(){
        

         handledelete()
         function handledelete(){
           
            const btnRemove = document.querySelectorAll('.btn-remove');
            for(let btn of btnRemove){
             const id = btn.dataset.id;
             btn.addEventListener('click', async () => {
                 
                 const cf = confirm("Bạn có chắc chắn muốn xoá hay không")
                 if(cf){
                     
                     await removeOrder(id)
                     await reRender(orderAdminPage,'#admin')
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
export default orderAdminPage;