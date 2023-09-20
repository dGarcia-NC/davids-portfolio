import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import AboutMe from "../src/components/sections/AboutMe";
import BlogSection from "../src/components/sections/Blog";
import Clients from "../src/components/sections/Clients";
import ContactForm from "../src/components/sections/ContactForm";
import ContactInfo from "../src/components/sections/ContactInfo";
import FunFact from "../src/components/sections/FunFact";
import Pricing from "../src/components/sections/Pricing";
import Quote from "../src/components/sections/Quote";
import ResumeSection from "../src/components/sections/Resume";
import Services from "../src/components/sections/Services";
import Skills from "../src/components/sections/Skills";
import Testimonials from "../src/components/sections/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Work from "../src/components/Work";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
const RecentWorks = dynamic(
  () => import("../src/components/sections/RecentWorks"),
  {
    ssr: false,
  }
);
const bio = `<p>
I'm David Garcia, I'm a developer based out of California. I
have experience in Frontend, Backend, QA, and Management.
I'm also interested in Software Architecture and trade-off
analysis. Feel free to reach out if you'd like to chat.
</p>`;

const Index = () => {
  return (
    <Layout bg={"gradient"}>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/demos/demo-1-colors.css" />
      </Head>
      <Header />
      <Home>
        <div className="profile no-photo">
          {/* profile image */}
          <div
            className="slide"
            style={{ backgroundImage: "url(images/profile-me.JPG)" }}
          />
          {/* profile titles */}
          <div className="title">David Garcia</div>
          {/*<div class="subtitle">Web Designer</div>*/}
          <div className="subtitle subtitle-typed">
            <TypingAnimation />
          </div>
          {/* profile socials */}
          <div className="social">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/dGarcia-NC"
            >
              <span className="fa fa-github" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/davidanthonygarcia/"
            >
              <span className="fa fa-linkedin" />
            </a>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a
              href="/David-Garcia-Resume.pdf"
              download="David-Garcia-Resume.pdf"
              className="lnk"
            >
              <span className="text">Download CV</span>
            </a>
            <a href="#" className="lnk discover">
              <span className="text">Contact Me</span>
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          <Services />
          <FunFact />
          <Clients />
          <Quote />
        </About>
        <Resume>
          <ResumeSection />
          <Skills />
          {/* <Testimonials /> */}
        </Resume>
        <Work>
          <RecentWorks />
        </Work>
        <Blog>
          <BlogSection />
        </Blog>
        <Contact>
          <ContactInfo />
          <ContactForm />
        </Contact>
      </ContentContainer>
    </Layout>
  );
};
export default Index;
