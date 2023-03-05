import "./App.css";
import logo from "./logo.svg";

const data = [1, 2, 3, 4, 5];

const App = () => {
  return (
    <Header/>
    <MainContent />
    <Footer />
  )
};

export const Header = () => {
  return (
   <>
    <HeaderLeft />
    <HeaderRight />
   </>
  )
}

export const HeaderLeft = () => {
  return (
    <div>
    <MainTitle />
    <SubTitle />
    </div>
  )
}

export const MainTitle = () => {
  return (
    <>
      <h2>Main Title</h2>
    </>
  )
}
export const SubTitle = () => {
  return (
    <>
      <h5>Sub Title</h5>
    </>
  )
}

export const HeaderRight = () => {
  return (
    <>
      <Navigation />
    </>
  )
}

export const Navigation = () => {
  return (
    <>
      {
        [1,2,3].map(item => <ListItem />)
      }
    </>
  )
}

export const ListItem = () => {
  return (
      <a href="#">label</a> 
  )
}

export const Footer = () => {
  return (
      <>
        <MainTitle />
        <p className="paragraph">Copy right</p>
      </>
  )
}

export const MainContent = () => {
  return (
      <>
        <LeftSide />
        <RightSide />
      </>
  )
}

export const LeftSide = () => {
  return (
      <>
       <FeaturedPost />
       {
        [1,2,3].map(item=><RecentPost />)
       }
      </>
  )
}


export const FeaturedPost = () => {
  return (
    <>
      <img src = "#" />
      <RecentDate />
      <MainTitle />
      <Paragraph />
      <SubTitle />
    </>
  )
}

export const RecentPost = () => {
  return (
    <>
      <div>
<img src="" /> 
<RecentDate />

      </div>
      <div>
<MainTitle />
<Paragraph />
<SubTitle />
      </div>
    </>
  )
}

export const RightSide = () => {
  return (
      <>
       <AboutMe />
       <RecentPosts />
      </>
  )
}

export const AboutMe = () => {
  return (
      <>
       <MainTitle />
       <img src="#" />
       <Paragraph />
      </>
  )
}

export const RecentPosts = () => {
  return (
      <>
       <MainTitle />
       {
        [1,2,3].map(item =><Post />)
       }
       
      </>
  )
}

export const Post = () => {
  return (
      <>
      <img src="#" />
      <p>Post data</p>
      </>
  )
}

export default App;

