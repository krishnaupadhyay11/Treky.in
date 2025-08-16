import Header from "../components/Header"
import Latests from "../components/Latests"
import PageLayout from "../components/PageLayout"
import Footer from "../components/Footer"

import caBg from '../assets/graphics/stove.jpg'
import ca from "../store/camping-accessories/camping-accessories"

export default function CampingAccessories() {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center relative top-[70px]">
        <Latests />
        <PageLayout
            pageName='Camping Accessories'
            headBg={caBg}
            products={ca}
            pageLink='camping-accessories'
        />
        <Footer />
      </div>
    </>
  )
}
