import React, { useState } from 'react';
import {
    IonContent, IonCard, IonButton, IonButtons, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, IonMenuButton, IonCardContent, IonToast
} from '@ionic/react';
import { checkmarkDoneOutline } from 'ionicons/icons';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebaseConfig'; 
import { useHistory } from 'react-router-dom'; 
import './SharedStyles.css';

const Register: React.FC = () => {
    const [showToast, setShowToast] = useState(false);
    const history = useHistory(); 

    const doRegister = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Account created successfully');
        setShowToast(true);
        
        // Redirect 
        setTimeout(() => {
            history.push('/login'); 
        }, 1000); // Delay the navigation for toast
    };

    const doGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("User registered successfully:", user);
            setShowToast(true);
            
            // Redirect 
            setTimeout(() => {
                history.push('/login');
            }, 1000); 
        } catch (error) {
            console.error("Error during Google Sign-In:", error);
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Create Account</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent style={{ backgroundColor: "#E0B5BC" }}>
                <div className="ion-text-center ion-padding">
                    <img src="/Logo.png" alt="Logo" width="300" />
                </div>
                <h1>Register</h1>
                <p>Create a new account!</p>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={doRegister}>
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
                                Create my account
                                <IonIcon icon={checkmarkDoneOutline} slot="end" />
                            </IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>

                <IonCard className="ion-margin-top">
                    <IonCardContent>
                        <IonButton
                            expand="block"
                            onClick={doGoogleSignIn}
                            color="tertiary"
                        >
                            Create my account with Google
                            <IonIcon icon={checkmarkDoneOutline} slot="end" />
                        </IonButton>
                    </IonCardContent>
                </IonCard>

                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message="Account successfully created!"
                    duration={5000}
                    position="top"
                    color="success"
                />
            </IonContent>
        </IonPage>
    );
};

export default Register;




