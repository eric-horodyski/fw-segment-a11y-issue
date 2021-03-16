import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  const [selectedSegment, setSelectedSegment] = useState<string>("customers");

  const handleSegmentSelect = (segment: string) => {
    setSelectedSegment(segment);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSegment
          onIonChange={(e) => {
            handleSegmentSelect(e.detail.value!);
          }}
          value={selectedSegment}
        >
          <IonSegmentButton value="customers">Customers</IonSegmentButton>
          <IonSegmentButton value="employees">Employees</IonSegmentButton>
        </IonSegment>
      </IonContent>
    </IonPage>
  );
};

export default Home;
