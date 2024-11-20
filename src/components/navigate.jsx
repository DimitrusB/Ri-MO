import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
// import About from './components/About';
// import Contact from './components/Contact';

const RoutesPages = () => {
  return ( // Добавлено return
    <Routes>
      <Route path="/" element={<Home />} /> {/* Загрузка Home по умолчанию */}
      <Route path="/1" element={<Home />} /> {/* Если вы хотите, чтобы Home был доступен по /1 */}
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
};

export default RoutesPages;
