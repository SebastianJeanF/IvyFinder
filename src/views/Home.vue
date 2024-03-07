<template >
  <ion-page>
<!-- <ion-header>
      <ion-toolbar class="toolbar" color="dark">
        <ion-title class="titcle">Welcome to IvyFinder</ion-title>    
   </ion-toolbar> 
  </ion-header> !-->
    <ion-content :fullscreen="true" class="content">

	<img class="demo1" src="./Photos/background.jpeg" />
            <!-- <div class="custom-shape-divider-top-1631325369">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div> !-->
          <div class="custom-shape-divider-top-1633904058">
    <svg class="icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
        </div>
          <header class="ion-padding">
            <div></div>
            <h3><b>Welcome to IvyFinder!</b></h3>
          </header>
	<ion-text class="title">Make finding poison-ivy easy</ion-text>
          
          
<svg style="width:0;height:0;position:absolute;" aria-hidden="true" focusable="false">
  <linearGradient id="my-cool-gradient">
    <stop offset="20%" stop-color="rgb(44, 177, 44)" />
    <stop offset="50%" stop-color="#347e48" />
    <stop offset="100%" stop-color=" #307442" />

    
  </linearGradient>
</svg>

<div class="container">
<ion-text class="title">Explore</ion-text>
<div class="line"></div>
<ion-grid>
  <ion-row>
    <ion-col>
	<router-link to="/tabs/tab2">
	
     <ion-card class="tab-card cards cards2">
		<div>
			<img class="demo" src="./Photos/leaves.jpg" />
            <ion-card-header>
            <ion-card-title style="color: white">Poisonous Plants</ion-card-title>
            </ion-card-header>
			
            <ion-card-content class="textcontent1" style="color: white">
			<ion-icon :icon="leafSharp" />
             Learn more about the three rash-inducing plants 
            </ion-card-content>
            <waves></waves>
		</div>
          </ion-card>
	</router-link>
    </ion-col>
    <ion-col>
	<router-link  to="/tabs/tab3">
     <ion-card class="tab-card tab3 cards cards3">
		<!-- <div class="border"></div> -->
		<div>
			<img class="demo" src="./Photos/bladdernut.jpg" />
            <ion-card-header>
            <ion-card-title style="color: white">Object Detection</ion-card-title>
            </ion-card-header>
            <ion-card-content class="textcontent1" style="color: white">
				<ion-icon :icon="cameraFilled" />
              Use machine learning to detect poison ivy
            </ion-card-content>
            <waves></waves>
		</div>
          </ion-card>
	</router-link>
    </ion-col>
  </ion-row>
  <ion-row>
	
    <ion-col class="ion-align-self-center">
	<router-link  to="/tabs/tab4">
      <ion-card class="tab-card cards cards1">
		<div>
			<img class="demo" src="./Photos/sprouting2.jpg" />
            <ion-card-header>
            <ion-card-title style="color: white">Urushiol</ion-card-title>
            </ion-card-header>
			
            <ion-card-content class="textcontent" style="color: white">
				<ion-icon :icon="medkit" />
              Learn how to treat plant rashes
            </ion-card-content>
		
            <waves></waves>
		</div>
          </ion-card>
	</router-link>
    </ion-col>
    <ion-col>
	<router-link to="/tabs/tab5">
    <ion-card class="tab-card cards cards4 ">
		<img class="demo" src="./Photos/test_map.jpg" />
    <!-- <img class="demo" src="http://127.0.0.1:5000/static/rubus.jpeg" /> -->
            <ion-card-header>
            <ion-card-title style="color: white">Map</ion-card-title>
            </ion-card-header>
			
            <ion-card-content class="textcontent" style="color: white">
			<ion-icon :icon="navigateCircleSharp" />
              Find location of plants near you
            </ion-card-content>
            <waves class="paddidng"></waves>
    </ion-card>
	</router-link>
    </ion-col>
  </ion-row>
