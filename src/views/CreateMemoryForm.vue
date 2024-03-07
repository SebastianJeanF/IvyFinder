<template>
  <ion-page>
  <ion-content>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" required v-model="enteredTitle" />
      </ion-item>
      <ion-item>
        <ion-thumbnail slot="start">
          <img :src="takenImageUrl" />
        </ion-thumbnail>
        <ion-button type="button" fill="clear" @click="takePhoto">
          <ion-icon slot="start" :icon="camera"></ion-icon>
          Take Photo
        </ion-button>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea rows="5" v-model="enteredDescription"></ion-textarea>
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="block">Save</ion-button>
  </form>
  <ion-button @click="takePhotos"></ion-button>
  <img :src="image2"  alt="Awaiting model">
 </ion-content>
</ion-page>
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonThumbnail,
  IonIcon,
  IonPage,
  IonContent
} from "@ionic/vue";

import axios from 'axios';
import { camera } from 'ionicons/icons';
import { Capacitor } from '@capacitor/core';
import {
  Camera,
  CameraSource,
  CameraResultType,
  Photo,
} from '@capacitor/camera';

export default {
  emits: ["save-memory"],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
    IonThumbnail,
    IonIcon,
    IonPage, 
    IonContent
  },
  data() {
    return {
      enteredTitle: "",
      enteredDescription: "",
      takenImageUrl: null,
      camera,
      image2: null
    };
  },
  methods: {   
    
    async takePhoto() {
      const cameraPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100,
      });
  
      const fileName = new Date().getTime() + '.jpeg';
      const response = await fetch(cameraPhoto.webPath);
      const blob = await response.blob();
      const fd = new FormData;
      fd.append('photo', blob, fileName)
      console.log("this is fd, or probably data", fd)
      axios.post('http://10.0.0.22:5000/detect', fd)
      .then((response) => {
        console.log("Success!" + response)
      })
      .catch(function (e) {
        console.log(e); 
      })
    },

    submitForm() {
      const memoryData = {
        title: this.enteredTitle,
        imageUrl: this.takenImageUrl,
        description: this.enteredDescription,
      };
      // this.$emit("save-memory", memoryData);

     
    },
  },
};
</script>