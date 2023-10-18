import '../css/shopping.css'
import { useNavigate } from 'react-router-dom'
import { ShirtsCollection } from '../components/ShirtsCollection'
const shirts = ['https://ih1.redbubble.net/image.953059917.6480/ssrco,classic_tee,mens,101010:01c5ca27c6,front_alt,square_product,600x600.jpg', 'https://ih1.redbubble.net/image.1419466718.8744/gptr,1265x,front,black-c,330,402,600,600-bg,f8f8f8.jpg', 'https://ih1.redbubble.net/image.4436564692.3664/ssrco,classic_tee,mens,fafafa:ca443f4786,front_alt,square_product,600x600.u1.jpg', 'https://ih1.redbubble.net/image.4751063672.4842/ssrco,classic_tee,womens,fafafa:ca443f4786,front_alt,square_product,600x600.jpg', 'https://ih1.redbubble.net/image.1066895432.2028/ssrco,classic_tee,womens,fafafa:ca443f4786,front_alt,square_product,600x600.jpg', 'https://ih1.redbubble.net/image.4763216857.5179/ssrco,classic_tee,womens,fafafa:ca443f4786,front_alt,square_product,600x600.u3.jpg', 'https://ih1.redbubble.net/image.2262194997.9416/ssrco,classic_tee,womens,101010:01c5ca27c6,front_alt,square_product,600x600.jpg', 'https://ih1.redbubble.net/image.1476194496.5976/ssrco,classic_tee,womens,fafafa:ca443f4786,front_alt,square_product,600x600.jpg', 'https://ih1.redbubble.net/image.4419434727.1313/ssrco,classic_tee,womens,fafafa:ca443f4786,front_alt,square_product,600x600.u1.jpg', 'https://ih1.redbubble.net/image.4111656295.0533/ssrco,classic_tee,mens,e5d6c5:f62bbf65ee,front_alt,square_product,600x600.jpg', 'https://ih1.redbubble.net/image.4659616349.1893/ssrco,classic_tee,womens,101010:01c5ca27c6,front_alt,square_product,600x600.u2.jpg', 'https://ih1.redbubble.net/image.1475841530.8801/ssrco,classic_tee,mens,fafafa:ca443f4786,front_alt,square_product,600x600.jpg', 'https://ih1.redbubble.net/image.2239348176.4977/ssrco,classic_tee,mens,101010:01c5ca27c6,front_alt,square_product,600x600.jpg', 'https://ih1.redbubble.net/image.2239391752.6263/ssrco,classic_tee,mens,101010:01c5ca27c6,front_alt,square_product,600x600.jpg', 'https://ih1.redbubble.net/image.3758716142.5399/ssrco,classic_tee,mens,fafafa:ca443f4786,front_alt,square_product,600x600.jpg']
export const ShoppingPage = () => {
  const navigate = useNavigate()
  return (
    <>
<header>
  <nav className="shopping-nav">
    <div class="search">
      <div><i class="fa-solid fa-magnifying-glass"></i></div>
    </div>
    <div class="logo">  
        <img src="https://assets-lighthouse.alphacamp.co/uploads/image/file/14985/logo-2021.png" alt="logo" class="logo-img"/>
        <span class="logo-text">TSHIRT STORE<sup>®</sup></span>
    </div>
    <div class="shopping-nav-items">
      <div href="#abc" class="Men">Men</div>
      <div href="#abc" class="Women">Women</div>
      <div href="#abc" class="Kids">Kids</div>
    </div>
    <div class="icons">
      <div class="favorite" onClick={() => { navigate('/cart')}}>
        <i class="fa-regular fa-heart"></i>
      </div>
      <div class="cart" onClick={() => { navigate('/cart')}}>
        <svg class="mainNavigation-selection-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 21 27">
          <g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="#1D1D1B" stroke-width="1.7" d="M2.9487525,7 L18.0512475,7 C18.5831073,7 19.0219114,7.41631646 19.0498653,7.94744117 L19.9446022,24.9474412 C19.9736296,25.4989626 19.5500646,25.9695904 18.9985432,25.9986178 C18.9810387,25.9995391 18.963513,26 18.9459843,26 L2.05401566,26 C1.50173091,26 1.05401566,25.5522847 1.05401566,25 C1.05401566,24.9824713 1.05447655,24.9649456 1.05539783,24.9474412 L1.95013468,7.94744117 C1.97808861,7.41631646 2.41689268,7 2.9487525,7 Z"></path>
            <path stroke="#1D1D1B" stroke-width="1.7" d="M15,9 L15,5.44444444 C15,2.98984556 12.9852814,1 10.5,1 C8.01471863,1 6,2.98984556 6,5.44444444 L6,9"></path>
          </g>
        </svg>
      </div>
    </div>
  </nav>
</header>
<section class="bars">
  <div class="bar-wrapper">
    <div class="category-title">Basic T-shirts</div>
  </div>
  <div class="select-bars">
    <select name="size" id="size" class="size">
      <option>size</option>
    </select>
    <select name="color" id="color" class="color">
      <option>color</option>
    </select>
    <select name="sort" id="sort" class="sort">
      <option>sort</option>
    </select>
  </div>
</section>
<section>
  <div class="tshirt-wrapper">
    <ShirtsCollection shirts={shirts} />
 
  </div>
</section>
<section>
  <div class="page">
    14/14
  </div>
</section>
<footer>
  <div class="foot-wrapper">
    <div class="sign-up-text">
      Get the latest T-shirt drops in your inbox! Sign up for our Newsletter.
    </div>
    <div class="sign-up-bar">
      <input type="email" class="email-input" placeholder="Enter email for new updates"/><a href="#abc"><button class="signup-btn" type="submit" name="newsletter">SIGN UP!
        </button></a>
    </div>
    <div class="agree">
      By registering you agree with our <a href="#abc" class="integrity-policy"><u>Integrity Policy</u></a>
    </div>
  </div>
  <div class="policy">
    © 2021 Tshirt Store. All rights reserved.
  </div>
</footer>  
 
    </>
  )
}