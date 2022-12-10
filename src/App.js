import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import ContactForm from './components/Contact';



function App() {

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div>
          {!contactSelected ? (
            <>
              <About></About>
            </>
          ) : (
            <ContactForm></ContactForm>
          )}

          <Footer></Footer>
        </div>
      </main>
    </div>
  );
}

export default App;
