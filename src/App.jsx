import { useRef } from 'react';
import './App.css';
import About from './Componants/About/About';
import Contact from './Componants/Contact/Contact';
import Experience from './Componants/Experience/Experience';
import Footer from './Componants/Footer/Footer';
import Looking from './Componants/Looking/Looking';
import Skills from './Componants/Skills/Skills';
import Workflow from './Componants/Workflow/Workflow';
import Navbar from './Componants/Home/Navbar';
import Banner from './Componants/Home/Banner';
import ClientsLove from './Componants/ClientsLove/ClientsLove';
import Others from './Componants/Others/Others';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import usePageTracking from './customHook/usePageTracking';

function App() {
  usePageTracking();

  const skillsRef = useRef(null);
  const workflowRef = useRef(null);
  const experiencesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Router>
      <>
        <Navbar
          skillsRef={skillsRef}
          workflowRef={workflowRef}
          experiencesRef={experiencesRef}
          contactRef={contactRef}
        />
        <Banner contactRef={contactRef} />
        <Switch>
          <Route exact path="/">
            <About />
            <Skills ref={skillsRef} />
            <Workflow ref={workflowRef} />
            <Experience contactRef={contactRef} ref={experiencesRef} />
            <ClientsLove />
            <Others />
            <Looking />
            <Contact ref={contactRef} />
            <Footer />
          </Route>
          {/* Add other routes here if needed */}
        </Switch>
      </>
    </Router>
  );
}

export default App;
