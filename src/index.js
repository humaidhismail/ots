// index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18+ import method
import App from './App'; // Importing App as default
import './index.css'; // This is the CSS file where Tailwind is being applied


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
