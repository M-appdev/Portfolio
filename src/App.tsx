import './App.css';

import SideBar from './side-bar/side-bar';
import Landing from './pages/landing/landing';
import Skills from './pages/skills/skills';
import About from './pages/about/about';

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
      </div>

    </div>
  );
}

export default App;
