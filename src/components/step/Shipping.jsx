import { useState, useContext } from 'react'
import { stepContext } from "./stepContext"
export default function Shipping(){
  const step = useContext(stepContext)
  const [chooseRadio1, setChooseRadio1] = useState(true)
  let [radioClass1, radioClass2] = ['delivery selected', 'delivery']
  if (!chooseRadio1){
    radioClass1 = 'delivery'
    radioClass2 = 'delivery selected'
  }
  let shippingclass = "htmlForm"
  if (step !== 2) {
    shippingclass = 'd-none'
  }
  return (
    <div className={shippingclass}>
      <form className="col col-12" data-phase="shipping">
        <h3 className="htmlForm-title">運送方式</h3>
        <section className="htmlForm-body col col-12">
          <div className={radioClass1} onClick={()=> setChooseRadio1(true)}>
            <div className="radio-box-border">
              <label className="radio-group col col-12" data-price="0">          </label>
              {chooseRadio1 
              ? <input id="shipping-standard" type="radio" name="shipping" checked/> 
              : <input id="shipping-standard" type="radio" name="shipping" />} 
            </div>
            <div className="radio-info">          
              <div className="col col-12 shipping-text">
                <label htmlFor="shipping-standard">
                  <div className="text">標準運送</div>
                  <div className="price">免費</div>
                </label>
              </div>
              <div className="period col col-12">約 3~7 個工作天</div>
            </div>
          </div>

          <div className={radioClass2} onClick={() => setChooseRadio1(false)}>
            <div className="radio-box-border">
              <label className="radio-group col col-12" data-price="0500">          </label>
              {!chooseRadio1 
              ? <input id="shipping-dhl" type="radio" name="shipping" checked /> 
              : <input id="shipping-dhl" type="radio" name="shipping" />}
            </div>
            <div className="radio-info">
              <div className="col col-12 shipping-text">
                <label htmlFor="shipping-dhl">
                  <div className="text">DHL 貨運</div>
                  <div className="price">$500</div>
                </label>
              </div>
              <div className="period col col-12">48 小時內送達</div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}

// const radioContainer1 = document.querySelector('#delivery1')
// const radioContainer2 = document.querySelector('#delivery2')
// radioContainer1.addEventListener('click', e=>{
//   const radio1 = document.querySelector("#shipping-standard")
//   console.log(radio1)
//   radio1.checked = true
//   radioContainer1.classList.add('selected')
//   radioContainer2.classList.remove('selected')
// })
// radioContainer2.addEventListener('click', e => {
//   const radio2 = document.querySelector("#shipping-dhl")
//   console.log(radio2)
//   radio2.checked = true
//   radioContainer2.classList.add('selected')
//   radioContainer1.classList.remove('selected')
// })
