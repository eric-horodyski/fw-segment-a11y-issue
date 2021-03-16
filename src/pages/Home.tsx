import React, { useEffect, useRef, useState } from "react";
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
  const ionSegment = useRef<HTMLIonSegmentElement>(null);

  const handleSegmentSelect = (e: any) => {
    setSelectedSegment(e.detail.value!);
  };

  const handleSegmentClick = (e: any) => {
    pressedToSelected();
  };

  useEffect(() => {
    setTimeout(() => {
      pressedToSelected();
    }, 100);
  }, [ionSegment.current]);

  const pressedToSelected = () => {
    if (ionSegment.current) {
      ionSegment.current
        .querySelectorAll("ion-segment-button")
        .forEach((node) => {
          let button = node.shadowRoot!.querySelector("button")!;
          button.setAttribute(
            "aria-selected",
            button.getAttribute("aria-pressed")!
          );
        });
    }
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
          ref={ionSegment}
          role="tablist"
          onIonChange={(e) => handleSegmentSelect(e)}
          value={selectedSegment}
        >
          <IonSegmentButton
            value="customers"
            role="tab"
            onClick={(e) => handleSegmentClick(e)}
          >
            Customers
          </IonSegmentButton>
          <IonSegmentButton
            value="employees"
            role="tab"
            onClick={(e) => handleSegmentClick(e)}
          >
            Employees
          </IonSegmentButton>
        </IonSegment>
      </IonContent>
    </IonPage>
  );
};

export default Home;
