<template >
  <ion-page>
<!-- <ion-header>
      <ion-toolbar class="toolbar" color="dark">
        <ion-title class="titcle">Welcome to IvyFinder</ion-title>    
   </ion-toolbar> 
  </ion-header> !-->
    <ion-content class="pages">
        <div>
            <div class="custom-shape-divider-top-1631325369">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
          <header class= "header ion-padding">
            <h3><b>Welcome to Ivy Finder!</b></h3>
          </header>
          <ion-list>
              <ion-item slot="start">
                    <ion-thumbnail>
                      <img src="" />
                    </ion-thumbnail>
              </ion-item>
                <ion-button @click="takePhoto"> <!-- type="button" makes it so it doesn't submit the form!-->
                  <ion-icon  :icon="cameraFilled">
                  </ion-icon>
                </ion-button>

          </ion-list>    

  
        </div>
          
        <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="takePhoto">
            <ion-icon :icon="cameraFilled"></ion-icon>
         </ion-fab-button>
      </ion-fab>

    </ion-content>
  </ion-page>
</template>

<script >
import { cameraFilled } from 'ionicons/icons';
import { IonPage, IonFab, IonFabButton, IonIcon, IonContent,
        IonThumbnail, IonList, IonButton } from '@ionic/vue';

import { Plugins, CameraResultType, CameraSource }  from '@capacitor/core';




const { Camera } = Plugins;



export default  {
  name: 'Tab3',
  components: { IonPage, 
  IonContent, IonThumbnail, 
  IonList, IonIcon, IonButton, IonFab, IonFabButton},
  data() { //or setup()
      return {
        cameraFilled,
        previewImageUrl: null // '' or empty string also works
      };
  },
  methods: {
    async takePhoto() {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100
      });

      this.takenImageUrl = photo.webPath;
    }

    }
  }
      




// export default  {
//   name: 'Tab3',
//   components: { IonPage, IonFab, IonFabButton, IonThumbnail, IonIcon, IonList, IonContent, IonButton},
//   setup() {
//     const{ takePhoto } = usePhotoGallery();
//     return {
//       takePhoto,
//       cameraFilled
//     };
//   }
// }




// We can extract one specific plugin from Plugins


</script>


<style scoped>
.header {
  position: relative;
  width: 80%;
  border-radius: 0px 30px 30px 0px;
  border: 10px black;
  background-image: linear-gradient(135deg, greenyellow, rgb(100,192,33));
  color: rgb(20, 20, 20);
  
  margin-top: 10vh;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}

section {
  position: relative;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10vw;
}



.custom-shape-divider-top-1631325369 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1631325369 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 200px;
    transform: rotateY(180deg);
}

.custom-shape-divider-top-1631325369 .shape-fill {
    fill: #307442;
}


.test{
    --background: none;
    aspect-ratio: 600/900;
    background-image: url('./layer1.svg');
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
} 


</style>