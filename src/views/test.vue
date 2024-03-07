<template>
<ion-page>
    <ion-content>
<swiper
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide class="b">Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    ...
  </swiper>
    </ion-content>
 </ion-page>
</template>


<script lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
// import { defineComponent } from 'vue';
// import { Swiper, SwiperSlide } from 'swiper/vue';
//import 'swiper/css';

export default ({
  components: { IonContent, IonPage },
  setup() {
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    const onSwiper = (swiper: any) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
    return { 
        slideOpts,
        onSwiper,
        onSlideChange, 
    }
  }
});
</script>

<style scoped>
.b {
  padding: 20px
}
</style>