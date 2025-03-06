import Header from "../components/Header"
import Latests from "../components/Latests"
import PageLayout from "../components/PageLayout"
import Footer from "../components/Footer"

import shoes from '../assets/graphics/shoes.jpg'
import footwear from "../store/footwear/footwear"

export default function Footwear() {
  return (
    <>
        <Header />
        <Latests />
        <PageLayout 
            pageName='Footwear'
            headBg={shoes}
            products={footwear}
        />
        <Footer />
    </>
  )
}
