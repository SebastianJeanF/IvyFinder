<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="toolbar">
        <ion-title>Welcome to IvyFinder</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-segment @ionChange="segmentChanged($event)">
        <ion-segment-button>
          <ion-icon :icon="leafOutline"></ion-icon><ion-label>Basics</ion-label></ion-segment-button>
        <ion-segment-button><ion-label>Faq</ion-label></ion-segment-button>
      </ion-segment>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Photo Gallery</ion-title>
        </ion-toolbar>
      </ion-header>

      <input style="display: none" type="file" @change="onFileSelected" ref="fileInput" />
      <!-- <input style="display: none" type="file" @change="onFileSelected" ref="fileInput"/> -->
      <ion-button @click="$refs.fileInput.click()"></ion-button> 
      <ion-button @click="onUpload"></ion-button>
      <ion-grid>
        <ion-row>
     <ion-col size="6" :key="photo" v-for="photo in photos">
            <ion-img
              :src="photo.webviewPath"
              @click="showActionSheet(photo)" 
            ></ion-img> 
          </ion-col> 
        </ion-row>
      </ion-grid>
  
      <ion-fab vertical="bottom" horizontal="center" slot="fixed" class="button">
        <ion-fab-button  @click="takePhoto()">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>
"
<script>
import { camera, trash, close } from 'ionicons/icons';
import {
  actionSheetController,
  IonPage,
  IonHeader,
  IonFab,
  IonFabButton,
  IonIcon,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonSegment,
  IonSegmentButton
} from '@ionic/vue';
import { usePhotoGallery, UserPhoto } from '@/composables/usePhoto';
import { defineComponent} from 'vue';
import axios from 'axios';


export default {
  name: 'Tab3',
  components: {
    IonHeader,
    IonFab,
    IonIcon,
    IonFabButton,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonButton,
    IonSegment,
    IonSegmentButton
  },
  setup() {
 
    




    const { photos, takePhoto, deletePhoto} = usePhotoGallery();
  // the type of photo is UserPhoto
    const showActionSheet = async (photo) => {
      const actionSheet = await actionSheetController.create({
        header: 'Photos',
        buttons: [
          {
            text: 'Delete',
            role: 'destructive',
            icon: trash,
            handler: () => {
              deletePhoto(photo);
            },
          },
          {
            text: 'Cancel',
            icon: close,
            role: 'cancel',
            handler: () => {
              // Nothing to do, action sheet is automatically closed
            },
          },
        ],
      });
      await actionSheet.present();
    };

    return {
   photos,
   takePhoto,
   showActionSheet,
    camera,
    trash,
    close,
    };
  },
};
</script>

<style scoped>
.toolbar{
  --ion-background-color: #307442;
  color: white;
}
.button{
  transform: translateY(-150%)
}


</style>
