<template >
  <ion-page>
  <ion-header>  
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <ion-back-button
            :default-href="pageDefaultBackLink"
          ></ion-back-button>
        </ion-buttons>
     
        <ion-buttons slot="end">
          <slot name="actions-end"></slot>
        </ion-buttons>
        <ion-title>Other Questions</ion-title>    
      </ion-toolbar> 
  </ion-header> 
    <ion-content class="content">
  <Modal filename="poison-ivy-rash.jpg" footer="'Poison ivy rash on my arm' by Vilseskog; licensed under CC BY-NC-SA 2.0" v-if="showModal1" @close="showModal1 = false" >
</Modal>
  <Modal filename="fire.jpg" footer="&#8220;Campfire&#8221; by Doug Beckers; licensed under CC BY-SA 2.0" v-if="showModal2" @close="showModal2 = false" >
</Modal>
  <Modal filename="FAQ-roots.jpg" footer="&#8220;poison&#8221; by hmaon; licensed under CC BY-NC-SA 2.0" v-if="showModal4" @close="showModal4 = false" >
</Modal>
  <Modal filename="animal.jpg" footer="&#8220;Cathedral Hills Trail System&#8221; by BLM Oregon & Washington; licensed under CC BY 2.0" v-if="showModal3" @close="showModal3 = false" >
</Modal>  

    
    <img src="../views/Photos/question-mark-sign.jpg"/>
    <div class="background">



    <header class= "header2 ion-padding">
            <h3><b>More Information</b></h3>  
         </header>


<sec id="title" style="background: rgba(224, 9, 9, 0.25); height:10vh"><hr>Can my rash spread to other parts of the body?</sec>
	<sec id="sec">
		<img src="../views/Photos/poison-ivy-rash.jpg" @click="showModal1 = true" />
		<div>No, the rash or blisters on your or somebody’s skin caused by urushiol cannot spread elsewhere. <strong>Urushiol on the skin gets completely absorbed within a few hours,</strong> so a person is not contagious by the time a rash starts appearing on them. It is common for more bumps and rashes to appear on your body as time passes, which happens because parts of the skin that received little urushiol will take longer for a breakout.</div>
</sec>
<sec id="title" style="background: rgba(224, 9, 9, 0.25); height:10vh"><hr>Are dead poisonous plants safe (or their roots)?</sec>
	<sec id="sec">
		<img src="../views/Photos/FAQ-roots.jpg" @click="showModal4 = true" />
		<div>No, poison ivy, poison oak, and poison sumac are still potent even when dead. <strong>Urushiol takes years to break down,</strong> so the residue that remains on once-living poison ivy and the like are still active. Urushiol takes years to break apart, and it can remain on the surface of dead roots, and they are capable of transferring urushiol to anything that touches them.</div>
</sec>
<sec id="title" style="background: rgba(224, 9, 9, 0.25); height:10vh"><hr>Is it safe to burn poisonous plants to remove them?</sec>
	<sec id="sec">
		<img src="../views/Photos/fire.jpg" @click="showModal2 = true" />
		<div>It’s an <strong>exceptionally dangerous idea to burn poison ivy, oak, or sumac, dead or alive,</strong> as this causes the smoke to be filled with urushiol particles. Breathing the fumes may cause urushiol to get in your lungs, and this can cause a severe respiratory reaction and a systematic full-body reaction. It’s important to also be cautious of <strong>burning wood or branches that might have the roots of these plants wrapped around them.</strong> If you don’t know if a dead vine is from a poisonous plant, it is best to refrain from burning it entirely.</div>
</sec>
<sec id="title" style="background: rgba(224, 9, 9, 0.25); height:10vh"><hr>Are other animals affected by poison ivy?</sec>
	<sec id="sec">
		<img src="../views/Photos/animal.jpg" @click="showModal3 = true" />
		<div style="padding-bottom: 10vh">Birds, pets, and wild animals and species do not react to urushiol. The reaction to this oil is unique to human beings (and interestingly hamsters), and the three urushiol-coated plants are <strong>completely harmless to wildlife.</strong> Wild animals even regularly eat the berries and leaves of poison ivy and poison oak!</div>
</sec>

      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, 
IonContent,
IonCard,
IonCardContent, 
IonCardTitle, 
IonCardHeader,
IonToolbar, 
IonTitle,
IonBackButton,
IonButtons,
IonHeader, 
IonIcon,
IonTabBar, 
IonTabButton } 
from '@ionic/vue';
import {leafOutline} from 'ionicons/icons';
import { onMounted } from 'vue';


export default  {
  name: 'Tab2',
  components: { IonPage, IonContent, IonTitle,
IonBackButton,
IonButtons,
  IonToolbar, IonHeader
  },

  data() {
    return{
      leafOutline,
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
    };
  }
}
</script>


<style scoped>
*{
  box-sizing: border-box;
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
	padding: 5px 10px 0px;
	
}
#sec{
	/* background: linear-gradient(180deg, #74f2ce, #7cffcb);*/ 
	/* Successful Immigrant */
	
	position: relative;
	display: grid;
	align-content: center;
	grid-template-rows: auto;
	grid-template-areas:
	"sec-img"
	"sec-div1"
	;
	
	background: rgba(224, 9, 9, 0.25)
}
#sec > div:nth-of-type(1){
	grid-area: sec-div1;
	padding: 10px;
}

#sec > img:nth-of-type(1){
	grid-area: sec-img;
	margin: auto;
	padding: 5px;
	width: 70vw;
	border-radius: 10px;
  height: 30vh;
}











.background{
    background: linear-gradient(135deg, rgb(255, 255, 255),rgb(174, 255, 174));
    position: absolute;
    top: 20vh;
    border-radius: 20px 20px;
    box-shadow: 0px -4px 8px 0 rgba(21, 255, 0, 0.25), 0px -6px 20px 0 rgba(0, 0, 0, 0.20);
}
.sec{
  background: linear-gradient(45deg,#ccff0050,#09afff50);
}
section{
  max-width: 100vw;
  overflow: scroll;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "one two three";
  gap: 10px; 
}

.plant-title{
  grid-area: plant-title;
  display: flex;
  justify-content: center;
  font-size: 24px;
  padding: 4px;
  background: linear-gradient( rgb(0,0,0,.1), rgb(0,0,0,.3));
  color: black
}
.one{
  grid-area: one;
}
.two{
  grid-area: two;
}
.three{
  grid-area: three;
}

.header-card{
	width: 50vw;
	height: 80%;
	background: transparent;
	margin: 10px 20px 0px;
	
	
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
.blue{
  background: rgb(35, 35, 35);

}
.red{
  background: linear-gradient( rgb(23, 185, 23), rgb(23, 185, 23), rgb(45, 124, 45));
  grid-area: red;
}
.pink{
  background: linear-gradient(135deg, orange, rgb(128, 83, 0));
  grid-area: pink;
  }
.sumac-color{
  background: rgb(199, 101, 117);
  grid-area: sumac-color;
}

.toolbar{
 --background: #307442;
  
    
}
/* ion-title{
  --color: rgb(0, 0, 0)
} doesn't work */ 

#sec1{
	height: 50px;
	position: relative;
	display: flex;
	font-weight: 600;
	font-size: 22px;
	padding-top: 5px;
	padding-left: 10px;
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
#sec4{
	/* background: linear-gradient(180deg, #74f2ce, #7cffcb);*/ 
	/* Successful Immigrant */
	position: relative;
	display: grid;
	grid-template-columns: 30% 67%;
	gap: 5px
}



</style>
