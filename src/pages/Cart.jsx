import MainFrame from '../components/MainFrame'
import Header from '../components/Header'
import Address from '../components/step/Address'
import Shipping from '../components/step/Shipping'
import CreditCard from '../components/step/CreditCard'
import Step from '../components/step/Step'
import { stepContext } from '../components/step/stepContext'
import { cardContext, sumContext } from '../components/step/formContext'
import Progress from '../components/step/Progress'
import Buy from '../components/Buy'
import Footer from '../components/footer/Footer'
import { useState } from 'react'

export const CartPage = () => {
  const [step, setStep] = useState(1)
  const [cardData, setCardData] = useState({ name: "", cardNumber: "", expireDate: "", CCV :""})
  const [totalSum, setTotalSum] = useState(0)
  return (
    <>
      {/* <Header /> */}
      <stepContext.Provider value={step}>
      <Header />
      <MainFrame>
        {/* <!-- register --> */}
        <section className="register-container col col-lg-6 col-sm-12" data-phase="1" data-total-price="0">
          {/* <!-- register-title --> */}
          <h2 className="register-title col col-12">結帳</h2>
          {/* <!-- register-progress --> */}
          <Progress />
          {/* <!-- register-htmlForm --> */}
          <section className="htmlForm-container col col-12">
            {/* <!-- address phase --> */}
            <Address  />
            {/*  <!-- shipping phase --> */}
            <Shipping />
            {/* <!-- credit-card phase --> */}
            <cardContext.Provider value={{cardData, setCardData}}>
            <CreditCard totalSum={totalSum}/>
            </cardContext.Provider>
            {/* <!-- choose phase --> */}
            <Step 
              setStep={setStep} />
          </section>
        </section>
        {/* <!-- Cart & Items--> */}
          <sumContext.Provider value={{ totalSum, setTotalSum }}>
        <Buy />
          </sumContext.Provider>
      </MainFrame>
      {/* <!-- footer --> */}
      <Footer />
      </stepContext.Provider>
    </>
  )
}