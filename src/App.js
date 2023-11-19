import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import AboutCompany from './components/Home/AboutCompany';
// import ArticleAndNews from './components/Home/ArticleAndNews';
// import ChooseUs from './components/Home/ChooseUs';
// import Features from './components/Home/Features';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import MeetOurTeam from './components/Home/MeetOurTeam';
// import OurServices from './components/Home/OurServices';
// import Partners from './components/Home/Partners';
// import ProjectAndCase from './components/Home/ProjectAndCase';
// import ShowcaseSection from './components/Home/ShowcaseSection';
// import SignupBar from './components/Home/SignupBar';
// import Testimonial from './components/Home/Testimonial';
// import Contacts from './Views/Contacts';
import Home from './Views/Home';
import Contacts from './Views/Contacts';
import News from './Views/News';
import NewsDetails from './Views/NewsDetails';
import NotFound from './Views/NotFound';


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/news' element={<News />} />
          <Route path='/news-details' element={<NewsDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;