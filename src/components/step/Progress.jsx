
import { useContext } from 'react'
import { stepContext } from "./stepContext"
export default function Progress(){
  const step = useContext(stepContext)
  let [className1, className2, className3] = ['text', 'text', 'text']
  //change the pattern of the three circles by setting className according to step
  switch (step) {
    case 1:
      className1 = 'text active'
      className2 = 'text'
      className3 = 'text'
      break;
    case 2:
      className1 = 'text checked'
      className2 = 'text active'
      className3 = 'text'
      break;
    case 3:
      className1 = 'text checked'
      className2 = 'text checked'
      className3 = 'text active'
      break;
    default:
      className1 = 'text active'
      className2 = 'text'
      className3 = 'text'
  }
  return (
    <section className = "progress-container col col-12" >
      <div className={className1}>寄送地址</div>
      <div className="connect-line"></div>
      <div className={className2}>運送方式</div>
      <div className="connect-line"></div>
      <div className={className3}>付款資訊</div>
    </section>
  );
}
