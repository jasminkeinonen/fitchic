import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { arrowForwardOutline } from 'ionicons/icons';
import './Intro.css';

interface IntroProps {
  onSkip: () => void;
}

const Intro: React.FC<IntroProps> = ({ onSkip }) => {
  return (
    <div className="intro-container">
      <h1>Welcome to Fit Chic!</h1>
      <p>Swipe to continue or press the button to skip!</p>
      <IonButton onClick={onSkip} expand="full" className="custom-button">
        Skip Intro
        <IonIcon icon={arrowForwardOutline} slot="end" />
      </IonButton>
      <img src="/public/Fitchic.jpg" className="intro-image" alt="Fit Chic Intro" />
    </div>
  );
};

export default Intro;


