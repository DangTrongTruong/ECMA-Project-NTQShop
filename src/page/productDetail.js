import { addComment, get, getAllComment , getComment } from "../api/protocol";
import header from "../components/layout/header";
import infoDetailProduct from "../components/page-component/infoDetailProduct"
import similarProduct from "../components/page-component/similarProduct"
import { addToCart } from "../untils/cart";
import { reRender } from "../untils/until";
const productDetail = {
   async render(id){
      
        return `
        <div class="container wrap-detail">
          ${await infoDetailProduct.render(id)}
          ${await similarProduct.render(id)}
        </div>
      
    `
  
    },afterRender(){
      addCart()
      
      function addCart(){
        const btnAddToCart = document.querySelector('#btnAddToCart');
      
      const idProduct = btnAddToCart.dataset.id;
      btnAddToCart.addEventListener('click', async function() {
       
        let {data} = await get(idProduct);
        const newProduct ={
          ...data,
          quantity:parseInt(document.querySelector('#quantityValue').value)
        }
        addToCart(newProduct)
        reRender(header,'#header');
      })
      }

      comment()
      
      function comment(){
        const formComment = document.querySelector('#formComment');
        const idProduct = formComment.dataset.id;
        const nameProdcut = formComment.getAttribute('nameproduct');
        formComment.addEventListener('submit',async function(e){
          e.preventDefault();
          const data ={
            name:document.querySelector('#fullname').value,
            email:document.querySelector('#email').value,
            content:document.querySelector('#contentComent').value.trim(),
            nameProduct:nameProdcut,
            idProduct:idProduct,
          }
          
           await addComment(data)
           await showComment()
           await reRender(productDetail,'#root')
        })
      }

     
     async function showComment(){
          const showComment = document.querySelector('#showComment');
          const id = showComment.dataset.id;
          console.log(id)
          const {data} = await getAllComment()
          console.log(data)
          const dataComment = data.filter( item => parseInt(item.idProduct) === parseInt(id))
          console.log(dataComment)
          const htmls = dataComment.map( item =>{
            return (
              `
              <tr>
                  <th scope="row">${item.name}</th>
                  <td>${item.content}</td>
               </tr>
              `
            )
          })
          document.querySelector('#showComment').innerHTML = htmls.join('')
      }

    }
}

export default productDetail;