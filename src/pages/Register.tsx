import {
  IonContent,IonCard,IonButton,IonButtons,IonHeader,IonIcon,IonInput,IonPage,IonTitle,IonToolbar,IonMenuButton,IonCardContent,IonToast
} from '@ionic/react';
import { checkmarkDoneOutline } from 'ionicons/icons';
import { personCircleOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebaseConfig'; 
import Logo from '../assets/hmmh.jpg';

const Register: React.FC = () => {
const [showToast, setShowToast] = useState(false); 

const doLogin = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Account created successfully');
    setShowToast(true); 
};

const doGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log("User registered successfully:", user);
        setShowToast(true); 
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

        <IonContent>
            <p>Please, create your account!</p>
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
                            Create my account
                            <IonIcon icon={checkmarkDoneOutline} slot="end"></IonIcon>
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
                        <IonIcon icon={checkmarkDoneOutline} slot="end"></IonIcon>
                    </IonButton>
                </IonCardContent>
            </IonCard>

            <IonToast
    isOpen={showToast}
    onDidDismiss={() => setShowToast(false)}
    message="Account successfully created !"
    duration={5000} 
    position="top" 
    color="success"  
/>
        </IonContent>
    </IonPage>
);
};

export default Register;


