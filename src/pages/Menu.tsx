import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Redirect, Route } from 'react-router';
import List from './List';
import Settings from './Settings';
import { homeOutline, logOutOutline, newspaperOutline } from 'ionicons/icons';

const Menu: React.FC = () => {
    const paths = [
        {name: 'Home', url: '/app/list', icon: homeOutline },
        {name: 'Settings', url: '/app/settings', icon: newspaperOutline },
    ];

  return (
    <IonPage>
        <IonMenu contentId="main">
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
{paths.map((item, index) => (
<IonItem routerLink={item.url} key={index}>
    {item.name}
</IonItem>
))}

            </IonContent>
        </IonMenu>

        <IonRouterOutlet id="main">
    <Route exact path="/app/list" component={List} />
    <Route exact path="/app/settings" component={Settings} />
    <Route exact path="app">
        <Redirect to="/app/list"/>
    </Route>
    </IonRouterOutlet>
    </IonPage>
  );
};

export default Menu;