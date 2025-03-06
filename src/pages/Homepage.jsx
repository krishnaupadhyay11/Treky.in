import Header from "../components/Header"
import Latests from "../components/Latests"
import Slider from "../components/Slider"
import PopularCategories from "../components/PopularCategories"
import PopularBrands from "../components/PopularBrands"
import Look from "../components/Look"
// import NewArrivals from "../components/NewArrivals"
import SocialFeed from "../components/SocialFeed"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"

export default function Homepage() {
  return (
    <>
      <div className="w-full fixed top-0 z-[99999] bg-white">
        <Header />
        <Latests />
      </div>
      <div className="w-full flex flex-col items-center relative top-[100px]">
        <Slider />
        <PopularCategories />
        <PopularBrands />
        <Look />
        {/* <NewArrivals /> */}
        <Testimonials />
        <SocialFeed />
        <Footer />
      </div>
    </>
  )
}
