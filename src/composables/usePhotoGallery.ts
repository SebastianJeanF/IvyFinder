import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo, ImageOptions } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage'
import axios from 'axios';

export {}
    
      // Fetch the photo, read as a blob, then convert to base64 format
    const takePhotos = async () => {
      const cameraPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100,
      });
  
      const fileName = new Date().getTime() + '.jpeg';
      const response = await fetch(cameraPhoto.webPath!);
      const blob = await response.blob();
      const fd = new FormData;
      fd.append('photo', blob, fileName)
      console.log("this is fd, or probably data", fd)
      axios.post('http://10.0.0.22:5000/detect', fd)
      .then((response) => {
        console.log("Success!" + response)
      })
      .catch(function (e) {
        console.log(e);
      });
      // Use webPath to display the new image instead of base64 since it's
      // already loaded into memory

    return { 
    takePhotos
    };
}