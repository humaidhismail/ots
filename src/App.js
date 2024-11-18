import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18+
import Navigations from './components/Navigations'; // Ensure the file is named Navigation.js
import Hero from './components/Hero';
import Vision from './components/Vision';
import Services from './components/Services';
import WhyUs from './components/Whyus'; // Fixed capitalization of 'WhyUs'
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#07272D] text-white scroll-smooth">
      <Navigations />
      <Hero />
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
