import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonToggle, IonButton, IonInput, IonButtons, IonMenuButton,
} from '@ionic/react';
import React, { useState } from 'react';

const Settings: React.FC = () => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true); 
    const [newPassword, setNewPassword] = useState('');
    const [newEmail, setNewEmail] = useState(''); 

    const handleSavePassword = () => {
        console.log("New password saved:", newPassword);
        setNewPassword('');
    };

    const handleSaveEmail = () => {
        console.log("New email saved:", newEmail);
        setNewEmail('');
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>User Settings</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList>
                    <IonItem>
                        <IonLabel>Enable Notifications</IonLabel>
                        <IonToggle
                            checked={notificationsEnabled}
                            onIonChange={e => setNotificationsEnabled(e.detail.checked)}
                        />
                    </IonItem>

                    {/* New Email Input Field */}
                    <IonItem>
                        <IonLabel position="stacked">New Email Address</IonLabel>
                        <IonInput
                            type="email"
                            value={newEmail}
                            placeholder="Enter new email address"
                            onIonInput={e => setNewEmail((e.target as HTMLInputElement).value)}
                        />
                    </IonItem>
                    <IonButton expand="full" onClick={handleSaveEmail}>
                        Save New Email
                    </IonButton>

                    {/* New Password Input Field */}
                    <IonItem>
                        <IonLabel position="stacked">New Password</IonLabel>
                        <IonInput
                            type="password"
                            value={newPassword}
                            placeholder="Enter new password"
                            onIonInput={e => setNewPassword((e.target as HTMLInputElement).value)}
                        />
                    </IonItem>
                    <IonButton expand="full" onClick={handleSavePassword}>
                        Save New Password
                    </IonButton>

                    {/* Theme Toggle */}
                    <IonItem>
                        <IonLabel>Select Theme</IonLabel>
                        <IonToggle
                            checked={false}
                            onIonChange={e => console.log("Theme toggled:", e.detail.checked)}
                        />
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Settings;

