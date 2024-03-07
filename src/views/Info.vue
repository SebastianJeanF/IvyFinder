<template >
  <ion-page>
  <ion-header>
      <ion-toolbar>
        <ion-title>Welcome to IvyFinder</ion-title>    
   </ion-toolbar> 
  </ion-header>
    <ion-content class="content">
    <div class="background"></div>
        

 <ion-card class="card-header">
   <div class="card-border"></div>
            <ion-card-header>
            <ion-card-title style="color: black; text-align: center;"> <img src="./Photos/urushiol.jpg" style="border-radius: 15px; height: 25vh;" />Urushiol
            </ion-card-title>
            </ion-card-header>
           
            <ion-card-content style="margin:5px; text-align: center; color: black">
Urushiol is an invisible natural oil found specifically on <strong>the leaves, stems, and roots of poison ivy, poison oak, and poison sumac.</strong> It is the notorious substance that causes the poisonous rash. 
            </ion-card-content>
            <waves></waves>
          </ion-card>

<section id="sec-symp">
    <img src="./Photos/urushiol-symptoms.jpg"/>
    <div>The human immune system <strong>misidentifies the urushiol as a dangerous substance,</strong> which causes it to aggressively react to the skin to “eliminate” the threat. This results in symptoms including:</div>
    <div id="symptoms_list"><strong><li>moderate-to-severe-rash</li><li>extreme itchiness</li><li>red streaks</li><li>inflammation </li><li>blistering</li><li>Lasts for 1-3 weeks</li></strong></div>
</section>

<header class="front">
  <div class="svg-item">
    <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
      <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#fff"></circle>
      <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>
      <circle class="donut-segment donut-segment-2" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="85 15" stroke-dashoffset="25"></circle>
      <g class="donut-text">
        <text y="50%" transform="translate(0, 2)">
          <tspan x="50%" text-anchor="middle" class="donut-percent">85%</tspan>   
        </text>
        <text y="60%" transform="translate(0, 2)">
          <tspan x="50%" text-anchor="middle" class="donut-data">Allergic</tspan>   
        </text>
      </g>
    </svg>
  </div>
<!-- https://codeconvey.com/pure-css-animated-donut-chart/ !-->


  <div class="info"><ion-card-content style="padding: 5px">85% of people are allergic to urushiol. However, 
    immunity changes as you age and through renewed exposures to poison ivy, so <strong>it 
    is possible for an immune person to get a reaction</strong></ion-card-content></div>
	</header>

  <router-link to="FAQ">
  <header class="FAQ">
    <div class="border"></div>
    <div class="FAQdiv">
    <h4 style="text-align: center; padding-right: 5px; text-shadow: 2px 2px 10px white;">
      <b>Frequently Asked Questions</b></h4>
      <hr style="background:green">
    </div>
    <img src="./Photos/question-mark-sign.jpg"/>
    <ion-card-content style= "text-align: center; margin: 0px; padding: 5px; text-shadow: 1px 1px 5px white;"><strong>Tap here</strong> to look through even more common questions people have about poison ivy</ion-card-content >
  </header> 
  </router-link>
  
<div class="sec">
      <ion-card class="plant-title"><ion-card-header>
      <ion-card-title>
      More on Toxicondendrons 
      </ion-card-title>
      <img src="./Photos/icon-leaf.png"/>
      </ion-card-header>
      <ion-card-content style="text-shadow: 1px 1px 5px black;">
        The best way to avoid suffering this highly unpleasant skin rash is to be aware of what the three toxicondendron plants are and what they look like.
      </ion-card-content>
    </ion-card>

  <section style="text-shadow: 2px 2px 10px black; ">
    <swiper style="background-color: transparent; padding-bottom: 10px; "  :slidesPerView="1" :navigation="true" :pagination="true" :history='{
              "key": "slide"
            }' class="mySwiper " >
        <swiper-slide style="background-color: transparent">
          <router-link to="/tabs/poison-ivy">
          <ion-card class="red">
            <img src="./Photos/poison-ivy-test2.jpg" style="height: 30vh; width: 90vw"   />
            <ion-card-header>
              <ion-card-title style="color: white">Poison Ivy</ion-card-title>
            </ion-card-header>  
            <waves></waves>
          </ion-card>
          </router-link>
        </swiper-slide>
        <swiper-slide style="background-color: transparent">
          <router-link to="/tabs/poison-oak">
          <ion-card class="oak">
            <img src="./Photos/poison-oak.jpg" style="height: 30vh; width: 90vw"  />
            <ion-card-header>
            <ion-card-title style="color: white">Poison Oak</ion-card-title>
            </ion-card-header>
            <waves></waves>
          </ion-card>
          </router-link>
        </swiper-slide>
        <swiper-slide style="background-color: transparent">
          <router-link to="/tabs/poison-sumac">
            <ion-card class="sumac-color">
              <img src="./Photos/sumac.jpg" style="height: 30vh; width: 90vw"  />
              <ion-card-header>
              <ion-card-title style="color: white">Poison Sumac</ion-card-title> 
              </ion-card-header>
              <waves></waves>
            </ion-card>  
          </router-link>
        </swiper-slide>
    </swiper>
 </section> 
 </div>  
      
         

      <div class="footer"></div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonTitle, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonToolbar, IonHeader, IonIcon, IonTabBar, IonTabButton } from '@ionic/vue';
