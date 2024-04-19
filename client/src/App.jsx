import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm'; // Importez le composant RegistrationForm
import FormulaireContact from './FormulaireContact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Définissez la route pour le formulaire d'inscription */}
        <Route path="/register" element={<RegistrationForm />} />
        {/* Définissez la route pour le formulaire de contact */}
        <Route path="/contact" element={<FormulaireContact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
