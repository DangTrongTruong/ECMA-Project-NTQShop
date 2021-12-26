const category={
   async render(){
        const response = await fetch("http://localhost:3000/category");
        const datas = await response.json();
        
        const items =  datas.map( item => 
            {
             return    `<li class="item-sublist sup-item">
                            <a class="link-sup-item" href="/#/product/${item.id}">${item.name}</a>
                        </li>`
            }
            
            )
       
        return items.join("")
    }
}

export default category