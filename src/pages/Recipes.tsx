import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
import './SharedStyles.css';

const Recipes: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Recipes</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <h1 className="ion-text-center">Recipes</h1>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Tuna Sandwich</IonCardTitle>
                    </IonCardHeader>
                    <img src="/sandwich.jpg" alt="Logo" width="250" />

                    <IonCardContent>
                        <strong>Difficulty: Easy</strong><br />
                        Ingredients: Quinoa, cucumber, cherry tomatoes, feta cheese.<br />
                        Instructions: Cook tuna, chop veggies, mix and season.<br />
                        <IonButton expand="block" color="primary" className="ion-margin-top">
                            See More Recipes
                        </IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Recipes;
