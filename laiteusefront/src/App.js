import React from 'react';
import { ClickerProvider } from './context/ClickerContext';  // Assure-toi du bon chemin
import ClickerHome from './pages/ClickerHome';  // Composant pour le jeu de clicker
import './styles/App.css';  // Importe le fichier CSS

const App = () => {
  return (
    <div className="background">
    <ClickerProvider> {/* Enveloppe l'application ou la section avec ClickerProvider */}
      <div className="App">
        <h1>Jeu de Clicker</h1>
        <ClickerHome /> {/* Affiche le composant où tu veux afficher l'argent */}
      </div>
    </ClickerProvider>
    </div>
  );
}

export default App;
