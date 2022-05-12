import { useState } from 'react';
import './App.css';
import About from './components/About';
import ContactForm from './components/Contact/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';
import Resume from './components/Resume';

function App() {

  const [projects, projectsSelected] = useState(false);
  const [contact, contactSelected] = useState(false);
  const [resume, resumeSelected] = useState(false);
  
  return (
    <>
      <Header 
      projectsSelected={projectsSelected}
      contactSelected={contactSelected}
      resumeSelected={resumeSelected}
      />
      <main>
        {projects ? (<Project/>) : contact ? (<ContactForm/>) : resume ? (<Resume/>) : (<About/>)}
      </main>
      <Footer/>
    </>
  );
}

export default App;
