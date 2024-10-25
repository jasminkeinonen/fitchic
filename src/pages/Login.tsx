import {
    IonContent,IonCard,IonButton,IonHeader,IonIcon,IonInput,IonPage,IonTitle,IonToolbar,IonCardContent,IonButtons,IonMenuButton,IonToast
} from '@ionic/react';
import { logInOutline, personCircleOutline } from 'ionicons/icons';
import React, { useState } from 'react'; 
import Logo from '../assets/hmmh.jpg';
import Intro from '../components/Intro'; 
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebaseConfig'; 

const Login: React.FC = () => {
    const [introSeen, setIntroSeen] = useState(false);
    const [showToast, setShowToast] = useState(false); 

    const doLogin = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('doLogin');
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
                        <IonToolbar color={'primary'}>
                            <IonButtons slot="start">
                                <IonMenuButton /> 
                            </IonButtons>
                            <IonTitle>My Login Page</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <IonContent>
                        <div className="ion-text-center ion-padding">
                            <img src={Logo} alt='Logo' width={'14%'} />
                        </div>
                        <p>Already have an account? Please fill up your information</p>
                        <IonCard>
                            <IonCardContent>
                                <form onSubmit={doLogin}>
                                    <IonInput 
                                        fill="outline" 
                                        labelPlacement="floating" 
                                        label="Email"
                                        type="email" 
                                        placeholder="emailaddress@address.com" 
                                        required
                                    ></IonInput>
                                    <IonInput 
                                        className="ion-margin-top" 
                                        fill="outline" 
                                        labelPlacement="floating" 
                                        label="Password"
                                        type="password" 
                                        placeholder="******" 
                                        required
                                    ></IonInput>
                                    <IonButton 
                                        type="submit" 
                                        expand="block" 
                                        className="ion-margin-top"
                                    >
                                        Login
                                        <IonIcon icon={logInOutline} slot="end"></IonIcon>
                                    </IonButton>
                                    <IonButton 
                                        routerLink='/register' 
                                        color={'secondary'} 
                                        type="button" 
                                        expand="block" 
                                        className="ion-margin-top"
                                    >
                                        Create Account
                                        <IonIcon icon={personCircleOutline} slot="end"></IonIcon>
                                    </IonButton>
                                    
                                    <IonButton
                                        expand="block"
                                        onClick={doGoogleSignIn}
                                        color="tertiary"
                                        className="ion-margin-top"
                                    >
                                        Sign in with Google
                                        <IonIcon icon={personCircleOutline} slot="end"></IonIcon>
                                    </IonButton>
                                </form>
                            </IonCardContent>
                        </IonCard>

                        <IonToast
                            isOpen={showToast}
                            onDidDismiss={() => setShowToast(false)}
                            message="Successfully logged in!"
                            duration={5000}
                            position="top"
                            color="success" 
                            cssClass="big-toast" 
                        />
                    </IonContent>
                </IonPage>
            )}
        </>
    );
};

export default Login;
