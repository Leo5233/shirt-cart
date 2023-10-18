// import CartItems from '../assets/Cart'
import { cartContext } from '../assets/CartContext'
import { useState, useContext } from 'react'
import { sumContext } from "./step/formContext"

export default function Buy(){  
  const cardItems = JSON.parse(localStorage.getItem('Products'))
  const [nowCartItems, setNowCartItems] = useState(cardItems)
  //click +/- button & change the product quantity
  return (
    <>
      <cartContext.Provider value={nowCartItems}>
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <section className="product-list col col-12" data-total-price="0">
        {/*generate all products from Items*/}
        
          <Products />
       
      </section>

      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
          <div className="delivery-price">免費</div>
      </section>
      <section className="cart-info col col-12">
        <div className="text">小計</div>
          <div className="total">$<TotalSum /></div>
      </section>
      </section>
      </cartContext.Provider>
      </>
  )

  function Products() {
    //generate all products from Items
    const Items = JSON.parse(localStorage.getItem('Products'))
    let listItems = []
    if (Items){
      listItems = Items.map(item => {
        return (
          <div key={item.id} className="product-container col col-12" data-count={item.quantity} data-price={item.price}>
            <div className="product-img">
              <img className="img-container" src={item.image} alt="product" />
            </div>
            <div className="product-name">grey blue jeans</div>
            <div className="product-control-container">
              <div className="product-control">
                <img onClick={handleClickMinus} data-id={item.id} className="minus-btn" src="https://raw.githubusercontent.com/Leo5233/source/master/shirt-cart/minus.png" alt="minus" />
                <span className="product-count">{item.quantity}</span>
                <img onClick={handleClickPlus} data-id={item.id} className="plus-btn" src="https://raw.githubusercontent.com/Leo5233/source/master/shirt-cart/plus.png" alt="plus" />

              </div>
            </div>
            <div className="price">${item.price}</div>
          </div>
        )
      })
    }
    
    return (
      <>
        {listItems}
      </>
    )
  }
  
  //change cart items quantity when clicking +
  function handleClickPlus(e) {
    const id = e.target.dataset.id
    const tempCart = nowCartItems.map(item => {
      if (item.id === id && e.target.className === 'plus-btn') {
          return { ...item, quantity: item.quantity + 1 }
      } else {
        return item
      }
    })
    setNowCartItems(tempCart)
    localStorage.setItem('Products', JSON.stringify(tempCart))
  }
  //change cart items quantity when clicking -
  function handleClickMinus(e) {
    const id = e.target.dataset.id
    const tempCart = nowCartItems.map(item => {
      if (item.id === id) {
       if (e.target.className === 'minus-btn' && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 }
        } else {
          return item
        }
      } else {
        return item
      }
    })
    setNowCartItems(tempCart)
    localStorage.setItem('Products', JSON.stringify(tempCart))
  }

  //count total cost of all products
  function TotalSum() {
    let total = 0
    if(nowCartItems){
      nowCartItems.forEach((item)=>{
        total += Number(item.price) * item.quantity
      })
      // total = nowCartItems.reduce(
      //   function (nextItem, thisItem) {
      //      console.log( nextItem.price  )
      //     return Number(nextItem.price) * nextItem.quantity + Number(thisItem.price) * thisItem.quantity
      //   }
      // )
    }
    return total
  }
}