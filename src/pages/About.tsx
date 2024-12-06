import React, { useState, useEffect } from 'react';
import { IonContent, IonButton, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react';
import { MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const About: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>About</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <div className="ion-text-center">
                    <h1>About Us</h1>
                    <p>Here is a map, where you can find our locations!</p>

                   
                    <MapContainer
                        center={[51.505, -0.09]}  
                        zoom={13}                 
                        style={{ width: '100%', height: '400px' }}  
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                    </MapContainer>
                    <p>Our offices are in these locations</p>
                    <p>Berlin, London, Helsinki</p>
                    <IonButton expand="block" routerLink="/home">
                        Back to Home
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default About;


