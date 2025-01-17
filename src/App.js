import React from 'react';
import ReactDOM from 'react-dom/client'; 
import Navigations from './components/Navigations'; 
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import Services from './components/Services';
import WhyUs from './components/Whyus'; 
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#07272D] text-white scroll-smooth overflow-x-hidden">
      <Navigations />
      <Hero />
      <About />
      <Vision/>
      <Services />
      <WhyUs />
      <Team />
      <Contact />
    </div>
  );
}
export default App;
// For React 18 and later
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
