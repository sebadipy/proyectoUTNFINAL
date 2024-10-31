import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Nav from './componentes/Nav';
import Header from './componentes/Header';
import Footer from './componentes/Footer';

import EncontradosPage from './pages/EncontradosPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import PerdidosPage from './pages/PerdidosPage';
import PublicadosPage from './pages/PublicadosPage';
import ContactoPage from './pages/ContactoPage';

function App() {

  return (

    <div className="App">

      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/publicados" element={<PublicadosPage />} />
          <Route path="/perdidos" element={<PerdidosPage />} />
          <Route path="/encontrados" element={<EncontradosPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />



        </Routes>

      </BrowserRouter>

      <Footer />

    </div>
  )

}

export default App;