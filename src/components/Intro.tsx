import React from 'react';
import '../theme/variables.css';
import { IonButton } from '@ionic/react';

interface IntroProps {
    onSkip: () => void; 
}

const Intro: React.FC<IntroProps> = ({ onSkip }) => {
    return (
        <div className="intro-container">
            <h1>Welcome to my App!</h1>
            <p>This is a brief introduction to our application.</p>
            <IonButton onClick={onSkip} expand="full">
                Skip Intro
            </IonButton>
        </div>
    );
};

export default Intro;
