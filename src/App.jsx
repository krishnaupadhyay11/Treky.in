import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage, Clothing, Footwear, ProductDetail, Shop, CampingFurniture, CampingAccessories, SleepingBags, Tents, NotFound } from './pages/index'

import ScrollToTop from './components/ScrollToTop'

import './App.css'

export default function App() {
  // const [activeCategory, setActiveCategory] = useState('')
  
  
  // const path = window.location.pathname
  // useEffect(() => {
  //   const pathArray = path.split("/").filter(Boolean)
  //   setActiveCategory(() => pathArray[pathArray.length-2])
  //   console.log(activeCategory)
  // }, [path])
  // // useEffect(() => {
  // //   setPageName(activeCategory)
  // //   console.log(activeCategory)
  // //   console.log(pageName)
  // // }, [pageName])
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/footwear" element={<Footwear />} />
        <Route path="/camping-furniture" element={<CampingFurniture />} />
        <Route path="/camping-accessories" element={<CampingAccessories />} />
        <Route path="/sleeping-bags" element={<SleepingBags />} />
        <Route path="/tents" element={<Tents />} />
        <Route path={`/clothing/:id`} element={<ProductDetail />} />
        <Route path={`/footwear/:id`} element={<ProductDetail />} />
        <Route path={`/camping-furniture/:id`} element={<ProductDetail />} />
        <Route path={`/camping-accessories/:id`} element={<ProductDetail />} />
        <Route path={`/sleeping-bags/:id`} element={<ProductDetail />} />
        <Route path={`/tents/:id`} element={<ProductDetail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}
