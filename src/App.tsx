import './App.css';

import SideBar from './side-bar/side-bar';
import Landing from './pages/landing/landing';
import Skills from './pages/skills/skills';

function App() {
  return (
    <div className="App">
     
        <SideBar />
        <div className="home">

        <Landing />
        <Skills />
        </div>
      
    </div>
  );
}

export default App;
