import ProjectBanner from "../components/ProjectBanner"
import bannerImg from "../assets/project_thumbnails/album_long.png"
import HeaderSection from "../components/HeaderSection"
import useScrollToTop from '../hooks/useScrollToTop';

const AlbumApp = () => {
  const headerInfo = {
    title: "Album Discovery App",
    tldr: "I created a React app that allows you to sort and filter a list of albums using data from Spotify. When you've found an album you would like to listen to, you can save it to your queue! I used Material UI (MUI) React to style the app.",
    tools: ["React", "MUI"],
    team: ["just me!"],
    timeline: "2 weeks"
  }

  useScrollToTop()
  return (
    <div>
      <ProjectBanner imgSrc={bannerImg}/>
      <div className="project-content">
        <HeaderSection headerInfo={headerInfo}/>
        <div className="project-section">
          <h3 className="small-section-title">background</h3>
          <h2 className="big-section-title">Reimagining the Album Listicle</h2>
          <p>I'm always on the lookout for interesting and new music to listen to. Spotify and Apple Music's algorithmic recommendation systems are great for finding more of the kind of music I already know I love. They're not so great for finding albums that are totally out of left-field for me but might just be my next obsession.</p>

          <p>So I often find myself trawling review and music aggregation sites for the "Top Ten Albums of [<i>insert year/decade here</i>]" articles, but these lists are always a pain to navigate. Because they're static objects, there's no good way to sift through them besides scrolling endlessly down a page—and even worse, no way to mark which albums you want to listen to.</p>

          <p>So I envisioned an app where you could do just that—in line with other aggregation sites such as <a href="https://letterboxd.com/reviews/popular/this/week/">Letterboxd</a> or <a href="https://rateyourmusic.com/">Rate your Music</a>, but with better functionality for filtering.</p>
        </div>
        <div className="project-section">
          <h3 className="small-section-title">data retrieval</h3>
          <h2 className="big-section-title"> Geting Album Data using the Spotify API</h2>
          <p>For my app's proof-of-concept, I spent some time finding albums that spanned different decades and genres which I could use to test my app.</p>
          
          <p>Using each album's unique <a href="https://community.spotify.com/t5/FAQs/What-s-a-Spotify-URI/ta-p/919201">Spotify URI</a>, I used the <a href="https://developer.spotify.com/console/get-several-albums/">Get Several Albums</a> endpoint of Spotify's Web API console to download a json file with data about all of the albums</p>. 
        </div>
        <div className="project-section">
          <h2>[under construction]</h2>
        </div>
      </div>
    </div>
  )
}

export default AlbumApp