</ion-grid>
</div>
          <!-- <div class="plant">
            <ion-thumbnail slot="end">
              <img src="./fern.png">
            </ion-thumbnail>
          </div> -->


 
        <div class="shadow"></div>
        <div style="margin-bottom: 50px"></div>
    </ion-content>
  </ion-page>
</template>


<script>
import { IonPage, IonContent, IonThumbnail, IonText, IonRow, IonGrid, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent}  from '@ionic/vue';
import { cameraFilled, medkitFilled, eyeOutline, navigateCircleSharp, homeFilled, bookFilled, leafSharp, medkit, leafOutline} from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles

import 'swiper/swiper.min.css';
//import 'swiper/css';

import 'swiper/components/pagination/pagination.min.css';
//import "swiper/css/pagination"

import "swiper/components/navigation/navigation.min.css";

import './style.css';


// import Swiper core and required modules
import SwiperCore, {
  Pagination, Navigation, History
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, History]);



export default {
  name: 'homepage',
  components: { IonPage, IonContent, //IonThumbnail, 
  IonRow, IonGrid, IonCol, IonCard, IonCardHeader, IonCardTitle, IonText
  //Swiper, SwiperSlide
  },
  setup() {
	return{
		leafSharp,
		cameraFilled, medkitFilled, eyeOutline, navigateCircleSharp, homeFilled, bookFilled, medkit, 
	};
  }
}
</script>


<style scoped>
*{
	box-sizing: border-box;
  
}
shadow{
  position: fixed;
  bottom:
}
h3{
  margin-top: 16px;
  margin-bottom: 10px;
}
.textcontent{
	text-align: center; 
	margin-bottom: 10px;
	color: "white";
}
.textcontent1{
	text-align: center;
	margin-bottom: 1px;
	color: "white";
}
.demo{
opacity: 90%;
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 120px;
  
}

.demo1{
opacity: 80%;
  position: absolute;
  left: 0;
  top: 10px;
  
}


