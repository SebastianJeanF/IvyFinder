<template >
  <ion-page>
  <ion-header>  
      <ion-toolbar class="toolbar" color="dark" mode="ios">
        <ion-buttons slot="start">
          <ion-back-button
            :default-href="pageDefaultBackLink"
          ></ion-back-button>
        </ion-buttons>
     
        <ion-buttons slot="end">
          <slot name="actions-end"></slot>
        </ion-buttons>
        <ion-title>More about Poison Sumac</ion-title>    
      </ion-toolbar> 
  </ion-header> 
    

  <ion-content class="ion-content">
  <Modal filename="poison-sumac-open.jpg" footer="&#8220;Poison Sumac&#8221;; by ornitholoco, licensed under CC BY-NC-SA 2.0" v-if="showModal1" @close="showModal1 = false" >
  </Modal>
    <Modal filename="swamp.jpg" footer="&#8220;Pretty Swamp&#8221; by Stanley Zimny (Thank You for 51 Million views), licensed under CC BY-NC 2.0" v-if="showModal2" @close="showModal2 = false" >
  </Modal> 
  <Modal filename="sumac-berries.jpg" footer="&#8220;Poison Sumac - Hampton Ponds - Westfield MA&#8221;; by Rusty Clark ~ 100K Photos, licensed under CC BY 2.0" v-if="showModal3" @close="showModal3 = false" >
  </Modal> 
    <Modal filename="sumac-fall.jpg" footer="&#8220;Poison sumac&#8221;; by annahesser, licensed under CC BY-NC-ND 2.0 under CC BY 2.0" v-if="showModal4" @close="showModal4 = false" >
  </Modal>


              <Modal filename="poison-sumac2.jpg" footer="&#8220;Poison Sumac (Toxicodendron vermix)&#8221;; by wackybadger, licensed under CC BY-SA 2.0" v-if="swiperModal1" @close="swiperModal1 = false" >  
  </Modal>    <Modal filename="sumac-nature.jpg" footer="&#8220;Poison Sumac (Toxicodendron vernix) on the Trail&#8221;; by wackybadger, licensed under CC BY-SA 2.0" v-if="swiperModal2" @close="swiperModal2 = false" >
  </Modal>    <Modal filename="poison-sumac4.jpg" footer="&#8220;Poison Sumac (Toxicodendron vernix)&#8221;; by wackybadger, licensed under CC BY-SA 2.0" v-if="swiperModal4" @close="swiperModal4 = false" >
  </Modal>    <Modal filename="poison-sumac3.jpg" footer="&#8220;Poison Sumac (Toxicodendron vernix)&#8221;; by aarongunnar, licensed under CC BY-SA 2.0" v-if="swiperModal3" @close="swiperModal3 = false" >
  </Modal>    <Modal filename="sumac-redstem.jpg" footer="&#8220;Poison Sumac (Toxicodendron vernix)&#8221;; by aarongunnar, licensed under CC BY-SA 2.0" v-if="swiperModal5" @close="swiperModal5 = false" >
  </Modal>    <Modal filename="sumac-fall2.jpg" footer="&#8220;Poison Oak&#8221;; by annahesser, licensed under CC BY-NC-ND 2.0" v-if="swiperModal6" @close="swiperModal6 = false" >
  </Modal>    <Modal filename="sumac-dead.jpg" footer="&#8220;Poison Sumac&#8221;; by Brett Whaley, licensed under CC BY-NC 2.0" v-if="swiperModal7" @close="swiperModal7 = false" >
  </Modal>
  
          <div class="trim">
            <img class="top" src="../views/Photos/sumac.jpg" style="aspect-ratio: 3/2" />
          </div>
<div class="main-background">
 
<div class="contain">
<div class="card">
		<div class="ribbon"><ion-card-title>Poison Sumac</ion-card-title>
	</div>
  <img src="../views/Photos/sumac-leaves.jpg" style="height: 30vh; width: 100%"/>
  <ion-card-content>Unlike poison oak and poison ivy, poison sumac grows in <strong>only extremely wet areas such as bogs and swamps,</strong> making them quite rare for the majority of the population. Despite this, this plant is still in the Toxicodendron family and also still produces the invisible oil called urushiol. Poison sumac is a small, thin tree or woody shrub that grows anywhere <strong>from 5 up to a whopping 20 feet!</strong> </ion-card-content></div>
