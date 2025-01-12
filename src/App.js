import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { Skills } from './components/Skills.js';
import { Home } from './components/Home.js';
import { Aboutme } from './components/Aboutme.js';
import { Project } from './components/Project.js';
import { Contact } from './components/Contact.js';
import './App.css';

function App() {
  const idcontact="contact";
  const idproject="project";
  const idaboutme="aboutme";
  return (
    <div>
    <Header idcontact="#contact" idproject="#project" idaboutme="#aboutme"/>
    <Home />
    <Skills/>
    <Aboutme idaboutme="aboutme"/>
    <Project idproject="project"/>
    <Contact idcontact="contact"/>
    <Footer/>
    
    </div>
  );
}

export default App;
