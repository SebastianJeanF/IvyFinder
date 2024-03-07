
<template>
<ion-page>
	<ion-header>
	<ion-toolbar>
        <ion-title>Welcome to IvyFinder</ion-title>    
		</ion-toolbar>
	</ion-header>
    <ion-content>
	<header class="front">
		<ion-card class="header-card">
			<ion-card-header>
				<ion-card-title>Urushiol</ion-card-title>
				<ion-card-subtitle>Treat</ion-card-subtitle>
			</ion-card-header>
		<ion-card-content>It's important to know what do if you ever get exposed!</ion-card-content>
		<div class="gap"></div>
		</ion-card> 
		<ion-img :src="medkit"></ion-img>
	</header>
	<!-- <header class= "header">
          <h3><b>Exposed to poison ivy?</b></h3>
    </header> -->
	
	<section id="title" style="background: rgba(224, 9, 9, 0.19)"><hr>Immediate Action</section>
	<section id="sec1">
		<img src="./Photos/washing-hands.jpg" @click="showModal1=true"/>
		<div>If you suspect that your skin came in contact with urushiol from a poisonous plant, <strong>act fast </strong> to reduce the change of getting a rash. It takes <strong>as little as 30 minutes for urushiol to start absorbing</strong> to the skin, and there is little you can do to prevent a rash once it is fully absorbed. </div>
		<img src="./Photos/shower.jpeg" @click="showModal2=true"/>
		<div>Immediately wash the area of contact with soap, rubbing alcohol, or with a special product designed to help remove urushiol.
			Take specifically a <strong>cool/lukewarm</strong> shower right after exposure if you decide it's necessary, because a <strong>hot shower</strong> will open your pores and can allow more urushiol to be absorbed through the skin.
		</div>
	</section>
	<hr>
	<section id="title">Treatment</section>
	<section id="sec2">
		<img src="./Photos/hydrocortisone_cream.jpg" @click="showModal3=true" />
		<img src="./Photos/calamine-lotion.jpg" @click="showModal4=true"/>
		<div>For mild cases, effective treatment to help with a poison rash include on-the-counter <strong>hydrocortisone creams</strong> and <strong>calamine lotion</strong> container menthol. Applying a <strong>cool, wet compress</strong> on the affected area periodically throughout the day is also a good way to control itching.</div>
		<div><strong style="color: rgb(61, 0, 0)">15% of the all people allergic to poison ivy are prone to a severe reaction.</strong> Their immune system responds more violently, leading to intensified swelling, rash, and blisters. It is recommended to go to the hospital to be treated, where <strong>shots of corticosteroid </strong>are usually provided to treat the inflammation.</div>
		<div> <strong>Call the emergency or 911</strong> if you have <strong>difficulty breathing or severe swelling </strong>from a reaction, or if you were exposed to poison ivy and have had previous experience of a severe reaction to urushiol</div>
	</section>
	
	<Modal filename="washing-hands.jpg" footer="&#8220;Person Washing His Hand&#8221;; by Burst (Pexels); Public Domain" v-if="showModal1" @close="showModal1 = false" >
  </Modal>
	<Modal filename="shower.jpeg" footer="&#8220;Modern bathroom interior with shower cabin in house&#8221; by Max Vakhtbovych (Pexels); Public Domain" v-if="showModal2" @close="showModal2 = false" >
  </Modal>
    <Modal filename="hydrocortisone_cream.jpg" footer="&#8220;Tube of hydrocortisone cream, 1% concentration, 1 ounce package, Natureplex brand&#8221;; from Wikimedia Commons; Father Goose; CC by 4.00" v-if="showModal3" @close="showModal3 = false" >
  </Modal>
      <Modal filename="calamine-lotion.jpg" footer="&#8220;Calamine Lotion BP. Labelled (pharmaceuticals - commercial pharmaceutical supplies)&#8221;; licensed under CC BY-NC-SA 4.0" v-if="showModal4" @close="showModal4 = false" >
  </Modal>
  
	
	<!-- <header class= "header">
          <h3><b>Precautions to consider</b></h3>
    </header>
	<hr>
	<section id="title">How to Protect Yourself</section>	
	<section id="sec4">
		<img src="./washing-hands.jpg"/>
		<div>If you suspect you come in contact with </div>
		<div></div>
	</section>
	<hr>
	<section id="title">Safely Removing Plants</section>	
	<section id="sec5">
		<img src="./washing-hands.jpg"/>
		<div>If you suspect you come in contact with </div>
		<div></div>
	</section> -->
	<div style="margin-bottom: 80px"></div>
  </ion-content>
</ion-page>
</template>
<script>
import { medkit} from 'ionicons/icons';
import { IonPage, IonContent, IonCard, IonCardContent, IonToolbar, IonHeader, IonCardSubtitle, IonCardHeader, IonCardTitle, IonImg, IonTabBar } from '@ionic/vue';


export default {
  components: {
    IonPage, 
    IonContent,
    IonCard,
    IonCardContent,
	IonToolbar,
	IonHeader,
	IonCardSubtitle,
	IonCardHeader,
	IonCardTitle,
	IonImg
  },
  data() {
    return {
        medkit,
		showModal1: null,
		showModal2: null,
		showModal3: null,
		showModal4: null,    
    };
  },
  methods: {
    
  }
  
}
</script>

<style scoped>
*{
	box-sizing: border-box;
}