import { leafOutline, leafSharp } from 'ionicons/icons';
import { onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles

import 'swiper/swiper.min.css';
//import 'swiper/css';

import 'swiper/components/pagination/pagination.min.css';
//import "swiper/css/pagination"

import "swiper/components/navigation/navigation.min.css";
import "swiper/components/lazy/lazy.min.css";
import './style.css';


// import Swiper core and required modules
import SwiperCore, {
  Navigation,Pagination,History,Lazy
} from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation,Pagination,History,Lazy]);


export default  {
  name: 'Tab2',
  components: { IonPage, IonContent, IonCard, IonCardContent, IonCardTitle, IonCardHeader,
  IonToolbar, IonHeader, IonTitle, SwiperSlide, Swiper},

  setup() {
    return{
      leafOutline
    };
  }
}
</script>

<style scoped>
div{
  font-size: 16px
}
*{
  box-sizing: border-box;
}
ion-card{
  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.25), 4px 4px 8px 0 rgba(0, 0, 0, 0.20);
}
.content{
}
.plant-title > ion-card-header{
  display: grid;
  grid-template-columns: 80% 20%;
}
#title{
	height: 50px;
	position: relative;
	display: flex;
	font-weight: 600;
	font-size: 22px;
	padding-top: 5px;
	padding-left: 10px;
}
.FAQ{
  margin: auto;
  margin-top: 15px;
  width: 90%;
  background: linear-gradient(135deg, yellow, green);
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: auto;
  grid-template-areas:"FAQ-border FAQ-border"
  "FAQtitle FAQimg"
  "FAQtext FAQimg";
  border-radius: 10px 10px 10px 10px;
  position: relative;
  color: black;
  height: 30vh;
  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.25), 4px 4px 8px 0 rgba(0, 0, 0, 0.20);
}
.FAQ > img{
  /* grid-row: span 2; */
  height: 100%;
  border-radius: 0 0px 10px 0;
  grid-area: FAQimg
}
.FAQ > ion-card-content{
  justify-self: end;
  grid-area: FAQtext;
  margin: 1em;
}
.FAQdiv{
  grid-area: FAQtitle;
}


.sec{
  background: linear-gradient(45deg,#ccff0050,#09afff50);
  margin-top: 10px
}

hr{
	position: relative;
	margin: auto;
	background-color: grey;
	height: 2px;
	border-radius: 20px;
	margin-top: 3px;
	width: 50%;
}
#sec-symp{
	/* background: linear-gradient(180deg, #74f2ce, #7cffcb);*/ 
	/* Successful Immigrant */
	
	position: relative;
	display: grid;
	align-content: center;
	grid-template-columns: 60% 40%;
	grid-template-rows: auto;
	grid-template-areas:
	"sec-symp-img sec-symp-div2"
  "sec-symp-div1 sec-symp-div2";
  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.25), 4px 4px 8px 0 rgba(0, 0, 0, 0.20);
	background:linear-gradient(rgba(243, 255, 80, 0.705),rgba(236, 255, 129, 0.178));
  padding: 0px 0px 0px
}
#sec-symp > div:nth-of-type(1){
	grid-area: sec-symp-div1;
  padding: 5px 7px 5px;
  padding-left: 10px;
  text-align: center;
}
#sec-symp > div:nth-of-type(2){
	grid-area: sec-symp-div2;
  padding: 5px 10px 5px;
  border-radius: 15px 0px 0px 15px;
  background:linear-gradient(rgba(255, 81, 81, 0.705),rgba(255, 48, 48, 0.38));
}
#sec-symp > img{
	grid-area: sec-symp-img;
  width: 60vw;
  margin:auto;
  height: 20vh;
  padding: 5px;
  padding-left: 10px;
  border-radius: 15px;
}
#symptoms_list {
  display: grid;
  grid-template-rows: auto;
  justify-content: center;
  align-content: center;
  line-height: 28px;
  height:100%;
  margin:auto;
  list-style-image: url('./Photos/icon-leaf-list.png');
}
#sec4{
	/* background: linear-gradient(180deg, #74f2ce, #7cffcb);*/ 
	/* Successful Immigrant */
	position: relative;
	display: grid;
	
	grid-template-columns: 30% 67%;
	gap: 5px
}


