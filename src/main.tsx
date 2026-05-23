import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './ScrollToTop.tsx';

import './index.css';
import App from './App.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import Footer from './components/Footer/Footer.tsx';



createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <App />
    <Footer />
  </BrowserRouter>
);