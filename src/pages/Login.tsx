import React, { useState } from 'react';
import { IonContent, IonCard, IonButton, IonHeader, IonIcon, IonInput, IonPage, IonTitle, 
    IonToolbar, IonCardContent, IonButtons, IonMenuButton, IonToast } from '@ionic/react';
import { logInOutline, personCircleOutline } from 'ionicons/icons';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebaseConfig'; 
import Intro from '../components/Intro'; 
import './SharedStyles.css';

const Login: React.FC = () => {
    const [introSeen, setIntroSeen] = useState(false);
    const [showToast, setShowToast] = useState(false); 
    const history = useHistory();

    // Simulated login
    const doLogin = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Simulating login...');
        history.push('/home');
        setShowToast(true); 
    };

    const handleSkipIntro = () => {
        setIntroSeen(true);
    };

    const doGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("User logged in successfully:", user);
            setShowToast(true); 
            history.push('/home');
        } catch (error) {
            console.error("Error during Google Sign-In:", error);
        }
    };

    return (
        <>
            {!introSeen ? (
                <Intro onSkip={handleSkipIntro} />
            ) : (
                <IonPage>
                    <IonHeader>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonMenuButton />
                            </IonButtons>
                            <IonTitle>Login</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <IonContent style={{ backgroundColor: "#E0B5BC" }}>
                        <div className="ion-text-center ion-padding">
                            <img src="/Logo.png" alt="Logo" width="300" />
                        </div>
                        <h1>Login</h1>
                        <p>Already have an account?</p>
                        
                        <IonCard>
                            <IonCardContent>
                                <form onSubmit={doLogin}>
                                    <IonInput
                                        fill="outline"
                                        labelPlacement="floating"
                                        label="Email"
                                        placeholder="emailaddress@address.com"
                                        className="custom-input"
                                    />
                                    <IonInput
                                        className="ion-margin-top custom-input"
                                        fill="outline"
                                        labelPlacement="floating"
                                        label="Password"
                                        placeholder="******"
                                        type="password"
                                    />
                                    <IonButton
                                        type="submit"
                                        expand="block"
                                        className="ion-margin-top"
                                    >
                                        Login
                                        <IonIcon icon={logInOutline} slot="end" />
                                    </IonButton>
                                    <IonButton
                                        routerLink="/register"
                                        type="button"
                                        expand="block"
                                        className="ion-margin-top"
                                    >
                                        Create Account
                                        <IonIcon icon={personCircleOutline} slot="end" />
                                    </IonButton>

                                    <IonButton
                                        expand="block"
                                        onClick={doGoogleSignIn}
                                        color="tertiary"
                                        className="ion-margin-top"
                                    >
                                        Sign in with Google
                                        <IonIcon icon={personCircleOutline} slot="end" />
                                    </IonButton>
                                </form>
                            </IonCardContent>
                        </IonCard>

                        <IonToast
                            isOpen={showToast}
                            onDidDismiss={() => setShowToast(false)}
                            message="Successfully logged in!"
                            duration={3000}
                            position="top"
                            color="success"
                        />
                    </IonContent>
                </IonPage>
            )}
        </>
    );
};

export default Login;


