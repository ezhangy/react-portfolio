import heroImage from "../assets/project_thumbnails/redesign_long.png"
import problemsImg from "../assets/troop/usability_problems.svg"
import desktopWf from "../assets/troop/wireframes/desktop.svg"
import tabletWf from  "../assets/troop/wireframes/tablet.svg"
import mobileWf from  "../assets/troop/wireframes/mobile.svg"
import styleGuideImg from "../assets/troop/style_guide.svg"
import desktopHifi from "../assets/troop/hifi/desktop.png"
import tabletHifi from "../assets/troop/hifi/tablet.png"
import mobileHifi from "../assets/troop/hifi/mobile.svg"
import HeaderSection from "../components/HeaderSection"
import ProjectBanner from "../components/ProjectBanner"
import ImageSection from "../components/ImageSection"
import useScrollToTop from '../hooks/useScrollToTop';
import SeeMoreButton from "../components/SeeMoreButton"

const TroopRedesign = () => {
  const headerInfo = {
    title: "Troop PVD's Landing Page",
    tldr: "I redesigned a restaurant's landing page to be responsive and elegant on desktop, tablet, and mobile screens. To begin, I identified the usability problems with the original page. I then used lofi wireframes to ideate a new design that would address these problems. I used Figma to create hifi mockups of the website, and finally built the page using handcoded HTML/CSS!",
    tools: ["Figma", "Balsamiq"],
    team: ["just me!"],
    timeline: "2 weeks"
  }

  useScrollToTop()
  return (
    <div>
      <ProjectBanner imgSrc={heroImage} />
      <div className="project-content">
        <HeaderSection headerInfo={headerInfo} />
        <div className="project-section">
          <h2 className="small-section-title">identifying usability problems</h2>
          <h2 className="big-section-title">The Usability of Troop's Original Design</h2>
          <p>
            When choosing which website to redesign, I wanted to choose a site I felt I could improve significantly. So, I targeted my search around businesses that likely committed little effort to their site design, rather than companies with dedicated fleets of UI/UX designers like Google or Netflix. 
          </p>
          <ImageSection 
            data={[{id: 0, path: problemsImg}]} 
            separate={true}
            oversize={true}
            width={"100%"}
          />
        </div>
        <div className="project-section">
          <h2 className="small-section-title">ideation</h2>
          <h2 className="big-section-title">Designing Solutions to Usability Issues </h2>
          <ImageSection
            data={[{id: 1, path: desktopWf}]}
            margin={"-14%"}
            width={"100%"}
            separate={true}
            frame={false}
          />
          <ImageSection 
            data={[{id: 2, path: tabletWf}, {id: 3, path: mobileWf}]}
            margin={"-30%"}
            width={"50%"}
            separate={true}
            frame={false}
          />
        </div>
        <div className="project-section">
          <h2 className="small-section-title">visual design style guide</h2>
          <h2 className="big-section-title">Deciding Troop's Look and Feel</h2>
          <ImageSection 
            data={[{id: 4, path: styleGuideImg}]}
            margin={0}
            width={"100%"}
            separate={false}
            frame={false}
          />
        </div>
        <div className="project-section">
          <h2 className="small-section-title">high-fidelity prototyping</h2>
          <h2 className="big-section-title">Troop's Visual Redesign</h2>
          <ImageSection 
            data={[{id: 5, path: desktopHifi}]}
            margin={"-14"}
            width={"100%"}
            separate={false}
            frame={false}
          />
          <div className="inline-section img-and-text">
            <div className="text-wrapper-left">
              <h2 className="small-section-title">tablet prototype</h2>
              <p>This is a placeholder tip about my experience using figma. This is a placeholder tip about my experience using figma</p>
            </div>
            <div className="img-wrapper img-wrapper-right">
              <img src={tabletHifi} />
            </div>
          </div>
          <div className="inline-section img-and-text">
            <div className="text-wrapper-left">
              <h2 className="small-section-title">mobile prototype</h2>
              <p>This is a placeholder tip about my experience using figma. This is a placeholder tip about my experience using figma</p>
            </div>
            <div className="img-wrapper img-wrapper-right">
              <img src={mobileHifi} />
            </div>
          </div>
        </div>
        <div className="project-section">
          <h2 className="small-section-title">responsive redesign</h2>
          <h2 className="big-section-title">Building the Final Website</h2>
          <div className="card-button">
            <div className="img-wrapper">
              img
            </div>
          </div>
          <SeeMoreButton />
        </div>
      </div>
    </div>
  )
}

export default TroopRedesign