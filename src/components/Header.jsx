import { useNavigate } from "react-router-dom";

export default function Header(){
  const navigate = useNavigate()
return (
  <header className="site-header">
    <div className="header-container mx-auto">
      {/* <!-- navbar-toggle --> */}
      <label htmlFor="navbar-toggle" className="burger-container">
        {/* <img src="../public/icons/toggle.svg" width="30px" height="30px" /> */}
        <div className="hamburger"></div>
      </label>
      <input id="navbar-toggle" className="navbar-toggle d-none" type="checkbox" />
      {/* <!-- navbar-menu --> */}
      <nav className="navbar-menu">
        
        <ul className="nav-list site-menu-list mr-auto">
          <li className="nav-item">
            男款
          </li>
          <li className="nav-item">
            女款
          </li>
          <li className="nav-item">
            最新消息
          </li>
          <li className="nav-item">
            客製商品
          </li>
          <li className="nav-item">
            聯絡我們
          </li>
        </ul>
        {/* <!-- logo --> */}
        <div className="nav-icon cursor-point">
            <img src="https://raw.githubusercontent.com/Leo5233/source/master/shirt-cart/logo.png" alt="logo" />
        </div>
        <ul className="nav-list site-action-list">
          {/* <!-- search --> */}
          <li className="nav-item" onClick={() => {navigate('/shopping')}}>
            <div className="nav-icon cursor-point">
              <img src="https://raw.githubusercontent.com/Leo5233/source/master/shirt-cart/search.png" alt="search" />
            </div>
          </li>
          {/* <!-- cart --> */}
          <li className="nav-item">
            <div className="nav-icon cursor-point" onClick={() => { navigate('/shopping') }}>
              <img src="https://raw.githubusercontent.com/Leo5233/source/master/shirt-cart/cart.png" alt="cart" />
            </div>
          </li>
          <li id="theme-toggle" className="nav-item">
            {/* <!-- moon --> */}
            <div className="nav-icon cursor-point">
              <input type="checkbox" id="dark-mode-toggle" className="d-none" onChange={darkModeToggle} />
              <label htmlFor="dark-mode-toggle" className="cursor-point">
              <img src="https://raw.githubusercontent.com/Leo5233/source/master/shirt-cart/moon.png" alt="moon" />
              </label>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  );

  //toggle dark mode by clicking a label of a hidden checkbox
  function darkModeToggle(e){
    if(e.target.checked){
      document.documentElement.setAttribute("data-theme", "light")
    } else {
      document.documentElement.setAttribute("data-theme", "dark")
    }
  }
}