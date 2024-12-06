import React from 'react';
import { IonContent, IonCard, IonButton, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, IonCardContent, IonButtons, IonMenuButton, IonToast } from '@ionic/react';


const Home: React.FC = () => {
    return (
        <IonPage>
                    <IonHeader>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonMenuButton />
                            </IonButtons>
                            <IonTitle>Home</IonTitle>
                        </IonToolbar>
                    </IonHeader>

            <IonContent className="ion-padding">
                <div className="ion-text-center">
                    <h1>Welcome to Fit Chic!</h1>
                    <img src="/Yoga.png" alt="Logo" width="300" />
                    <p>What would you like to do today?</p>

                    <IonButton expand="block" routerLink="/workout">
                     Go Workout
                      </IonButton>
                    <IonButton expand="block" routerLink="/recipes">
                     Recipes
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
