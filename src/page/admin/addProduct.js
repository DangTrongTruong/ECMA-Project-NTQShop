
import { add, getAllCate } from "../../api/protocol";
import navbarAdmin from "./navbarAdmin";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "./firebase"
import productAD from "./productAD";
import { reRender } from "../../untils/until";
const addProduct = {
    async render() {
        const { data } = await getAllCate()
        const htmls = data.map(item => {
            return (
                `
                <option value="${item.id}">${item.name}</option>
                `
            )
        })
        return (
            /*html*/`
            <div class="wrapper ">
            ${await navbarAdmin.render()}
              <!-- End Navbar -->
              <div class="content">
                <div class="container-fluid" id="showContent">
                
                <form id="productAddForm">
                <div class="mb-3">
                    <select id="categoryID" class="form-select" aria-label="Default select example">
                        <option selected>Loại sản phẩm</option>
                        ${htmls.join('')}
                    </select>
                    <label for="nameProduct" class="form-label">Tên sản phẩm</label>
                    <input type="text" class="form-control" id="nameProduct" placeholder="Tên sản phẩm">
                    <label for="image" class="form-label">Ảnh sản phẩm</label>
                    <input class="form-control" type="file" id="image">
                    <label for="price" class="form-label">Giá sản phẩm</label>
                    <input class="form-control" type="number" id="price" min="0">
                    <label for="design" class="form-label">Thiết kế sản phẩm</label>
                    <input type="text" class="form-control" id="design" placeholder="Thiết kế sản phẩm">
                    <label for="material" class="form-label">Chất liệu sản phẩm</label>
                    <input type="text" class="form-control" id="material" placeholder="Chất liệu sản phẩm">
                    <label for="formDesign" class="form-label">Form sản phẩm</label>
                    <input type="text" class="form-control" id="formDesign" placeholder="Form sản phẩm">
                </div>
          
          
                     <button type="submit" class="btn btn-primary">Thêm sản phẩm</button>
                    </form>
        
                </div>
              </div>
          </div>

         
            `
        )
    },
    afterRender() {
        const productAddForm = document.querySelector('#productAddForm');
        productAddForm.addEventListener('submit', function (e) {
            e.preventDefault();
           
            const productImage = document.querySelector('#image').files[0];
           
            const storage = getStorage();
            const storageRef = ref(storage, `images/${productImage.name}`);
            const uploadTask = uploadBytesResumable(storageRef, productImage);
            uploadTask.on('state_changed',
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        
                        const data = {
                            categoryID: document.querySelector('#categoryID').value,
                            name: document.querySelector('#nameProduct').value,
                            image: downloadURL,
                            price: document.querySelector('#price').value,
                            design: document.querySelector('#design').value,
                            material: document.querySelector('#material').value,
                            form: document.querySelector('#formDesign').value
                        }
                        const result = add(data)
                        result.then( () =>{
                            reRender(productAD,"#admin");
                            window.location.hash = "/productAD"
                        })
                        
                            });
                        }
            );
            
            
        })
    }
}
export default addProduct;