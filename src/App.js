import Intro from './components/Intro.jsx';
import Navbar from './components/Navbar.jsx';
import AboutMe from './components/AboutMe.jsx';
import WorkExperienceGrid from './components/WorkExperienceGrid.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
        <Intro />
        <Navbar />
        <AboutMe />
        <WorkExperienceGrid />
    </div>
  );
}

export default App;
