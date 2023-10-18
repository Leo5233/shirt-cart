import { useContext } from 'react'
import { stepContext } from "./stepContext"
export default function Step({setStep}){
  const step = useContext(stepContext)
  //show 上一步 if step > 1
  return (
    <div className="step-container">
      <div className="step-controller">
        {step > 1 && <div className="previous" onClick={handleClickPrevious}><img className="previous"  src="https://raw.githubusercontent.com/Leo5233/source/master/shirt-cart/left-arrow.png" alt="left-arrow"/>上一步</div> }
        <NextTag />
      </div>
    </div>
  );

  function handleClickPrevious(e){
    if ( e.target.className === 'previous'){
      setStep(step - 1)
    }
  }
  function handleClickNext(e) {
    if (e.target.className === 'next') {
      setStep(step + 1)
    }
  }
  
  //show 確認下單 when step = 3 or show 下一步
  function NextTag(){
    if (step < 3) {
      return (
        <div className="next" onClick={handleClickNext}>下一步<img className="next" src="https://raw.githubusercontent.com/Leo5233/source/master/shirt-cart/right-arrow.png" alt="right-arrow"/></div>)
    } else {
      return (
        <div className="pay">
          <input type='submit' form='creditCardForm' className="pay-btn sss" value='確認下單'/>
        </div>
      )
    }
  }
}