import React, { useState } from 'react';
import { IonContent, IonButton, IonInput, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonPage, IonToast } from '@ionic/react';
import './Contact.css';  

const Contact: React.FC = () => {
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setShowToast(true);
        console.log('Your message was submitted !');
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Contact</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <div className="ion-text-center">
                    <h1>Contact Us</h1>
                    <img src="/person.png" alt="Logo" width="250" />
                    <p>If you have any questions or feedback, feel free to reach out by filling this form!</p>
                    <form onSubmit={handleSubmit}>
                        <IonInput 
                            placeholder="Enter your name" 
                            className="custom-input ion-margin-top"
                        />
                        <IonInput 
                            placeholder="Enter your email" 
                            className="custom-input ion-margin-top"
                        />
                        <IonInput 
                            placeholder="Write your message" 
                            className="custom-textarea ion-margin-top" 
                            textarea
                        />
                       <p>We normally get back to you in 1-3 business days!</p>
                        <IonButton 
                            type="submit" 
                            expand="block" 
                            className="ion-margin-top"
                        >
                            Submit
                        </IonButton>
                    </form>
                    
                    <IonButton 
                        expand="block" 
                        routerLink="/home" 
                        onClick={() => console.log('Navigating to Home page')}
                    >
                        Back to Home
                    </IonButton>
                </div>
            </IonContent>

            <IonToast
                isOpen={showToast}
                onDidDismiss={() => setShowToast(false)}
                message="Your message was successfully submitted!"
                duration={3000}
                position="top"
                color="success"
            />
        </IonPage>
    );
};

export default Contact;





