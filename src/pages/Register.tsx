import { IonContent, IonCard, IonButton, IonButtons, IonHeader, IonIcon, IonInput, IonFooter, IonPage, IonTitle, IonToolbar, IonCardContent, IonBackButton } from '@ionic/react';
import {checkmarkDoneOutline} from 'ionicons/icons';
import {personCircleOutline} from 'ionicons/icons';
import React from 'react';
import Logo from '../assets/hmmh.jpg'

const Register: React.FC = () => {
        const doLogin = (event: any) => {
            event.preventDefault();
            console.log('doLogin');
        };

    return (
        <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
            <IonButtons slot="start">
<          IonBackButton defaultHref='/'   />
            </IonButtons>

          <IonTitle>Create Account</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard>
            <IonCardContent>
                <form onSubmit={doLogin}>
                    <IonInput fill="outline" labelPlacement="floating" label="Email"
                    type="email" placeholder="emailaddress@adress.com"></IonInput>
                    <IonInput className="ion-margin-top" fill="outline" labelPlacement="floating" label="Password"
                    type="password" placeholder="******"></IonInput>
                    <IonButton type="submit" expand="block"className="ion-margin-top" >Create my account
                        <IonIcon icon={checkmarkDoneOutline} slot="end"></IonIcon>
                    </IonButton>
                </form>
            </IonCardContent>
        </IonCard>
      </IonContent>
      
    </IonPage>
    )
};

export default Register;