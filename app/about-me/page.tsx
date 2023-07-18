import Body from "../component/Body"
import Footer from "../component/Footer"
import Header from "../component/Header"
import Skill from "../component/skill/Skill"
import Project from "../component/project/Project"
import HomeBackground from "../component/HomeBackground"

const AboutMe = () => {
  return (
    <>
      <HomeBackground />
      <Header />
      <Body />
      <Skill />
      <Project />
      <Footer />
    </>
  )
}

export default AboutMe
