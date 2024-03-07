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
        <ion-title>More about Poison Oak</ion-title>    
      </ion-toolbar> 
  </ion-header> 
    

  <ion-content class="ion-content">
  <Modal filename="oak-3leaves.jpg" footer="&#8220;Poison Oak&#8221;; by jkirkhart35, licensed under CC BY 2.0" v-if="showModal1" @close="showModal1 = false" >
  </Modal>
    <Modal filename="poison-oak-bush2.jpg" footer="&#8220;Tall Poison Oak Bush&#8221;; by Laurent Droin (Pinterst)" v-if="showModal2" @close="showModal2 = false" >
  </Modal>

    <Modal filename="bumpy-poison-oak.jpg" footer="&#8220;Pacific Poison Oak&#8221;; by Melinda Young Stuart, licensed under CC BY-NC-ND 2.0" v-if="showModal4" @close="showModal4 = false" >
  </Modal>
    <Modal filename="round-poison-oak.jpg" footer="&#8220;Poison Oak&#8221;; by slodocents, licensed under CC BY 2.0" v-if="showModal5" @close="showModal5 = false" >
  </Modal>

              <Modal filename="poison-oak-strands.jpg" footer="&#8220;Poison Oak, California's state noxious weed&#8221;; by Shiny Things, licensed under CC BY-NC 2.0" v-if="swiperModal1" @close="swiperModal1 = false" >  
  </Modal>    <Modal filename="ivy-root.jpg" footer="issambwilkins; CC by 3.0" v-if="swiperModal2" @close="swiperModal2 = false" >
  </Modal>    <Modal filename="ivy-root.jpg" footer="Vine of a dead poison ivy; from Wikimedia Commons; Melissambwilkins; CC by 3.0" v-if="swiperModal3" @close="swiperModal3 = false" >
  </Modal>    <Modal filename="ivy-root.jpg" footer="Vine of a dead poison ivy; from Wikimedia Commons; Melissambwilkins; CC by 3.0" v-if="swiperModal4" @close="swiperModal4 = false" >
  </Modal>    <Modal filename="ivy-root.jpg" footer="Vine of a dead poison ivy; from Wikimedia Commons; Melissambwilkins; CC by 3.0" v-if="swiperModal5" @close="swiperModal5 = false" >
  </Modal>    <Modal filename="ivy-root.jpg" footer="Vine of a dead poison ivy; from Wikimedia Commons; Melissambwilkins; CC by 3.0" v-if="swiperModal6" @close="swiperModal6 = false" >
  </Modal>    <Modal filename="dying-bush-oak.jpg" footer="&#8220;Poison Oak and Deer Brush 2&#8221;; by sjrankin, licensed under CC BY-NC 2.0" v-if="swiperModal7" @close="swiperModal7 = false" >
  </Modal>
  
          <div class="trim">
            <img class="top" src="../views/Photos/poison-oak.jpg" style="aspect-ratio: 3/2" />
          </div>
<div class="main-background">
 
<div class="contain">
<div class="card">
		<div class="ribbon"><ion-card-title>Poison Oak</ion-card-title>
	</div>
  <img src="../views/Photos/poison-oak2.jpg" style="height: 30vh; width: 100%"/>
  <ion-card-content>Poison oak is a plant very similar to poison ivy, from shape to size. <strong>The plant is especially a nuisance in California,</strong> but it also grows on some parts of the east side of the United States (although not as common). Poison oak <strong>grows as a shrub or bush, and also just as singular plants on the ground,</strong> similar to how poison ivy can grow. The colors of the plant can range between green, light yellow, and red, as the season and climate changes. </ion-card-content></div>
</div>
<div class="sub-header">
  <div></div>
  <ion-card-title>Gallery</ion-card-title>
  <img src="../views/Photos/gallery-icon.png" style="transform: scale(.9)"/>
  <div></div>
</div>
<div class="swiper-container">
  <swiper :autoHeight="true" :loop="true" :style="{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" class="mySwiper2">
    <swiper-slide><div><img src="../views/Photos/poison-oak-strands.jpg" @click="swiperModal1 = true" /> <text>Poison oak typically has ragged edges</text></div></swiper-slide>
    <swiper-slide><div><img src="../views/Photos/poison-oak4.jpg" @click="swiperModal = true" /><text>Strands of poison oak and spiky plants</text></div></swiper-slide>
    <swiper-slide><div><img src="../views/Photos/shrub-poison-oak.jpg" @click="swiperModal = true" /><text>Colony of poison oak near ground level</text></div></swiper-slide>
    <swiper-slide><div><img src="../views/Photos/poison-oak-spring.jpg" @click="swiperModal = true" /><text>Poison oak sprouting in spring</text></div></swiper-slide>
    <swiper-slide><div><img src="../views/Photos/poison-oak-flowering.jpg" @click="swiperModal = true" /><text>Poison oak flowering in late summer</text></div></swiper-slide>
    <swiper-slide><div><img src="../views/Photos/poison-oak-red.jpg" @click="swiperModal = true" /><text>Red variant of poison oak in California</text></div></swiper-slide>
    <swiper-slide><div><img src="../views/Photos/dying-bush-oak.jpg" @click="swiperModal7 = true" /><text>Dying bush of poison oak</text></div></swiper-slide>
  </swiper>
  <swiper @swiper="setThumbsSwiper" :loop="true" :spaceBetween="10" :slidesPerView="4" :freeMode="true" :watchSlidesProgress="true" class="mySwiper tabSwiper">
    <swiper-slide><img src="../views/Photos/poison-oak-strands.jpg" /></swiper-slide>
    <swiper-slide><img src="../views/Photos/poison-oak4.jpg" /></swiper-slide>
    <swiper-slide><img src="../views/Photos/shrub-poison-oak.jpg" /></swiper-slide>
    <swiper-slide><img src="../views/Photos/poison-oak-spring.jpg" /></swiper-slide>
    <swiper-slide><img src="../views/Photos/poison-oak-flowering.jpg" /></swiper-slide>
    <swiper-slide><img src="../views/Photos/poison-oak-red.jpg" /></swiper-slide>
    <swiper-slide><img src="../views/Photos/dying-bush-oak.jpg" /></swiper-slide>
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
    <img src="../views/Photos/oak-3leaves.jpg" @click="showModal1 = true">
    <div>Poison oak <strong>always comes in leaves of three. </strong>(If you are suspicious of a plant that has more than three leaflets, it isn’t poison oak). Just like poison ivy, the saying <strong>“leaves of three, let it be”</strong> has been used to try to avoid poison oak.</div>  
