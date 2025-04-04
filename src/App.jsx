import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import About from './pages/about/about'
import Contact from './pages/contact/Contact'
import SignUp from './pages/signup/SignUp'
import Login from './pages/login/Login'
import RingCategory from './components/categories/ringCategory/RingCategory'
import BraceletCategory from './components/categories/braceletCategory/BraceletCategory'
import EarringCategory from './components/categories/earingCategory/EaringCategory'
import NeclaceCategory from './components/categories/neclaceCategory/NeclaceCategory'
import PopularDetail from './components/popularproducts/PopularDetail'
import BraceletDetail from './components/categories/braceletCategory/BraceletDetail'
import EarnningDetail from './components/categories/earingCategory/EarnningDetail'
import NeclaceDetail from './components/categories/neclaceCategory/NeclaceDetail'
import RingDetail from './components/categories/ringCategory/RingDetail'
import CartDetail from './components/cartdetail/cartDetail'
import Headline from './components/headline/Headline'
import BestSellingDetail from './components/bestselling/BestSellingDetail'
import Checkout from './components/checkout/Checkout'
import SearchFunc from './components/search/SearchFunc'
import JewleryStore from './components/jewlerystore/JewleryStore'
function App() {
  return (
     <BrowserRouter> 
     <Headline/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/ring' element={<RingCategory/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/searchfunc' element={<SearchFunc/>}/>
      <Route path='/jewlerystore' element={<JewleryStore/>}/>
      <Route path='/ringdetail/:id' element={<RingDetail/>}/>
      <Route path='/bracelet' element={<BraceletCategory/>}/>
      <Route path='/earrings' element={<EarringCategory/>}/>
      <Route path='/necklaces' element={<NeclaceCategory/>}/>
      <Route path='/populardetail/:id' element={<PopularDetail/>}/>
      <Route path='/bestselling/:id' element={<BestSellingDetail/>}/>
      <Route path='/braceletdetail/:id' element={<BraceletDetail/>}/>
      <Route path='/earingdetail/:id' element={<EarnningDetail/>}/>
      <Route path='/neclacedetail/:id' element={<NeclaceDetail/>}/>
      <Route path='/cartdetail' element={<CartDetail/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
  )
}
export default App
