import React from 'react'
import AboutCompany from '../components/Home/AboutCompany';
import ArticleAndNews from '../components/Home/ArticleAndNews';
import ChooseUs from '../components/Home/ChooseUs';
import Features from '../components/Home/Features';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MeetOurTeam from '../components/Home/MeetOurTeam';
import OurServices from '../components/Home/OurServices';
import Partners from '../components/Home/Partners';
import ProjectAndCase from '../components/Home/ProjectAndCase';
import ShowcaseSection from '../components/Home/ShowcaseSection';
import SignupBar from '../components/Home/SignupBar';
import Testimonial from '../components/Home/Testimonial';

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <ShowcaseSection />
        <Partners />
        <Features />
        <AboutCompany />
        <OurServices />
        <ChooseUs />
        <ProjectAndCase />
        <MeetOurTeam />
        <Testimonial />
        <ArticleAndNews />
        <SignupBar />
      </main>
      <Footer />
    </div>
  )
}

export default Home