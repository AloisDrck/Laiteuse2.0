import React, { createContext, useState, useContext } from 'react';

// Créer le contexte
const ClickerContext = createContext();

// Créer un fournisseur pour l'argent et les fonctions associées
export const ClickerProvider = ({ children }) => {
  // L'état pour stocker l'argent
  const [money, setMoney] = useState(0);

  // Fonction pour augmenter l'argent
  const earnMoney = (amount) => {
    setMoney((prevMoney) => prevMoney + amount);
  };

  // Fonction pour afficher une image qui tombe et disparaît
  const showFallingImage = () => {
    const playSound = () => {
      const audioUrl = '/water.mp3';
      const audio = new Audio(audioUrl);
      audio.play();
    };
  
    const createFallingImage = (src, rotationSpeed = 0) => {
      const image = document.createElement('img');
      image.src = src;
      image.style.width = '200px';
      image.style.height = '80px';
      image.style.position = 'absolute';
      image.style.top = '0px';
      image.style.left = `${Math.random() * window.innerWidth}px`;
      image.style.transition = 'top 2s ease-in';
  
      let rotation = 0;
      if (rotationSpeed > 0) {
        const rotateImage = () => {
          rotation += rotationSpeed;
          image.style.transform = `rotate(${rotation}deg)`;
          if (rotation < 360) {
            requestAnimationFrame(rotateImage);
          }
        };
        requestAnimationFrame(rotateImage);
      }
  
      document.body.appendChild(image);
  
      setTimeout(() => {
        image.style.top = `${window.innerHeight}px`;
      }, 100);
  
      setTimeout(() => {
        document.body.removeChild(image);
      }, 2100);
    };
  
    // Jouer le son
    playSound();
  
    // Décider aléatoirement quelle image afficher
    if (Math.random() < 0.1) {
      document.body.style.backgroundImage = "url('/images/fiorio.png')";
      let audioUrl = '/witch.mp3';
      if (Math.random() < 0.3) {
        audioUrl = '/yeah.mp3';
      }
      const audio = new Audio(audioUrl);
      audio.play();
    } else {
      document.body.style.backgroundImage = "url('/images/background.webp')";
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundRepeat = 'no-repeat';
    }
  
    // Image principale qui tombe avec rotation
    createFallingImage(
      'https://www.freeiconspng.com/thumbs/tear-png/tear-png-24.png',
      10
    );
  };
  
  return (
    <ClickerContext.Provider value={{ money, earnMoney, showFallingImage }}>
      {children}
    </ClickerContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte dans les composants
export const useClickerContext = () => useContext(ClickerContext);
