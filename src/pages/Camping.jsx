import Header from "../components/Header"
import Latests from "../components/Latests"
import PageLayout from "../components/PageLayout"
import Footer from "../components/Footer"

import campingBg from '../assets/graphics/tent.jpg'
import camping from "../store/camping/camping"

export default function Camping() {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center relative top-[70px]">
        <Latests />
        <PageLayout
            pageName='Camping'
            headBg={campingBg}
            products={camping}
        />
        <Footer />
      </div>
    </>
  )
}
