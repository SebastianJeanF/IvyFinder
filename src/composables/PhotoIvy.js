import { ref, onMounted, watch } from 'vue';
import { Capacitor } from '@capacitor/core';
import {
  Camera,
  CameraSource,
  CameraResultType,
  Photo,
} from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import axios from 'axios';

import { isPlatform } from '@ionic/vue';
export const takePhoto = async () => {
const imageData = await Camera.getPhoto({
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
      quality: 100,
    });
  
  const fd = new FormData;
  fd.append('photo', imageData.format, "test.jpg")
  console.log("this is fd, or probably data", fd)
  axios.post('http://10.0.0.22:5000/detect', fd)
  .then(function (response) {
    console.log('this is response', response);
  })
  .catch(function (e) {
    console.log(e);
  });



  return {

    takePhoto,
 
  };
}
