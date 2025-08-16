import Header from "../components/Header"
import Latests from "../components/Latests"
import PageLayout from "../components/PageLayout"
import Footer from "../components/Footer"

import cfBg from '../assets/graphics/look_camping.jpg'
import cf from "../store/camping-furniture/camping-furniture"

export default function Camping() {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center relative top-[70px]">
        <Latests />
        <PageLayout
            pageName='Camping Furniture'
            headBg={cfBg}
            products={cf}
            pageLink='camping-furniture'
        />
        <Footer />
      </div>
    </>
  )
}
