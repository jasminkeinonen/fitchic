import {
    IonContent, IonHeader,IonPage,IonTitle,IonToolbar,IonList,IonItem,IonLabel,IonToggle,IonButton,IonInput,IonButtons,IonMenuButton,
} from '@ionic/react';
import React, { useState } from 'react';

const Settings: React.FC = () => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true); 
    const [newPassword, setNewPassword] = useState(''); 

    const handleSavePassword = () => {
        console.log("New password saved:", newPassword);
        setNewPassword('');
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