</div>
<div class="sub-header">
  <div></div>
  <ion-card-title>Gallery</ion-card-title>
  <img src="../views/Photos/gallery-icon.png" style="transform: scale(.9)"/>
  <div></div>
</div>
<div class="swiper-container">
  <swiper :autoHeight="true" :loop="true" :style="{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" class="mySwiper2">
    <swiper-slide><div><img src="../views/Photos/poison-sumac2.jpg" @click="swiperModal1 = true" /> <text>Up-close shot of poison sumac</text></div></swiper-slide>
    <swiper-slide><div><img src="../views/Photos/sumac-nature.jpg" @click="swiperModal2 = true" /><text>Poison sumac in a swamp environment</text></div></swiper-slide>
    <swiper-slide><div><img src="../views/Photos/poison-sumac3.jpg" @click="swiperModal3 = true" /><text>Color variant of poison sumac as season changes</text></div></swiper-slide>
    <swiper-slide><div><img src="../views/Photos/poison-sumac4.jpg" @click="swiperModal4 = true" /><text>Branches of poison sumac</text></div></swiper-slide>
    <swiper-slide><div><img src="../views/Photos/sumac-redstem.jpg" @click="swiperModal5 = true" /><text>Poison sumac with red stems in the spring</text></div></swiper-slide>
    <swiper-slide><div><img src="../views/Photos/sumac-fall2.jpg" @click="swiperModal6 = true" /><text>Leaves of poison sumac in the fall</text></div></swiper-slide>
    <swiper-slide><div><img src="../views/Photos/sumac-dead.jpg" @click="swiperModal7 = true" /><text>Remains of a poison sumac tree in winter</text></div></swiper-slide>
  </swiper>
  <swiper @swiper="setThumbsSwiper" :loop="true" :spaceBetween="10" :slidesPerView="4" :freeMode="true" :watchSlidesProgress="true" class="mySwiper tabSwiper">
    <swiper-slide><img src="../views/Photos/poison-sumac2.jpg" /></swiper-slide>
    <swiper-slide><img src="../views/Photos/sumac-nature.jpg" /></swiper-slide>
    <swiper-slide><img src="../views/Photos/poison-sumac3.jpg" /></swiper-slide>
    <swiper-slide><img src="../views/Photos/poison-sumac4.jpg" /></swiper-slide>
    <swiper-slide><img src="../views/Photos/sumac-redstem.jpg" /></swiper-slide>
    <swiper-slide><img src="../views/Photos/sumac-fall2.jpg" /></swiper-slide>
    <swiper-slide><img src="../views/Photos/sumac-dead.jpg" /></swiper-slide>
  </swiper>

</div>
<div class="sub-header1">
  <ion-card-title>Identification Tips</ion-card-title>
  <img src="../views/Photos/identify-icon.png" />
</div> 
<header style="background: rgba(21, 255, 0, 0.25)">
  <hr>
</header>
<section id="sec-three-leaves">
    <img src="../views/Photos/poison-sumac-open.jpg" @click="showModal1 = true">
    <div>Unlike poison oak and poison ivy, poison sumac has numerous leaves; the <strong>number of leaflets is always an odd number between 7-13.</strong> Furthermore, the leaflets of this plant <strong>have smooth edges</strong> (unlike staghorns, which have saw-toothed shaped leaflets). </div>
</section>
<header style="background: rgba(21, 255, 0, 0.25)">
  <hr>
</header>
<section id="sec-swamp">
    <div>The environment and soil needed for poison sumac to grow is <strong>highly specialized and filled with water,</strong> so therefore you should only <strong>be cautious of seeing poison sumac if you are at a swamp or bog.</strong></div>
    <img src="../views/Photos/swamp.jpg" @click="showModal2 = true"/>
</section>
<header style="background:rgba(111, 0, 255, 0.25)">
<hr>
</header>
<section id="sec-redstem">
    <img src="../views/Photos/sumac-berries.jpg"  @click="showModal3 = true"/>
    <div>The branches of poison sumac that grow from the stem will <strong>reflect a red-velvet color,</strong> especially in the summer. As the season change, these branches <strong>evolve to a more brownish shade.</strong></div>
</section>
<header style="background:rgba(0, 225, 255, 0.25)">
  <hr>
