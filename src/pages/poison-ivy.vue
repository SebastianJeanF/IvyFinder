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
        <ion-title>More about Poison Ivy</ion-title>    
      </ion-toolbar> 
  </ion-header> 
    

  <ion-content class="ion-content">
  <Modal filename="ivy-roots.jpg" footer="" v-if="showModal1" @close="showModal1 = false" >
  </Modal>
    <Modal filename="ivy-root.jpg" footer="Vine of a dead poison ivy; from Wikimedia Commons; Melissambwilkins; CC by 3.0" v-if="showModal4" @close="showModal4 = false" >
  </Modal>
      <Modal filename="poison-ivy1.jpg" footer="&#8220;Poison Ivy 034&#8221;; by cygnus921, licensed under CC BY 2.0" v-if="showModal2" @close="showModal2 = false" >
  </Modal>
          <div class="trim">
            <img class="top" src="../views/Photos/poison-ivy-test2.jpg" style="aspect-ratio: 3/2" />
          </div>
<div class="background">
 
<div class="contain">
<div class="card">
		<div class="ribbon"><ion-card-title>Poison Ivy</ion-card-title>
	</div>
  <img src="../views/Photos/poison-ivy2.jpg" style="height: 30vh; width: 100%"/>
  <ion-card-content>The most common and widespread of the three, poison ivy is a native plant in the United Sates that <strong>can be found in every state except California, Hawaii, and Alaska.</strong> Poison ivy can grow as a bush, singular plant, and as a climbing vine. They are notorious for <strong>growing around trees, on the edges of yards and roads, and at abandoned areas.</strong> For this reason and their ubiquitous nature, they are a nuisance in many parts of the states. </ion-card-content></div>
</div>
<div class="sub-header">
  <div></div>
  <ion-card-title>Gallery</ion-card-title>
  <img src="../views/Photos/gallery-icon.png" style="transform: scale(.9)"/>
  <div></div>
</div>
<div class="swiper-container">
  <swiper :autoHeight="true" :loop="true" :style="{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" class="mySwiper2">
    <swiper-slide><div><img src="../views/Photos/poison-ivy3.jpg" /> <text>Poison ivy typically has mitten-shaped leaves</text></div></swiper-slide>
    <swiper-slide><div><img src="../views/Photos/poison-ivy1.jpg" @click="showModal2 = true"/><text>Pack of poison ivy on the ground</text></div></swiper-slide>
    <swiper-slide><div><img src="../views/Photos/poison-ivy-berry1.jpg" /><text>Berries of poison ivy</text></div></swiper-slide>
    <swiper-slide><div><img src="../views/Photos/poison-ivy-spring2.jpg" /><text>Poison ivy sprouting in spring</text></div></swiper-slide>
    <swiper-slide><div><img src="../views/Photos/ivy-roots.jpg" /><text>Poison ivy rounding a tree</text></div></swiper-slide>
    <swiper-slide><div><img src="../views/Photos/poison-ivy-fall.jpg" /><text>Poison ivy in the fall</text></div></swiper-slide>
    <swiper-slide><div><img src="../views/Photos/poison-ivy-roots2.jpg" /><text>Leftover roots of poison ivy in the winter</text></div></swiper-slide>
  </swiper>
  <swiper @swiper="setThumbsSwiper" :loop="true" :spaceBetween="10" :slidesPerView="4" :freeMode="true" :watchSlidesProgress="true" class="mySwiper tabSwiper">
    <swiper-slide><img src="../views/Photos/poison-ivy3.jpg" /></swiper-slide><swiper-slide><img style="height:10vh" src="../views/Photos/poison-ivy1.jpg" /></swiper-slide><swiper-slide><img src="../views/Photos/poison-ivy-berry1.jpg" /></swiper-slide><swiper-slide><img src="../views/Photos/poison-ivy-spring2.jpg" /></swiper-slide><swiper-slide><img src="../views/Photos/ivy-roots.jpg" /></swiper-slide><swiper-slide><img src="../views/Photos/poison-ivy-fall.jpg" /></swiper-slide><swiper-slide><img src="../views/Photos/poison-ivy-roots2.jpg" /></swiper-slide>
  </swiper>

</div>
<div class="sub-header1">
  <ion-card-title>Identification Tips</ion-card-title>
  <img src="../views/Photos/identify-icon.png" />
</div> 
<header style="background: rgba(21, 255, 0, 0.25)">
  <hr>
</header>
<section id="sec1">
    <img src="../views/Photos/poison-ivy4.jpg">
    <div>Poison ivy <strong>always comes in leaves of three. </strong>(If you are suspicious of a plant that has more than three leaflets, it isn’t poison ivy). The saying <strong>“leaves of three, let it be”</strong> has been used by people to try to avoid them.</div>  
</section>
<header style="background: rgba(21, 255, 0, 0.25)">
  <hr>
