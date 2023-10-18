import { useContext } from 'react'
import { stepContext } from "./stepContext"
import { cardContext } from "./formContext"
export default function CreditCard({totalSum}){
  const step = useContext(stepContext)
  let creditCardclass = 'htmlForm'
  if (step !== 3){
    creditCardclass = 'd-none'
  }
  const {cardData, setCardData} = useContext(cardContext)
  return (
    <div className={creditCardclass}>
      <form id='creditCardForm' onSubmit={handleSubmit} className="col col-12" data-phase="credit-card">
        <h3 className="htmlForm-title">付款資訊</h3>
        <section className="htmlForm-body col col-12">
          <div className="col col-12 input-group-row">
            <div className="input-group card-name input-w-lg-4 input-w-sm-full">
              <div className="input-label">持卡人姓名</div>
              <input type="text" name='name' placeholder="John Doe" id="card-name" />
            </div>
          </div>

          <div className="col col-12 input-group-row">
            <div className="input-group card-number input-w-lg-4 input-w-sm-full">
              <div className="input-label">卡號</div>
              <input type="text" name='cardNumber' placeholder="1111 2222 3333 4444" id="card-number" />
            </div>
          </div>

          <div className="col col-12 input-group-row">
            <div className="input-group expire input-w-lg-3 input-w-sm-s3">
              <div className="input-label">有效期限</div>
              <input type="text" name='expireDate' placeholder="MM/YY" id="expire-date"/>
            </div>
            <div className="input-group ccv input-w-lg-3 input-w-sm-s3">
              <div className="input-label">CVC / CCV</div>
              <input type="text" name='CCV' placeholder="123" id="ccv" />
            </div>
          </div>
        </section>
      </form>
    </div>
  );
  //read form data when clicking submit and set data into state
  function handleSubmit(e){
    e.preventDefault()
    const formData = { 
      name: e.target[0].value, 
      cardNumber: e.target[1].value, 
      expireDate: e.target[2].value, 
      CCV: e.target[3].value,
      Sum: totalSum
    }
      setCardData(formData)
    console.log(cardData)
  }

}