</section>
<header style="background: rgba(21, 255, 0, 0.25)">
  <hr>
</header>
<section id="sec-shape">
    <img src="../views/Photos/round-poison-oak.jpg" @click="showModal5 = true"/> <img src="../views/Photos/bumpy-poison-oak.jpg" @click="showModal4 = true"/>
    
    <div>The shape of the leaflets can vary with poison oak, but rememember that poison oak <strong>never has thorns on the leaflets</strong>, and the shape of the leaves won’t be saw-toothed or rounded.</div>  
</section>
<header style="background:rgba(111, 0, 255, 0.25)">
<hr>
</header>
<section id="sec3">
    <img src="../views/Photos/poison-oak-bush2.jpg"  @click="showModal2 = true"/>
    <div>Alongside growing in strands, poison oak can naturally <strong>grow into huge bushes</strong>, which can be very dangerous if you don't recognize the plant.</div>
</section>
<header style="background:rgba(0, 225, 255, 0.25)">
  <hr>
</header>
<section id="sec-winter">
    <div>In the winter, it's possible to see <strong>entire skeletal bushes of once-living poison oak.</strong></div>
    <img src="../views/Photos/poison-oak-winter.jpg" />
</section>
<header style="background: rgba(255, 155, 4, 0.25)">
  <hr>
</header>
<section id="sec-red">
    <img src="../views/Photos/poison-oak-spring2.jpg">
    <div>The color of poison oak can also vary; especially in western states like California, poison oak is <strong>known to appear in the color red.</strong></div>  
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
    modal: null,
    swiperModal: true,
    showModal1: false,
    showModal2: false,
    showModal4: false,
    showModal5: false,
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
	
  background: linear-gradient(rgba(255, 166, 0, 0.25),rgba(128, 83, 0,.4) );
	margin: 0;
	padding-top: 10px;
  border-radius: 20px 20px 0px 0px;
  box-shadow: 0px -4px 8px 0 rgb(128, 83, 0,.25), 0px -6px 20px 0 rgba(0, 0, 0, 0.20);
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
	grid-template-columns: 45% 55%;
	gap: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 1);
}
#sec-three-leaves > img{
  height: 30vh;
  margin: auto;
  
  padding: 5px;
  border-radius: 15px;
  padding-left: 10px
}
#sec-three-leaves > div{
  padding: 5px 10px 10px 5px;

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
#sec3 {
  display: grid;
  grid-template-columns: 50% 50%;
  height: 30vh;
  gap: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 1);
  background: linear-gradient(rgba(111, 0, 255, 0.22), rgba(255, 255, 255, 0.25) 60%)
}
#sec3 > img{
  padding: 5px;
  padding-left: 10px;
  border-radius: 15px;
  height: 100%;
  
}
#sec3 > div{
  padding: 5px;
  padding-right: 10px;
  transform: translateY(10%)
}
#sec-winter {
  display: grid;
  grid-template-columns: 60% 40%;
  height: 25vh;
  box-shadow: 0 5px 10px 0px rgb(0 0 0 /15%);
  background: linear-gradient(rgba(0, 225, 255, 0.25), rgba(255, 255, 255, 0.25));
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 1);
}
#sec-winter > img{
  height: 100%;
  padding: 5px;
  border-radius: 15px;
  padding-right: 10px
}
#sec-winter > div{
  padding-left: 10px;
  text-align: center;
  transform: translateY(25%)
}
#sec-shape {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: "sec-shape-img1 sec-shape-img2"
  "sec-shape-div sec-shape-div"; 
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 1);
  margin-bottom: 0px;
  background: linear-gradient(rgba(255, 155, 4, 0.25),rgba(255, 255, 255, 0.25));
}

#sec-shape > img:nth-of-type(1){
  grid-area: sec-shape-img1;
  padding: 5px;
  padding-left: 10px;
  border-radius: 15px;
  height: 25vh;
  width: 100%
}
#sec-shape > img:nth-of-type(2){
  grid-area: sec-shape-img2;
  padding: 5px;
  padding-right: 10px;
  border-radius: 15px;
  height: 25vh;
  width: 100%
}
#sec-shape > div{
  grid-area: sec-shape-div;
  padding: 5px 10px 10px;
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
    box-shadow: 0px -4px 8px 0 rgb(128, 83, 0), 0px -6px 20px 0 rgba(0, 0, 0, 0.20);
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
