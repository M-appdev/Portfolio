import './App.css';

import SideBar from './side-bar/side-bar';
import Landing from './pages/landing/landing';
import Skills from './pages/skills/skills';
import About from './pages/about/about';
import Portfolio from './pages/portfolio/portfolio';
import Contact from './pages/contact/contact';
import WorkTogether from './pages/work-together/work-together';

function App() {
  return (
    <div className="App container">
      <div className='side-bar'>
        <SideBar />
      </div>
      <div className="contents">
        <Landing />
        <About />
        <Skills />
        {/* <WorkTogether /> */}
        <Portfolio />
        <Contact/>
      </div>

    </div>
  );
}

export default App;
