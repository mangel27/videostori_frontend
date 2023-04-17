import HeroSection from "./HeroSection"
import InteractSection from "./InteractSection"
import FeatureSection from "./FeatureSection"
import Carousel from "./Carousel"
const Home = ({ homepage }) => {
  return (
    <>
      <HeroSection heroData={homepage.hero} />
      <InteractSection />
      <FeatureSection />
      <Carousel slideData={homepage.carouselArticles} />
      {/* <FollowUs /> */}
    </>
  )
}

export default Home
