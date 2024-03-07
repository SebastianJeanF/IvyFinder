<template>
  <ion-page>
    <ion-fab vertical="bottom" horizontal="center" class="fab">
      <router-link to="/tabs/tab3">
     <ion-fab-button> <!-- href="/tabs/tab3" !-->
          <ion-icon :icon="cameraFilled"  @click="tabColor = 'var(--color)'"></ion-icon>
        </ion-fab-button>
      </router-link>
    </ion-fab>

    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" class="bar"> 
        <ion-tab-button class="tabtest" tab="tab1" href="/tabs/tab1"  :style="{color: tabColor}"  @click="tabColor = 'auto'">
          <ion-icon :icon="homeFilled" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" class="tabtest test" :style="{color: tabColor}" @click="tabColor = 'auto'" href="/tabs/tab2">
          <ion-icon :icon="leafSharp" />
          <ion-label>Info</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" disabled="true">
        
      
        </ion-tab-button> 
      

        <ion-tab-button tab="tab4" class="tabtest" :style="{color: tabColor}" @click="tabColor = 'auto'" href="/tabs/tab4">
          <ion-icon :icon="medkit" />
          <ion-label>Treat</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab5" class="tabtest" :style="{color: tabColor}" @click="tabColor = 'auto'" href="/tabs/tab5">
          <ion-icon :icon="navigateSharp" />
          <ion-label>Map</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonFabButton, IonFab} from '@ionic/vue';
import { cameraFilled, medkit, eyeOutline, navigateSharp, homeFilled, bookFilled, shieldHalfOutline, leafSharp} from 'ionicons/icons';


export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet, IonFabButton, IonFab },
  data() {
    return {
      cameraFilled, 
      navigateSharp,
      homeFilled,
      bookFilled,
      medkit,
      eyeOutline,
      shieldHalfOutline,
      leafSharp,
      tabColor: 'auto'
      };
  },
  methods: {
    // tabOff() {
    //   const test = async getSelected => 
    //   console.log(test)
    // }
    // unselectTab()  {
    //   self.tabColor ='red !important'
    //   console.log(self.tabColor)
    // }

    }
  }
</script>

<style scoped>
ion-tab-button{
  font-size: 12px
}

:root {
  background: rgb(230,235,230);
}
.bar{

  
   border-radius: 15px 15px 0px 0px ; 
 
  
  
  
}
.tabtest{
  position: relative;
  --padding-top: 4px;
  --padding-bottom: 4px;
}
.fab{
  --ion-color-primary: linear-gradient(135deg, #387442, #3d7045, rgb(123, 172, 123));
}


</style>
