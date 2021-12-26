import { get, getAllCate, update } from "../../api/protocol";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "./firebase"
import navbarAdmin from "./navbarAdmin";

const updateProduct = {
    async render(idProduct) {
        const id = parseInt(idProduct.id);
        const {data:valueProduct} = await get(id);
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
                
                <form id="productUpdateForm" data-id="${id}">
                <div class="mb-3">
                    <select id="categoryID" class="form-select" aria-label="Default select example">
                        <option selected>Loại sản phẩm</option>
                        ${htmls.join('')}
                    </select>
                    <label for="nameProduct" class="form-label">Tên sản phẩm</label>
                    <input type="text" class="form-control" id="nameUpdate" value="${valueProduct.name}">
                    <label for="image" class="form-label">Ảnh sản phẩm</label>
                    <input class="form-control" type="file" id="imageUpdate" value="${valueProduct.image}">
                    <label for="price" class="form-label">Giá sản phẩm</label>
                    <input class="form-control" type="number" id="priceUpdate" min="0" value="${valueProduct.price}">
                    <label for="design" class="form-label">Thiết kế sản phẩm</label>
                    <input type="text" class="form-control" id="designUpdate" value="${valueProduct.design}">
                    <label for="material" class="form-label">Chất liệu sản phẩm</label>
                    <input type="text" class="form-control" id="materialUpdate" value="${valueProduct.material}">
                    <label for="formDesign" class="form-label">Form sản phẩm</label>
                    <input type="text" class="form-control" id="formDesignUpdate" value="${valueProduct.form}">
                </div>
          
          
                     <button type="submit" class="btn btn-primary">Update sản phẩm</button>
                    </form>
        
                </div>
              </div>
          </div>

         
            `
        )
    },
    afterRender() {
        const productUpdateForm = document.querySelector('#productUpdateForm');
        productUpdateForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const id = productUpdateForm.dataset.id
            const productImage = document.querySelector('#imageUpdate').files[0];
            const storage = getStorage();
            const storageRef = ref(storage, `images/${productImage.name}`);
            const uploadTask = uploadBytesResumable(storageRef, productImage);
            uploadTask.on('state_changed',
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        
                        const data = {
                            categoryID: document.querySelector('#categoryID').value,
                            name: document.querySelector('#nameUpdate').value,
                            image: downloadURL,
                            price: document.querySelector('#priceUpdate').value,
                            design: document.querySelector('#designUpdate').value,
                            material: document.querySelector('#materialUpdate').value,
                            form: document.querySelector('#formDesignUpdate').value
                        }
                        
                            const result = update(id,data);
                            result.then( res =>{
                                if(res.status === 200){
                                    window.location.hash = '/admin/product'
                                }
                                else{
                                    window.alert('update san pham that bai')
                                }
                            })
                        
                            });
                        }
            );
            
            
        })
    }
}

export default updateProduct;