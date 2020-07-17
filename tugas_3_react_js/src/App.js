import React from 'react';
import Header from './Pages/Header';
import MenuMakanan from './Pages/MenuMakanan';
import MenuTentangKami from './Pages/MenuTentangKami';
import MenuKontak from './Pages/MenuKontak';
import Footer from './Pages/Footer';

function App() {
  return (
    <div>
      <Header />
      <MenuMakanan />
      <MenuTentangKami />
      <MenuKontak />
      <Footer />
    </div>
  );
}

export default App;
