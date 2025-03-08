import Header from "../components/Header"
import Latests from "../components/Latests"
import Slider from "../components/Slider"
import PopularCategories from "../components/PopularCategories"
import PopularBrands from "../components/PopularBrands"
import Look from "../components/Look"
import SocialFeed from "../components/SocialFeed"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"

export default function Homepage() {
  return (
    <>
        <Header />
      <div className="w-full flex flex-col items-center relative top-[70px]">
        <Latests />
        <Slider />
        <PopularCategories />
        <PopularBrands />
        <Look />
        <Testimonials />
        <SocialFeed />
        <Footer />
      </div>
    </>
  )
}
