import { stepContext } from "./stepContext"
import { useContext } from 'react'
export default function Address() {
  const step = useContext(stepContext)
  let addressclass = 'htmlForm'
  if (step !== 1) {
    addressclass = 'd-none'
  }
  const cityList = ["KLU-基隆市",
    "TPH-新北市","TPE-臺北市","TYC-桃園市","HSH-新竹縣","HSC-新竹市","MAC-苗栗市","MAL-苗栗縣","TXG-臺中市",
    "CWH-彰化縣","CWS-彰化市","NTC-南投市","NTO-南投縣","YLH-雲林縣","CHY-嘉義縣","CYI-嘉義市","TNN-臺南市",
    "KHH-高雄市","IUH-屏東縣","PTS-屏東市","ILN-宜蘭縣","ILC-宜蘭市","HWA-花蓮縣","HWC-花蓮市","TTC-臺東市",
    "TTT-臺東縣","PEH-澎湖縣","KMN-金門縣","LNN-連江縣"]
  function Select({cityList}) {
    const listItem = cityList.map( city => {
      const name = city.split('-')[1]
      const shortName = city.split('-')[0]
      return (<option key={shortName} value={shortName}>{name}</option>)
    })
    return (
    <select required defaultValue="default">
      <option value="default">請選擇縣市</option>
      {listItem}
    </select>
    )
  }
  return (
    <div className={addressclass}>
      <form className = "col col-12" data-phase="address" >
        <h3 className="htmlForm-title">寄送地址</h3>
        <section className="htmlForm-body col col-12">
          <div className="col col-12 input-group-row">
            <div className="input-group gender input-w-lg-2 input-w-sm-s1">
              <div className="input-label">稱謂</div>
              <div className="select-container">
                <select defaultValue="mr">
                  <option value="mr">先生</option>
                  <option value="ms">女士</option>
                  <option value="mx">不明</option>
                </select>
              </div>
            </div>
            <div className="input-group name input-w-lg-4 input-w-sm-s2">
              <div className="input-label">姓名</div>
              <input type="text" placeholder="請輸入姓名" id="name" />
            </div>
          </div>
          <div className="col col-12 input-group-row">
            <div className="input-group phone input-w-lg-3 input-w-sm-full">
              <div className="input-label">電話</div>
              <input type="tel" placeholder="請輸入行動電話" id="phone" />
            </div>
            <div className="input-group mail input-w-lg-3 input-w-sm-full">
              <div className="input-label">Email</div>
              <input type="email" placeholder="請輸入電子郵件" id="email" />
            </div>
          </div>
          <div className="col col-12 input-group-row">
            <div className="input-group city input-w-lg-2 input-w-sm-full">
              <div className="input-label">縣市</div>
              <div className="select-container">
                <Select cityList={cityList}/>
              </div>
            </div>
            <div className="input-group address input-w-lg-4 input-w-sm-full">
              <div className="input-label">地址</div>
              <input type="text" placeholder="請輸入地址" id="address" />
            </div>
          </div>
        </section>
      </form >
    </div>
);

}