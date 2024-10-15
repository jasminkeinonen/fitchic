import { IonContent, IonCard, IonButton, IonHeader, IonIcon, IonInput, IonFooter, IonPage, IonTitle, IonToolbar, IonCardContent } from '@ionic/react';
import { logInOutline, personCircleOutline } from 'ionicons/icons';
import React, { useState } from 'react'; 
import Logo from '../assets/hmmh.jpg';
import Intro from '../components/Intro'; 

const Login: React.FC = () => {
    const [introSeen, setIntroSeen] = useState(false);

    const doLogin = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('doLogin');
    };

    const handleSkipIntro = () => {
        setIntroSeen(true);
    };

    return (
        <>
            {!introSeen ? (
                <Intro onSkip={handleSkipIntro} />
            ) : (
                <IonPage>
                    <IonHeader>
                        <IonToolbar color={'primary'}>
                            <IonTitle>My Login Page</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <IonContent>
                        <div className="ion-text-center ion-padding">
                            <img src={Logo} alt='Logo' width={'50%'} />
                        </div>
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
                                </form>
                            </IonCardContent>
                        </IonCard>
                    </IonContent>
                </IonPage>
            )}
        </>
    );
};

export default Login;
