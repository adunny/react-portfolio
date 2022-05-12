import { useState } from 'react';
import './App.css';
import About from './components/About';
import ContactForm from './components/Contact/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';

function App() {

  const [projects, projectsSelected] = useState(false);
  const [contact, contactSelected] = useState(false);
  
  return (
    <>
      <Header 
      projectsSelected={projectsSelected}
      contactSelected={contactSelected}
      />
      <main>
        {projects ? (<Project/>) : contact ? (<ContactForm/>) : (<About/>)}
      </main>
      <Footer/>
    </>
  );
}

export default App;