.plant-title{
  grid-area: plant-title;
  display: flex;
  justify-content: center;
  font-size: 24px;
  background: linear-gradient( rgb(0,0,0,.1), rgb(0,0,0,.3));
  color: black;
  width: 100%;
  margin: 0;
  margin: auto;

  box-shadow: none
}


.border{
background: radial-gradient(
circle, #1592c385,rgba(0, 47, 100, 0.603) 95%);
grid-area: FAQ-border;

border-radius: 10px 10px 0px 0px
}

.card-border{
background: radial-gradient(
circle, #15c34f,darkgreen 95%);
padding: 5px;
width: 100%;
}
.card-header > ion-card-header{
  padding-bottom: 4px
}
.background{
  background-image:  url("./Photos/leaves.jpg");
  height: 10vh;
}
.card-header{
  background: linear-gradient(rgba(23, 143, 12, 0.568), rgba(11, 172, 110, 0.514));
  margin-top: 0px;
  margin-bottom: 0px;
  width: 95%;
  transform: translateY(-1%);
  margin: auto;
  box-shadow: none;
}


.front{
	background: linear-gradient(180deg, rgb(89, 148, 89), rgb(123, 172, 123));

	position: relative;
  display: grid;
  grid-template-columns: 35% 60%;
  gap: 10px;
  grid-template-areas:
    "svg-item info"; 
  /* display: flex;
  justify-content: space-around; */

}
.info{
  text-align: center;
  grid-area: info;
  padding: 4px;
  
}
.info1{
  background: yellow;
}
.test {
  position: relative;
  translate: translateY(1000%);
}
.headerdisabled2
  {
  position: static;
  width: 80%;
  border-radius: 0px 30px 30px 0px;
  border: 10px black;
  background-image: linear-gradient(135deg, greenyellow, rgb(100,192,33));
  
  margin-top: 10vh;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}
.footer{
  margin-bottom: 70px;
}
.content ion-card{
  color: white;
  position: relative;
  display:flex;
  flex-direction: column;
  align-items: center;
  min-width: 80vw;
  min-height: 30vh;
}

.red{
  background: linear-gradient( rgb(23, 185, 23), rgb(23, 185, 23), #387442);
  grid-area: red;
}
.oak{
  background: linear-gradient(135deg, orange, rgb(128, 83, 0));

  }
.sumac-color{
  background: rgb(199, 101, 117);
}

.toolbar{
 --background: #307442;
  
    
}
/* ion-title{
  --color: rgb(0, 0, 0)
} doesn't work */ 


.svg-item {
    width: 100%;
    font-size: 16px;
    margin: 0 auto;
    animation: donutfade 4s;
    grid-area: svg-item;
    padding-top: 5px;
    padding-left: 5px;
    background: rgba(128, 0, 128, 0.1)
}

@keyframes donutfade {
  /* this applies to the whole svg item wrapper */
    0% {
        opacity: .2;
    }
    100% {
        opacity: 1;
    }
}

@media (min-width: 992px) {
    .svg-item {
        width: 80%;
    }
}

.donut-ring {
    stroke: #EBEBEB;
}

.donut-segment {
    transform-origin: center;
    stroke: #FF6200;
}

.donut-segment-2 {
    stroke: rgb(0, 255, 115);
    animation: donut1 3s;
}

.donut-segment-3 {
    stroke: #d9e021;
    animation: donut2 3s;
}

.donut-segment-4 {
    stroke: #ed1e79;
    animation: donut3 3s;
}

.segment-1{fill:#ccc;}
.segment-2{fill:rgb(68, 126, 126);}
.segment-3{fill:#d9e021;}
.segment-4{fill:#ed1e79;}

.donut-percent {
    animation: donutfadelong 1s;
}

@keyframes donutfadelong {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes donut1 {
    0% {
        stroke-dasharray: 0, 100;
    }
    100% {
        stroke-dasharray: 85, 15;
    }
}

.donut-text {
    fill:  #387442;
}
.donut-text-1 {
    fill: aqua;
}
.donut-text-2 {
    fill: #d9e021;
}
.donut-text-3 {
    fill: #ed1e79;
}

.donut-label {
    font-size: 0.28em;
    font-weight: 700;
    line-height: 1;
    fill: #000;
    transform: translateY(0.25em);
}

.donut-percent {
    font-size: 0.5em;
    line-height: 1;
    transform: translateY(0.5em);
    
}

.donut-data {
    font-size: 3px;
    line-height: 1;
    font-weight: 800;
    /* transform: translateY(0.5em); */
    text-align: center;
    text-anchor: middle;
    color:#666;
    fill: #666;
    animation: donutfadelong 1s;
}


</style>
