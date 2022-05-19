// import { useState } from 'react';
import './App.css';
import About from './components/About';
import ContactForm from './components/Contact/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';
import Resume from './components/Resume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  // const [projects, projectsSelected] = useState(false);
  // const [contact, contactSelected] = useState(false);
  // const [resume, resumeSelected] = useState(false);
  
  return (
    <Router>
      <Header/>
      <main>
        <Routes>
          <Route 
          path='/about'
          element={<About/>}
          />
          <Route 
          path='/projects'
          element={<Project/>}
          />
          <Route 
          path='/contact'
          element={<ContactForm/>}
          />
          <Route
          path='/resume'
          element={<Resume/>}
          />
          <Route
          path='*'
          element={<About/>}
          />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