ion-img{
	width: 40vw;
	height: 80%;
	
}
ion-toolbar{
	--border-color: transparent
}
ion-content{
	margin-bottom: 70px;
}
ion-card{
	box-shadow: none;
	--color: default;
}
div{
	font-size: 16px
}
#title{
	height: 50px;
	position: relative;
	display: block;
	font-weight: 600;
	font-size: 22px;
	padding-top: 5px;
	padding-left: 10px;
}
.header {
  position: relative;
  width: 70%;
  border-radius: 0px 30px 30px 0px;
  background-image: linear-gradient(135deg, greenyellow, rgb(100,192,33));
  color: rgb(20, 20, 20);
  margin-top: 2vh;
  margin-bottom: 10px;
  padding: 2px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.header > h3{
	padding-left: 3px
}

hr {
	position: relative;
	margin: auto;
	background-color: grey;
	height: 2px;
	border-radius: 20px;
	margin-top: 3px;
	width: 50%;
}
#sec1{
	/* background: linear-gradient(180deg, #74f2ce, #7cffcb);*/ 
	/* Successful Immigrant */
	
	position: relative;
	display: grid;
	align-content: center;
	grid-template-rows: auto;
	grid-template-areas:
	"sec1-img"
	"sec1-div1"
	"sec1-img2"
	"sec1-div2"
	;
	
	background: rgba(224, 9, 9, 0.19)
}
#sec1 > div:nth-of-type(1){
	grid-area: sec1-div1;
	padding: 10px;
}
#sec1 > div:nth-of-type(2){
	grid-area: sec1-div2;
	padding: 10px;
}
#sec1 > img:nth-of-type(1){
	grid-area: sec1-img;
	margin: auto;
	padding: 5px;
	width: 70vw;
	border-radius: 10px;
}
#sec1 > img:nth-of-type(2){
	grid-area: sec1-img2;
	margin: auto;
	padding: 5px;
	width: 70vw;
	border-radius: 10px;
}
#sec2{
	/* background: linear-gradient(180deg, #74f2ce, #7cffcb);*/ 
	/* Successful Immigrant */
	position: relative;
	display: grid;
	align-content: center;
	grid-template-columns: 50% 50%;
	/* grid-template-rows: repeat(2, 1fr); */
	grid-template-areas:
	"sec2-img sec2-div1"
	"sec2-img2 sec2-div1"
	"sec2-div2 sec2-div2"
	"sec2-div3 sec2-div3"
	
}
#sec2 > div:nth-of-type(1){
	grid-area: sec2-div1;
	padding: 10px
}
#sec2 > div:nth-of-type(2){
	grid-area: sec2-div2;
	padding-left: 10px;
	padding-right: 10px;
	
}
#sec2 > div:nth-of-type(3){
	grid-area: sec2-div3;
	padding: 10px;
	width: 80vw;
	margin: auto;
	text-align: center;
	background: linear-gradient(rgba(255, 0, 0, 0.5),rgb(107, 10, 10,.5))
}
#sec2 > img:nth-of-type(1){
	grid-area: sec2-img;
	padding: 5px;
	padding-left: 10px;
	border-radius: 10px;
	
}
#sec2 > img:nth-of-type(2){
	grid-area: sec2-img2;
	padding: 5px;
	padding-left: 10px;
	
	border-radius: 10px;
}
#sec3{
	/*background: linear-gradient(180deg, #74f2ce, #7cffcb); */
	/* Successful Immigrant */
	position: relative;
	display: grid;
	grid-template-columns: 40% 60%;
	grid-template-rows: repeat(2, 1fr);
	grid-template-areas:
	"sec3-img sec3-div1"
	"sec3-div1 se3-div2";
	gap: 5px
}
#sec3 > div:nth-child(1){
	grid-area: sec3-div1;
}
#sec3 > div:nth-child(2){
	grid-area: sec3-div2;
}
#sec3 > img{
	grid-area: sec3-img;
}


#sec4{
	/* background: linear-gradient(180deg, #74f2ce, #7cffcb);*/ 
	/* Successful Immigrant */
	position: relative;
	display: grid;	
	grid-template-columns: 60% 37% 3%;
	grid-template-areas:
	"sec4-div1 sec4-img"
	"sec4-div2 sec4-div2";
	gap: 5px
}
#sec4 > img{
	grid-area: sec4-img;
	transform: translateY(-5px)
}
#sec4 > div:nth-child(1){
	grid-area: sec4-div;
}
#sec4 > div:nth-child(2){
	grid-area: sec4-div2;
}
#sec5{
	/* background: linear-gradient(180deg, #74f2ce, #7cffcb);*/ 
	/* Successful Immigrant */
	height: 200px;
	position: relative;
	display: grid;
	align-content: center;
	grid-template-columns: 40% 60%;
	grid-template-rows: repeat(2, 1fr);
	grid-template-areas:
	"sec5-img sec5-div1"
	"sec5-div2 sec5-div2";
	gap: 5px
}
#sec5 > div:nth-child(1){
	grid-area: sec5-div1;
}
#sec5 > div:nth-child(2){
	grid-area: sec5-div2;
}
#sec5 > img{
	grid-area: sec5-img;
}
.header-card{
	width: 50vw;
	background: transparent;
	margin: 10px 20px 0px;
	--ion-box-shadow-color: red
}

.front{
	background: linear-gradient(180deg, rgb(89, 148, 89, .8), transparent);
	background: linear-gradient(180deg, rgb(89, 148, 89), rgb(123, 172, 123,.6));
	display: grid;
	grid-template-columns: 60% 40%;
	height: 30vh;
	position: relative;
	align-content: center;
}
.front ion-img{
	padding:5px;
	padding-right: 10px;
	transform: translateY(2vh)
}
.content{
    margin-bottom: 80px;
}

</style>