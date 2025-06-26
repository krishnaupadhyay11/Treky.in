import Header from "../components/Header"
import Latests from "../components/Latests"
import Footer from "../components/Footer"

export default function Footwear() {
  return (
    <>
        <Header />
        <div className="w-full flex flex-col items-center relative top-[70px]">
          <Latests />
          <div className="w-full min-h-[600px] flex justify-center items-center">
              <h1 className="text-3xl font-bold text-gray-800">
                  Page is under upgradation or not found.
              </h1>
          </div>
          <Footer />          
        </div>
    </>
  )
}