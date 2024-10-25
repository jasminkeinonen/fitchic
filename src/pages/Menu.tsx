import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Menu.css';

const Menu: React.FC = () => {
    const history = useHistory();

    const navigateTo = (path: string) => {
        history.push(path);
    };

    return (
        <IonMenu contentId="main-content">
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem button onClick={() => navigateTo('/login')}>
                        <IonLabel>Login</IonLabel>
                    </IonItem>
                    <IonItem button onClick={() => navigateTo('/register')}>
                        <IonLabel>Register</IonLabel>
                    </IonItem>
                    <IonItem button onClick={() => navigateTo('/list')}>
                        <IonLabel> User List</IonLabel>
                    </IonItem>
                
                    <IonItem button onClick={() => navigateTo('/settings')}>
                        <IonLabel>User Settings</IonLabel>
                    </IonItem>
                    
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
