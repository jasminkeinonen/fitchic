import React from 'react';
import '../theme/variables.css';
import { IonButton } from '@ionic/react';

interface IntroProps {
    onSkip: () => void; 
}

const Intro: React.FC<IntroProps> = ({ onSkip }) => {
    return (
        <div className="intro-container">
            <h1>Welcome to my Application!</h1>
            <p>Next you can continue to our login and sign-up page!</p>
            <IonButton onClick={onSkip} expand="full">
                Skip Intro
            </IonButton>
        </div>
    );
};

export default Intro;
