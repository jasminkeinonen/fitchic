import {
    IonAvatar, IonButton,IonButtons,IonCard,IonCardContent,IonChip,IonContent,IonDatetime,IonFab,IonFabButton,IonHeader,IonIcon,IonImg,IonItem, IonLabel, IonMenuButton,
    IonModal,IonPage,IonRefresher,IonRefresherContent,IonSearchbar,IonSegment,IonSegmentButton,IonSkeletonText,IonTitle,IonToolbar,useIonAlert,useIonToast,useIonViewWillEnter,
  } from '@ionic/react';
  import { addOutline, trashBinOutline } from 'ionicons/icons';
  import React, { useEffect, useRef, useState } from 'react';
  import './List.css';
  
  const List: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [users, setUsers] = useState<any[]>([]);
    const [selectedUser, setSelectedUser] = useState<any>(null);
    const modalRef = useRef<HTMLIonModalElement>(null);
    const pageRef = useRef(null);
    const [activeSegment, setActiveSegment] = useState<string>('details');
  
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api?results=10');
        if (!response.ok) throw new Error('Network response was not ok');
        const { results } = await response.json();
        setUsers(results);
      } catch (error) {
        console.error('Error fetching users:', error);
        showToast({
          message: 'Failed to load users. Please try again later.',
          duration: 2000,
          color: 'danger',
        });
      } finally {
        setLoading(false);
      }
    };
  
    useIonViewWillEnter(() => {
      setLoading(true);
      fetchUsers();
    });
  
    const [showAlert] = useIonAlert();
    const [showToast] = useIonToast();
  
    const clearList = () => {
      showAlert({
        header: 'Confirm!',
        message: 'Warning! Are you sure you want to delete all friends?',
        buttons: [
          { text: 'Cancel', role: 'cancel' },
          {
            text: 'Delete',
            handler: () => {
              setUsers([]);
              showToast({
                message: 'All friends deleted',
                duration: 2000,
                color: 'danger',
              });
            },
          },
        ],
      });
    };
  
    const doRefresh = async (event: any) => {
      await fetchUsers();
      event.detail.complete();
    };
  
    return (
      <IonPage ref={pageRef}>
        <IonHeader>
          <IonToolbar color={'primary'}>
            <IonButtons slot="start"><IonMenuButton /></IonButtons>
            <IonTitle>My Fit Chic Friends</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={clearList}>
                <IonIcon slot="icon-only" icon={trashBinOutline} color="light" />
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <IonToolbar color="primary"><IonSearchbar /></IonToolbar>
        </IonHeader>
  
        <IonContent>
          <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
            <IonRefresherContent />
          </IonRefresher>
  
          {loading ? (
            [...Array(10)].map((_, index) => (
              <IonCard key={index}>
                <IonCardContent>
                  <IonItem lines="none">
                    <IonAvatar slot="start"><IonSkeletonText /></IonAvatar>
                    <IonLabel>
                      <IonSkeletonText animated style={{ width: '150px' }} />
                      <IonSkeletonText />
                    </IonLabel>
                    <IonChip slot="end" color="primary"></IonChip>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            ))
          ) : (
            users.map((user, index) => (
              <IonCard key={index} onClick={() => setSelectedUser(user)}>
                <IonCardContent>
                  <IonItem lines="none">
                    <IonAvatar slot="start"><IonImg src={user.picture.large} /></IonAvatar>
                    <IonLabel>
                      {user.name.first} {user.name.last}
                      <p>{user.email}</p>
                    </IonLabel>
                    <IonChip slot="end" color="primary">{user.nat}</IonChip>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            ))
          )}
  
          <IonModal
            ref={modalRef}
            isOpen={selectedUser !== null}
            onIonModalDidDismiss={() => setSelectedUser(null)}
          >
            <IonHeader>
              <IonToolbar color="light">
                <IonButtons slot="start">
                  <IonButton onClick={() => modalRef.current?.dismiss()}>Close</IonButton>
                </IonButtons>
                <IonTitle>
                  {selectedUser?.name.first} {selectedUser?.name.last}
                </IonTitle>
              </IonToolbar>
              <IonToolbar color="light">
                <IonSegment
                  value={activeSegment}
                  onIonChange={(e) => setActiveSegment(e.detail.value!)}
                >
                  <IonSegmentButton value="details">Details</IonSegmentButton>
                  <IonSegmentButton value="calendar">Calendar</IonSegmentButton>
                </IonSegment>
              </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
              {activeSegment === 'details' && (
                <IonCard>
                  <IonAvatar slot="start"><IonImg src={selectedUser?.picture.large} /></IonAvatar>
                  <IonCardContent>
                    <IonItem lines="none">
                      <IonLabel>
                        {selectedUser?.name.first} {selectedUser?.name.last}
                        <p>{selectedUser?.email}</p>
                      </IonLabel>
                    </IonItem>
                  </IonCardContent>
                </IonCard>
              )}
              {activeSegment === 'calendar' && <IonDatetime />}
            </IonContent>
          </IonModal>
  
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton id="card-modal">
              <IonIcon icon={addOutline} />
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonPage>
    );
  };
  
  export default List;
  