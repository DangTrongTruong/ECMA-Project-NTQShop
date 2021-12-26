import { getUsers , removeUser } from "../../api/protocol";
import { removeAuthen } from "../../untils/until";
import navbarAdmin from "./navbarAdmin";

const usersPage = {
    async render() {
        try {
            
            const { data } = await getUsers();
           
             const htmls = data.map(item => {
                 return (
                     `
                     <tr>
                         <td>${item.id}</td>
                         <td>${item.user}</td>
                         <td>${item.email}</td>
                         <td><button class="btn btn-danger btn-remove" data-id="${item.id}" >Delete</button></td>
                         
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
                   
                   
                   <div class="table-responsive">
                   <table class="table">
                           <thead class=" text-primary">
                                  <th>ID</th>
                                  <th>NAME</th>
                                  <th>email</th>
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
       
    },afterRender(){
        handledelete()
        function handledelete(){
           const btnRemove = document.querySelectorAll('.btn-remove');
           for(let btn of btnRemove){
            const id = btn.dataset.id;
            btn.addEventListener('click', async () => {
                const cf = confirm("Bạn có chắc chắn muốn xoá hay không")
                if(cf){
                    
                    await removeUser(id)
                    await reRender(usersPage,'#admin')
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
export default usersPage;