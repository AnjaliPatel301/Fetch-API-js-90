const searchInput=document.querySelector('#search')

async function fetchData() {
    const record= await fetch('https://dummyjson.com/products');

    const data=await record.json();
    
     console.log(data.products.map((value)=>{
        return value.category;
    })
);
    displayproduct(data.products)



searchInput.addEventListener('input', ()=>{
      const filterInput=data.products.filter((item)=>{

      return item.category.
      toLowerCase().
      includes(searchInput.value.toLowerCase())
      });

      displayproduct(filterInput)
})
}

function displayproduct(products){
    let Html=""
    products.forEach((item)=>{
        
         Html+=`<div class="card">
         <img src=${item.images[0]} alt="">
         <h3>${item.title}</h3>
         <h4>${item.price}</h4>
         <p>${item.description}</p>
         </div>`

    })

    document.querySelector('.container-hero').innerHTML=Html;

}


fetchData()