</header>
<section id="sec2">
    <img src="../views/Photos/poison-ivy-shape.jpg">
    <div>Poison ivy <strong>never has thorns on their leaflets</strong>, and the shape of the leaves won’t be saw-toothed or rounded. You should look for <strong> “mitten-shaped” leaves </strong> when staying away from poison ivy.</div>  
</section>
<header style="background:rgba(111, 0, 255, 0.25)">
<hr>
</header>
<section id="sec3">
    <img src="../views/Photos/poison-ivy-climbing-tree.jpg"  @click="showModal1 = true"/>
    <div>Poison ivy naturally grows as high up as it can, so it isn’t uncommon to see them <strong>infesting trees top to bottom.</strong> </div>
</section>
<header style="background:rgba(0, 225, 255, 0.25)">
  <hr>
</header>
<section id="sec4">
    <div>In the winter, you can see the <strong> leftover roots of poison ivy</strong> if they grew around a tree</div>
    <img src="../views/Photos/ivy-root.jpg"  @click="showModal4 = true" />
</section>
<header style="background: rgba(255, 155, 4, 0.25)">
  <hr>
</header>
<section id="sec5">
    <img src="../views/Photos/ivy-and-berry.jpg" /> <img src="../views/Photos/flowering-ivy.jpg" />
    <div> Poison ivy is known for <strong> growing green berries,</strong> which later turn white and flower during the summer. Wild animals sometimes even eat them for food!</div>  
    
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
    showModal1: false,
    showModal2: false,
    showModal4: false,
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
	
  background: linear-gradient(rgba(2, 255, 2, 0.25),rgba(0, 128, 0, 0.25) );
	margin: 0;
	padding-top: 10px;
  border-radius: 20px 20px 0px 0px;
  box-shadow: 0px -4px 8px 0 rgba(21, 255, 0, 0.25), 0px -6px 20px 0 rgba(0, 0, 0, 0.20);
}
ion-card-title{
  justify-content: center;
  margin: auto;
}
.card {
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
	background: rgb(38, 78, 51);
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

#sec1{
	background: linear-gradient(rgba(200, 255, 0, 0.25),rgba(255, 255, 255, 0.25));
	/* Successful Immigrant */
	position: relative;
	display: grid;
	grid-template-columns: 50% 50%;
	gap: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 1);
}
#sec1 > img{
  height: 25vh;
  margin: auto;
  margin-bottom: 7vh;
  padding: 5px;
  border-radius: 15px;
  padding-left: 10px
}
#sec1 > div{
  padding: 5px;
  padding-right: 10px

}
#sec2 {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  gap: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 1);
  background: linear-gradient(rgba(21, 255, 0, 0.25),rgba(255, 255, 255, 0.25))
}
#sec2 > img{
  padding: 5px;
  border-radius: 15px;
  width: 75%;
  margin: auto;
}
#sec2 > div{
  padding: 5px 10px 5px;
  
}
#sec3 {
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 1);
  background: linear-gradient(rgba(111, 0, 255, 0.22), rgba(255, 255, 255, 0.25) 60%)
}
#sec3 > img{
  padding: 5px;
  padding-left: 10px;
  border-radius: 15px;
  height: 25vh;
  
}
#sec3 > div{
  padding: 5px;
  padding-right: 10px;
  transform: translateY(10%)
}
#sec4 {
  display: grid;
  grid-template-columns: 60% 40%;
  box-shadow: 0 5px 10px 0px rgb(0 0 0 /15%);
  background: linear-gradient(rgba(0, 225, 255, 0.25), rgba(255, 255, 255, 0.25));
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 1);
}
#sec4 > img{
  max-height: 50vh;
   padding: 5px;
  border-radius: 15px;
  padding-right: 10px
}
#sec4 > div{
  padding-left: 10px;
  text-align: center;
  transform: translateY(25%)
}
#sec5 {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: "sec5-img1 sec5-img2"
  "sec5-div sec5-div"; 
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 1);
  margin-bottom: 0px;
  background: linear-gradient(rgba(255, 155, 4, 0.25),rgba(255, 255, 255, 0.25));
}

#sec5 > img:nth-of-type(1){
  grid-area: sec5-img1;
  padding: 5px;
  border-radius: 15px;
  height: 20vh;
  width: 100%
}
#sec5 > img:nth-of-type(2){
  grid-area: sec5-img2;
  padding: 5px;
  border-radius: 15px;
  height: 20vh;
  width: 100%
}
#sec5 > div{
  grid-area: sec5-div;
  padding: 5px 10px 60px;
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

.sec1-img{
  display:none
}

.background{
    background: linear-gradient(135deg, rgb(255, 255, 255),rgb(61, 194, 61));
    width: 100%;
    transform: translateY(-2vh);
    border-radius: 20px 20px 0px 0px;
    box-shadow: 0px -4px 8px 0 rgba(21, 255, 0, 0.25), 0px -6px 20px 0 rgba(0, 0, 0, 0.20);
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
