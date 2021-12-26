import { getCate, updateCate } from "../../api/protocol";
import { reRender } from "../../untils/until";
import categoryAD from "./categoryAD";
import navbarAdmin from "./navbarAdmin";

const UpdateCate = {
    async render(idCate){
        const id = parseInt(idCate.id);
        const { data } = await getCate(id);
       
        return (
            `
            <div class="wrapper ">
             ${navbarAdmin.render()}
              <!-- End Navbar -->
              <div class="content">
                <div class="container-fluid" id="showContent">
                
                <form data-id="${data.id}" id="updateCateForm">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"> New Name Category</label>
                    <input type="text" class="form-control" id="nameCateValue" value=" ${data.name}" >
                </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        
                </div>
              </div>
          </div>
        
           
            `
        )
    }
    ,afterRender(){
       
        const formUpdate = document.querySelector('#updateCateForm');
        formUpdate.addEventListener('submit',async (e) => {
            const data = {
              name:document.querySelector('#nameCateValue').value
            }
            const id = formUpdate.dataset.id
            
            await updateCate(id,data);
            await reRender(categoryAD,"#admin")
        })

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
export default UpdateCate;