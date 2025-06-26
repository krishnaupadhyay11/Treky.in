import Header from "../components/Header"
import Latests from "../components/Latests"
import PageLayout from "../components/PageLayout"
import Footer from "../components/Footer"

import clothingBg from '../assets/graphics/clothing.jpg'
import clothing from "../store/clothing/clothing"

export default function Clothing() {
  return (
    <>
        <Header />
        <div className="w-full flex flex-col items-center relative top-[70px]">
          <Latests />
          <PageLayout
              pageName='Clothing'
              headBg={clothingBg}
              products={clothing}
          />
          <Footer />
        </div>
    </>
  )
}
