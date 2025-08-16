import Header from "../components/Header"
import Latests from "../components/Latests"
import PageLayout from "../components/PageLayout"
import Footer from "../components/Footer"

import sbBg from '../assets/graphics/tent.jpg'
import sb from "../store/sleeping-bags/sleeping-bags"

export default function SleepingBags() {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center relative top-[70px]">
        <Latests />
        <PageLayout
            pageName='Sleeping Bags'
            headBg={sbBg}
            products={sb}
            pageLink='sleeping-bags'
        />
        <Footer />
      </div>
    </>
  )
}