</header>
<section id="sec-fall" >
    <div>During the fall, the leaves poison sumac starts to <strong>transition to a reddish shade.</strong></div>
    <img src="../views/Photos/sumac-fall.jpg" @click="showModal4 = true"/>
</section>


      </div>  
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonCardContent, IonCardTitle, IonToolbar, IonHeader, IonButtons, IonBackButton} from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles

import 'swiper/swiper.min.css';
//import 'swiper/css';

import 'swiper/components/pagination/pagination.min.css';
//import "swiper/css/pagination"

import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import '../views/style.css';


// import Swiper core and required modules
import SwiperCore, {
  Navigation,Pagination,Thumbs
} from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation,Pagination,Thumbs]);


export default  {
  name: 'Tab2',
  components: { IonPage, IonContent, IonCardContent, IonCardTitle, IonToolbar, IonHeader, IonButtons, IonBackButton, Swiper, SwiperSlide},
  data() {
    return{
    swiperModal: true,
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false,
    swiperModal1: false,
    swiperModal2: false,
    swiperModal3: false,
    swiperModal4: false,
    swiperModal5: false,
    swiperModal6: false,
    swiperModal7: false,                    
    thumbsSwiper: null
    }
  },
  methods: {
     setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
      console.log("success!")
    }
  }

}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
.contain{
  display: flex;
	justify-content: center;
	align-items: center;
	
  background: linear-gradient(rgba(212, 0, 255, 0.25),rgba(128, 0, 128, 0.4) );
	margin: 0;
	padding-top: 10px;
  border-radius: 20px 20px 0px 0px;
  box-shadow: 0px -4px 8px 0 rgb(102, 0, 128), 0px -6px 20px 0 rgba(0, 0, 0, 0.20);
}
ion-card-title{
  justify-content: center;
  margin: auto;
}
.card 
{
	position: relative;
	width: 90vw;
	height: 72vh; 
	border-radius: 20px;
	background: linear-gradient(180deg, rgba(176, 235, 114, 0.75) 50%, rgba(164, 182, 66, 0.75) 100%);
	box-shadow: 3px 0px 20px rgba(0,0,0,.2), -3px 0px 20px rgba(0,0,0,.2);
  margin-bottom: 10px 
}


.sub-header{
  height: 10vh;
  display: grid;
  grid-template-columns: 15% 50% 30% 10%;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 1);
  border-width: 5px;
  border-top: black;
  border-style: solid none none none;
}
.sub-header1{
  height: 10vh;
  display: grid;
  background: linear-gradient(rgba(0, 128, 0, .50),rgba(0, 128, 0, .25));
  grid-template-columns: 80% 20%;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 1);
  border-width: 4px;
  border-style: solid none none none;
}
.ribbon
{
	position: absolute;
	top: 40px;
	left: -15px;
	width: 280px;
	height: 50px;
	background:  linear-gradient(90deg,rgb(238, 255, 235),white);
	border-radius: 30px;
	border-bottom-left-radius: 0;
	z-index: 2;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.5), 6px 6px 20px 0 rgba(0, 0, 0, 0.45);
}
.ribbon::before 
{
	content: '';
	position: absolute;
	top: 50px;
	left: 0;
	width: 15px;
	height: 30px;
	border-top-left-radius: 20px;
	border-bottom-left-radius: 20px;
	background: rgb(42, 143, 75);
	z-index: 2;
} 
.ribbon::after 
{
	content: '';
	position: absolute;
	top: 49px;
	left: 0;
	width: 15px;
	height: 15px;
	background: rgb(238, 255, 235);
	z-index: 1;
}
.ribbon ion-card-title{
  transform: translateX(1em);
  font-size: 30px;
  padding-top: 5px;
  
} 
.card ion-card-content{
  
  text-align: center;
  padding-top: 5px;
  
} 
text{
  font-weight: 700;
  width: 100vw;
}
/* .swiper-slide > img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
} */
.mySwiper .swiper-slide  img {
  height: 10vh
}
 .swiper-slide >  div {
  background: linear-gradient(grey 95%,rgb(180, 180, 180) 100%);
  color: white;
  border: 4px;
  border-style: none none solid none;
  border-color: black;
}
/* .mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
} */
header{
  padding: 4px;
}
div{
  font-size: 16px;
}

