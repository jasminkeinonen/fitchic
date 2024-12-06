import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonImg } from '@ionic/react';
import './SharedStyles.css';

const Workout: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Workouts</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <h1 className="ion-text-center">Let's Get Moving!</h1>

                <IonCard>
                    <IonImg src="/public/Yoga.png" alt="Yoga" className="workout-image" />
                    <IonCardHeader>
                        <IonCardTitle>Yoga</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className="workout-details">
                        <p>- Warm-up exercises</p>
                        <p>- Classic yoga poses 35 minutes</p>
                        <p>- Cool down and stretching</p>
                        <IonButton expand="block" color="primary" className="ion-margin-top">
                            Start Workout
                        </IonButton>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonImg src="/public/Strong.png" alt="Strength Training" className="workout-image" />
                    <IonCardHeader>
                        <IonCardTitle>Strength Workout</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className="workout-details">
                        <p>- Warm-up exercises</p>
                        <p>- Strength training routine 45 minutes</p>
                        <p>- Cool down and stretching</p>
                        <IonButton expand="block" color="primary" className="ion-margin-top">
                            Start Workout
                        </IonButton>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonImg src="/public/Cardio.png" alt="Cardio Workout" className="workout-image" />
                    <IonCardHeader>
                        <IonCardTitle>Cardio Workout</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className="workout-details">
                        <p>- Warm-up exercises</p>
                        <p>- High-intensity intervals 30 minutes</p>
                        <p>- Cool down and stretching</p>
                        <IonButton expand="block" color="primary" className="ion-margin-top">
                            Start Workout
                        </IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Workout;

