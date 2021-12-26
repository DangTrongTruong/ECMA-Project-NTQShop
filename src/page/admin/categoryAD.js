import { addCate,getAllCate,removeCate } from "../../api/protocol"
import { removeAuthen, reRender } from "../../untils/until";
import navbarAdmin from "./navbarAdmin";


const categoryAD = {

    async render() {
        try {
            
            const { data } = await getAllCate();
           
             const htmls = data.map(item => {
                 return (
                     `
                     <tr>
                         <td>${item.id}</td>
                         <td>${item.name}</td>
                         <td><button class="btn btn-danger btn-remove" data-id="${item.id}" >Delete</button></td>
                         <td><button class="btn btn-success"><a style="color:white" href="/#/updateCate/${item.id}">Update</a></button></td>
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
                   
                   <div class="table-responsive">
                   <table class="table">
                           <thead class=" text-primary">
                                  <th>ID</th>
                                  <th>NAME</th>
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
        createCategory()
       function createCategory(){
        const formAddProduct = document.querySelector("#formAddProduct");
        formAddProduct.addEventListener('submit',async (e) =>{
            e.preventDefault();
            const data = {
                name:document.querySelector('#categoryName').value
            }
              const result = await addCate(data)
              if(result.status === 201){
                  console.log('ban da them thanh cong')
                reRender(categoryAD,'#admin')
              }
          
        })
       }

         handledelete()
         function handledelete(){
            const btnRemove = document.querySelectorAll('.btn-remove');
            for(let btn of btnRemove){
             const id = btn.dataset.id;
             btn.addEventListener('click', async () => {
                 const cf = confirm("Bạn có chắc chắn muốn xoá hay không")
                 if(cf){
                     
                     await removeCate(id)
                     await reRender(categoryAD,'#admin')
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

export default categoryAD;