#sec-three-leaves{
	background: linear-gradient(rgba(200, 255, 0, 0.25),rgba(255, 255, 255, 0.25));
	/* Successful Immigrant */
	position: relative;
	display: grid;
	grid-template-areas: 1fr 1fr;
	gap: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 1);
}
#sec-three-leaves > img{
  height: 25vh;
  margin: auto;
  
  padding: 5px;
  border-radius: 15px;
  padding-left: 10px
}
#sec-three-leaves > div{
  padding: 5px 10px 10px;
  text-align: center

}
#sec-red {
  display: grid;
  grid-template-columns: 45% 55%;
  
  height: 30vh;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 1);
  background: linear-gradient(rgba(21, 255, 0, 0.25),rgba(255, 255, 255, 0.25))
}
#sec-red > img{
  height: 25vh;
  width: 100%;
  padding: 5px;
  border-radius: 15px;
  padding-left: 10px;
}
#sec-red > div{
  padding: 15px 10px 12vh;
  margin:auto;
}
#sec-redstem {
  display: grid;
  grid-template-columns: 50% 50%;
  height: 35vh;
  gap: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 1);
  background: linear-gradient(rgba(111, 0, 255, 0.22), rgba(255, 255, 255, 0.25) 60%)
}
#sec-redstem > img{
  padding: 5px;
  padding-left: 10px;
  border-radius: 15px;
  height: 30vh;
  width: 100%;
  transform: translateY(2vh);
  
}
#sec-redstem > div{
  padding: 5px;
  padding-right: 10px;
  transform: translateY(10%)
}
#sec-fall {
  display: grid;
  grid-template-columns: 55% 45%;
  height: 25vh;
  box-shadow: 0 5px 10px 0px rgb(0 0 0 /15%);
  background: linear-gradient(rgba(0, 225, 255, 0.25), rgba(255, 255, 255, 0.25));
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 1);
}
#sec-fall > img{
  height: 22vh;
  padding: 5px;
  margin: auto;
  width: 100%;
  border-radius: 15px;
  padding-right: 10px
}
#sec-fall > div{
  padding-left: 10px;
  text-align: center;
  transform: translateY(25%);
  padding-bottom: 40px
}
#sec-swamp {
  display: grid;
  grid-template-columns: 50% 50%;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 1);
  margin-bottom: 0px;
  background: linear-gradient(rgba(255, 155, 4, 0.25),rgba(255, 255, 255, 0.25));
}

#sec-swamp > img:nth-of-type(1){
  padding: 5px;
  padding-right: 10px;
  border-radius: 15px;
  height: 28vh;
  width: 100%;
  transform: translateY(1vh)
}
#sec-swamp > img:nth-of-type(2){
  padding: 5px;
  padding-right: 10px;
  border-radius: 15px;
  height: 25vh;
  width: 100%
}
#sec-swamp > div{
  padding: 5px;
  padding-left: 10px;
  text-align: center;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  padding-bottom: 40px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-default-button {
  float: right;
}

.main-background{
    background: linear-gradient(135deg, rgb(255, 255, 255),rgb(61, 194, 61));
    width: 100%;
    transform: translateY(-2vh);
    border-radius: 20px 20px 0px 0px;
    box-shadow: 0px -4px 8px 0 rgb(102, 0, 128), 0px -6px 20px 0 rgba(0, 0, 0, 0.20);
}
.trim{
  max-height:20vh;
  overflow: hidden;
}
.ion-content {
   --ion-background-color: linear-gradient(135deg, red, rgb(220, 247, 222));
}


hr {
	position: relative;
	margin: auto;
	background-color: rgb(100, 100, 100);
	height: 2px;
	border-radius: 20px;
	margin-top: 3px;
	width: 50%;
  display:none;
}

.header{
	height: 50px;
	position: relative;
	display: flex;
	font-weight: 600;
	font-size: 22px;
	padding-top: 5px;
	padding-left: 10px;
}

.swiper-container{
  background:black; 
  /* box-shadow: 0px -5px 15px rgba(255, 255, 255, 0.5);  */

}
.hea
  {
  position: static;
  width: 80%;
  border-radius: 0px 30px 30px 0px;
  border: 10px black;
  margin-top: 10vh;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
ion-card{
  color: black;
  position: relative;
  display:flex;
  flex-direction: column;
  align-items: center;
  min-width: 80vw;
  min-height: 30vh;
}

</style>
