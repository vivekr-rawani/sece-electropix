
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import NavBar from './components/header/nav-bar/Navbar';
import Home from './components/main/home/Home';
import Team from './components/main/team/Team';
import AboutUs from './components/main/about-us/AboutUs';
import Events from './components/main/events/Events';


import Digimon from './components/main/events/Digimon'
import Drawsauras from './components/main/events/Drawsauras';
import Codathon from './components/main/events/Codathon';
import Robonoid from './components/main/events/Robonoid';
import Hackathon from './components/main/events/Hackathon';


function App() {
  return (
    <div>
      <NavBar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="team" element={<Team />} />
        <Route path='/events' element={<Events />} />

        <Route path='/events/Digimon' element={<Digimon />} />
        <Route path='/events/Codathon' element={<Codathon />} />
        <Route path='/events/Robonoid' element={<Robonoid />} />
        <Route path='/events/Hackathon' element={<Hackathon />} />
        <Route path='/events/Drawsauras' element={<Drawsauras />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
