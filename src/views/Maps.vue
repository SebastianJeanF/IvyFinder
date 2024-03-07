<template >
  <ion-page>
<!-- <ion-header>
      <ion-toolbar class="toolbar" color="dark">
        <ion-title class="titcle">Welcome to IvyFinder</ion-title>    
   </ion-toolbar> 
  </ion-header> !-->
        <ion-toolbar class="toolbar" >
        <ion-title>Welcome to IvyFinder</ion-title>    
   </ion-toolbar>
    <ion-content >
        <div class="container">

         <div class="custom-shape-divider-top-1633904058">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
        </div>


        <header class= "header ion-padding">
          <ion-card-title>Gallery</ion-card-title>
        </header>
         <swiper :spaceBetween="50" :slidesPerView="1" :navigation="true"  :pagination="true" :history='{
              "key": "slide"
            }'  class="mySwiper" style="background: grey">
             <!-- rgba(121, 200, 241, 0.1) color used !-->
          <swiper-slide style="background:rgb(241, 255, 242)">
            <!-- <div class="swiper-zoom-container"> -->
              <ion-card>
                <ion-card-content>  
                  <img class="image" src="./IvyMaps/EasternPoisonIvyMap.png"/>
                  <ion-text>
                    <img class="logo" src="./Photos/poison-ivy-shape.jpg"/>
                    <div class="text" style="color: #5aae61">Poison Ivy (Eastern)</div>
                  </ion-text>
                </ion-card-content>
              </ion-card>
          
            </swiper-slide>

            <swiper-slide style="background: rgb(221, 250, 224)">
                       
              <ion-card>
                <ion-card-content>
                  <img class="image" src="./IvyMaps/WesternPoisonIvyMap.png"/>
                   
                  <ion-text>
                    <img class="logo" src="./Photos/poison-ivy-westernmap.jpg" />
                    <div class="text" style='color: #1b7837'>Western Poison Ivy</div>
                <!-- #1b7837 color for Western Poison Ivy !-->
                 </ion-text>
                  </ion-card-content>
                  </ion-card></swiper-slide>
            <swiper-slide style="background: rgb(247, 247, 223)" > 
              <ion-card>
                <ion-card-content>
                   <img class="image" src="./IvyMaps/AtlanticPoisonOakMap.png"/>
                  
                  <ion-text>
                    <img class="logo" src="./Photos/poison-oak2.jpg" />
                    <div class="text" style="color: #ff7f00">Atlantic Poison Oak </div>
                <!-- #ff7f00 color for Poison Oak Atlantic !-->
                 </ion-text>
                  </ion-card-content>
                  </ion-card></swiper-slide>
              <swiper-slide style="background: rgb(247, 236, 223)">
              <ion-card>
                <ion-card-content>
                   <img class="image" src="./IvyMaps/PacificPoisonOakMap.png"/>
                  
                  <ion-text>
                    <img class="logo" src="./Photos/PoisonOakmap.jpg" />
                    <div class="text" style="color: #fc4e2a">Pacific Poison Oak</div>
                <!-- #fc4e2a color for Pacific Poison Oak !-->
                 </ion-text>
                  </ion-card-content>
                  </ion-card></swiper-slide>
              <swiper-slide style="background-color: rgb(255, 241, 243)">
              <ion-card>
                <ion-card-content>
                  <img class="image" src="./IvyMaps/PoisonSumacMap.png"/>
                  <ion-text>
                    <img class="logo" src="./Photos/poison_sumac2.jpg" />
                    <div class="text" style="color: #f781bf">Poison Sumac</div>
                <!-- #f781bf color for Sumac !-->
                  </ion-text>
                  </ion-card-content>
                  </ion-card></swiper-slide>
              </swiper>
          <div id="map"></div>
  
        <ion-card-header>
          </ion-card-header>
        <ion-card-title>
        </ion-card-title>
        <ion-card-subtitle>
        </ion-card-subtitle>
        </div>

    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonText, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles

import 'swiper/swiper.min.css';
//import 'swiper/css';

import 'swiper/components/pagination/pagination.min.css';
//import "swiper/css/pagination"

import "swiper/components/navigation/navigation.min.css";
import "swiper/components/zoom/zoom.min.css";
import './style.css';


// import Swiper core and required modules
import SwiperCore, {
  Navigation,Pagination,History,Zoom
} from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation,Pagination,History,Zoom]);

export default  {
  name: 'Maps',
  components: { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonText, Swiper, SwiperSlide},
};




</script>

<style scoped>
.swiper-slide{
  background-color: rgb(247, 236, 223)
}
.mySwiper{
border-width: 3px;
border-style: solid none solid none;
border-color: grey
}
ion-text{
  padding-top: 5px;
  display: grid;
  grid-template-columns: 40% 60%;
  height: 20vh;
}
ion-text img{
  border-radius: 15px
}
ion-text div{
  align-content: center;
  margin: auto;
  padding-bottom: 15px
}

ion-card{
	box-shadow: none;
  background-color: transparent
}
ion-card-content{
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  font-weight: 700;
  font-size: 20px;
  background-color: transparent
}
/* :style="{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}" */
.image{
  border-radius: 15px
}
.container{
  background:rgba(128, 128, 128, 0.2);
  padding-bottom: 50px
}
.header {
  position: relative;
  margin: auto;
  width: 80%;
  border-radius: 30px 30px 30px 30px;
  background-image: linear-gradient(135deg, greenyellow, rgb(100,192,33));
  color: rgb(20, 20, 20);
  text-align: center;
  margin-top: 2vh;
  background-image: linear-gradient(135deg, #eefa7e, #80ff72); 
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



.custom-shape-divider-top-1633904058 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1633904058 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 55px;
    transform: rotateY(180deg);
}

.custom-shape-divider-top-1633904058 .shape-fill {
    fill: #307442;
}

/** For mobile devices **/
@media (max-width: 767px) {
    .custom-shape-divider-top-1633904058 svg {
        width: calc(100% + 1.3px);
        height: 90px;
    }
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