header {
  position: relative;
  width: 80%;
  border-radius: 0px 30px 30px 0px;
  border: 10px black;
  /* background-image: linear-gradient(135deg, greenyellow, rgb(100,192,33));#7ee8fa */
  background-image: linear-gradient(135deg, #eefa7e, #80ff72); 
  color: rgb(20, 20, 20);
  
  margin-top: 10vh;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.25), 6px 6px 20px 0 rgba(0, 0, 0, 0.20);
  text-shadow: 2px 2px 4px white;
}
header div{

  border-top: 6px solid green;
  border-radius: 100px 100px 100px 100px;
  transform: translate(-10px, 0px)

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
   z-index: -1;
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
.plant{
  position: relative;
  transform:translateX(30%);
  transform:translateY(-30%);
}

.title{
	position: relative;
	display: flex;
	justify-content: center;
	text-align: center;
  font-size: 20px;
  padding: 8px;
  font-weight: bold;
	
  margin: auto;
  color: white;
	transform: translateY(80%);
 /* overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: block; */
  line-height: 1em; /* a */
  max-height: 2em; 
  margin-bottom: 50px;
  background: linear-gradient(135deg, #3d7045, rgb(81, 150, 81), #387442);
  width: 80%;
  border-radius: 10px;
  box-shadow: 3px 3px 8px 0 rgba(0, 0, 0, 0.25), 4px 4px 20px 0 rgba(0, 0, 0, 0.20); 
}
.line{
background: linear-gradient(-71deg,#4a6ee0,#15c39a 95%);
padding: 2px;
width: 90%;
margin: auto;
border-radius: 5px;
box-shadow: 3px 3px 8px 0 rgba(0, 0, 0, 0.25), 4px 4px 20px 0 rgba(0, 0, 0, 0.20); 

}

.tab-card{
	margin: 0px;
	opacity: 100%;
	color: rgb(8, 8, 8);
	box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.25), 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.tab3{
	--background: linear-gradient(135deg, yellow, rgb(123, 230, 47));
}
ion-card-title{
	font-size: 20px;
	display: flex;
	justify-content:center;
}

.border{
background: linear-gradient(-71deg,#4a6ee0,#15c39a 95%);
padding: 10px;
}



body
{
	margin: 0;
	padding: 0;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background: #333;
	/* font-family: 'Poppins', sans-serif; */
}
.container
{
position: relative;
text-shadow: 2px 2px 10px black;
border-radius: 20px 20px 0 0;
background: rgb(176, 228, 176); 
box-shadow: 0px -4px 8px 0 rgba(0, 0, 0, 0.25), 0px -6px 20px 0 rgba(0, 0, 0, 0.20);
	
}
.container .cards{
	position: relative;
	width: 43vw;

	/* height: 400px; */
	background: #000;
	margin: 5px;
	/* display: flex;
	justify-content: center;
	align-items: center; */
}
.cards2, .cards3{
  height:48vh;
}
.container .cards:before
{
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 50%;
	height: 100%; 
	background: rgba(255,255,255,.1);
	z-index: 20;
	pointer-events: none;
}
.container .cards1,
.container .cards:nth-child(1) .overlay
{
	background: linear-gradient(45deg,#491eac,#f7308c)
}
.container .cards2,
.container .cards:nth-child(2) .overlay
{
	background: linear-gradient(45deg,#28ee0e,#09afff)
}
.container .cards3,
.container .cards:nth-child(3) .overlay
{
	background: linear-gradient(45deg,#e91e63,#ffeb3b);
  box-shadow:0px 4px 8px 0 rgba(38, 83, 0, 0.5), 
  0px 6px 20px 0 rgba(106, 124, 2, 0.5),
  0px -4px 8px 0 rgba(0, 0, 0, 0.25), 
  0px -6px 20px 0 rgba(0, 0, 0, 0.20);
}
.container .cards4
{
	background: linear-gradient(45deg,#09ffea,#982aff)
}
.container .cards .imgBox
{
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}
.container .cards .imgBox h2
{
	margin: 10px 0 0;
    padding: 0;
    color: #fff;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
}
.container .cards .overlay
{
	position: absolute;
	bottom: 20px;
	right: 20px;
	width: 50px;
	height: 50px;
	box-shadow: 0 2px 5px rgba(0,0,0,.2);
	box-sizing: border-box;
	cursor: pointer;
	border-radius: 50%;
	transition: 0.5s;
}
.container .cards .overlay:hover
{
	bottom: 0;
	right: 0;
	width: 100%;
	height: 100%;
	box-shadow: none;
	opacity: .9;
	border-radius: 0;
}
.container .cards .overlay:before
{
	content: 'Read';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	color: #fff;
	font-size: 12px;
	text-transform: uppercase;
	font-weight: 500;
	letter-spacing: 1px;
	font-size: 900;
	display: flex;
	justify-content: center;
	align-items: center;
	transition-delay: 0.5s;
}
.container .cards .overlay:hover:before
{
	display: none;
	transition-delay: 0s;
}
.container .cards .content
{
	padding: 20px;
	box-sizing: border-box;
	z-index: 1;
	pointer-events: none;
	opacity: 0;
	visibility: hidden;
	transition: 0s;
	color: #fff;
}
.container .cards .content h2
{
	margin: 0;
	padding: 0;
}
.container .cards .overlay:hover ~ .content
{
	opacity: 1;
	visibility: visible;
	transition: 0.2s;
	transition-delay: 0.5s;
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
    /* fill: #307442; */
    fill: url(#my-cool-gradient) #447799;
}

/** For mobile devices **/
@media (max-width: 767px) {
    .custom-shape-divider-top-1633904058 svg {
        width: calc(100% + 1.3px);
        height: 90px;
    }
}
.icon {
  /* gradient and fallback color */
  fill: url(#my-cool-gradient) #447799;
}
</style>
