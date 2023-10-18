import Swal from 'sweetalert2'
export const ShirtsCollection = ({ shirts }) => {

  function addToCart (e){ 
    const classList = [...e.target.classList]
    const products = JSON.parse(localStorage.getItem('Products'))
    let target = ''
    let newProducts = []

    if (classList.includes('favorite-product')) { //商品右上角的愛心和圓圈重疊，target設定在圓圈，要調整選取目標
      target = e.target
    } else {
      target = e.target.parentElement
    }

    if(products){
      const idList = products.map(product => product.id)
      if (idList.includes(target.dataset.id)){ //已加入購物車不要重複
        Swal.fire({
          position: 'center',
          icon: 'info',
          title: '購物車有重複項目',
          showConfirmButton: false,
          timer: 800
        })
        return
      }
      newProducts = [...products, 
        { image: target.dataset.url, price: target.dataset.price, id: target.dataset.id, quantity: 1 }]  
    } else {
      newProducts = [{ image: target.dataset.url, price: target.dataset.price, id: target.dataset.id, quantity: 1 }]
    }
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '成功加入購物車',
      showConfirmButton: false,
      timer: 800
    })
    localStorage.setItem('Products',JSON.stringify(newProducts))
    
  }
  const listItems = shirts.map(shirt => {
    const model = Math.floor(Math.random() * 4 + 1).toString()
    const price = Math.floor(Math.random() * 10 + 20)
    const id = Math.random().toString()
    return (
      <div key={id} class="tshirt">
        <div class="favorite-product" data-url={shirt} data-price={price} data-id={id} onClick={addToCart}><svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 31 27" >
          <path d="M21.8,2.55c1.14,0,2.21,0.28,3.2,0.82 c2.12,1.18,3.44,3.41,3.44,5.82c0,0.69-0.11,1.38-0.33,2.04l-0.02,0.07l-0.02,0.07c-0.26,1.19-1.09,2.61-2.45,4.22 c-1.17,1.38-2.7,2.86-4.57,4.42c-2.23,1.86-4.41,3.37-5.55,4.13c-1.14-0.76-3.3-2.26-5.53-4.11c-1.88-1.56-3.42-3.05-4.59-4.42 c-1.37-1.61-2.2-3.04-2.46-4.23L2.9,11.31l-0.02-0.07c-0.22-0.66-0.33-1.35-0.33-2.04c0-2.42,1.32-4.65,3.44-5.82 c1-0.55,2.07-0.83,3.2-0.83c1.98,0,3.85,0.88,5.12,2.41l1.19,1.44l1.19-1.44C17.96,3.42,19.82,2.55,21.8,2.55" fill="grey"></path>
        </svg>

        </div>
        <div class={"tshirt-img model"+ model}>
          <img src={shirt} alt="shirt" />
        </div>
        <div class="tshirt-info">
          <span class="tshirt-info-title">T-shirt Stockholm Base Grey Melange</span>
        </div>
        <div class="tfhirt-info-price">
          <span class="tshirt-price">{price}&nbsp;USD</span>
        </div>
      </div>
    )
  })
  return listItems
}