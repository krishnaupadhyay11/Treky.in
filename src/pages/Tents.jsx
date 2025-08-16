import Header from "../components/Header"
import Latests from "../components/Latests"
import PageLayout from "../components/PageLayout"
import Footer from "../components/Footer"

import tentBg from '../assets/graphics/tent.jpg'
import tents from "../store/tents/tents"

export default function Tents() {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center relative top-[70px]">
        <Latests />
        <PageLayout
            pageName='Tents'
            headBg={tentBg}
            products={tents}
            pageLink='tents'
        />
        <Footer />
      </div>
    </>
  )
}
