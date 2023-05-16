const renderProducts = function(){
    for(let i=0; i< products.length; i++){
       catalogDiv.innerHTML +=`
       <div class="product">
       <h2>${products[i].name}<h2/>
       <img src="${products[i].image}"/>
       <p>${products[i].price}</p>
       <button onclick="buy(${i})"
        ${products[i].available ?'' :'disabled' }>BUY</button>
       </div> 
       
       `
    }
}
const buy = function(index){
    cart.push(index)
    renderCart()
} 
 const renderCart = function(){
     cartDiv.innerHTML = `
     
      ${cart.length ? 'items :' : 'empty'}  `
  
 }