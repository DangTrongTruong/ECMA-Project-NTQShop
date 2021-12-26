import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "@firebase/storage";
import { addCate,getAllCate,getAllSlider,removeCate, removeSlider,addSlider } from "../../api/protocol"
import { removeAuthen, reRender } from "../../untils/until";
import navbarAdmin from "./navbarAdmin";
import "./firebase"

const sliderAD = {

    async render() {
        try {
            
            const { data } = await getAllSlider();
           
             const htmls = data.map(item => {
                 return (
                     `
                     <tr>
                         <td>${item.id}</td>
                         <td><img style="width:30%;object-fit: cover;" src="${item.src}" alt=""></td>
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
                   <form class="form-floating mb-3" id="formAddSlider">
                   <input class="form-control" type="file" id="slider">
                   <label for="categoryName">SLIDER FILE</label>
                   <button type="submit" class="btn btn-primary">Thêm slider</button>
                   </form>
                   
                   <div class="table-responsive">
                   <table class="table">
                           <thead class=" text-primary">
                                  <th>ID</th>
                                  <th>SRC</th>
                                  <th>DELETE</th>
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
        const formAddSlider = document.querySelector('#formAddSlider');
        formAddSlider.addEventListener('submit', function (e) {
            e.preventDefault();
           
            const productImage = document.querySelector('#slider').files[0];
           
            const storage = getStorage();
            const storageRef = ref(storage, `images/${productImage.name}`);
            const uploadTask = uploadBytesResumable(storageRef, productImage);
            uploadTask.on('state_changed',
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        
                        const data = {
                            src: downloadURL,
                        }
                        const result = addSlider(data)
                        result.then( () =>{
                            reRender(sliderAD,"#admin");
                            
                        })
                        
                            });
                        }
            );
            
            
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
                     
                     await removeSlider(id)
                     await reRender(sliderAD,'#admin')
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

export default sliderAD;