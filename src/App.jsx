import './css/main.scss'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {CartPage} from './pages/Cart'
import { ShoppingPage } from './pages/Shopping'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/shopping" element={<ShoppingPage />}></Route>
          <Route path="/*" element={<ShoppingPage />}></Route>
        </Routes>
      </BrowserRouter>
       
    </>
  )
}

export default App
