<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Photo Gallery</ion-title>
			</ion-toolbar>
		</ion-header>
		<LoadingModal v-if="showLoading"></LoadingModal>
		<ion-content :fullscreen="true" v-else>
			<div class="trim">
				<img class="top" src="./Photos/bladdernut.jpg" style="aspect-ratio: 3/2" />
			</div>
			<div class="background">
				<ion-card class="card-top">
					<ion-card-header>
						<ion-card-title>IvyFinder</ion-card-title>
					</ion-card-header>
					<ion-card-content
						>Object detection is a field of computer science involved in recognizing instances of a
						given thing. The model on this app is
						<strong
							>designed specifically to detect poison ivy from other plants within photos.</strong
						>
						Don't solely rely on this model to determine whether a plant is safe or not, but use it
						to confirm suspicions or get an idea of what plant you are dealing
						with.</ion-card-content
					>
				</ion-card>
				<ion-card>
					<ion-card-header v-if="image != null">
						<img :src="image" alt="Loading" />
					</ion-card-header>
					<ion-card-header v-else>
						<div style="background:grey; height: 200px; width: 200px; margin: auto"></div>
					</ion-card-header>
					<ion-card-content class="content-button"
						><ion-button class="upload-btn" @click="$refs.fileInput.click()"
							>Upload/Take your Picutre!</ion-button
						></ion-card-content
					>
				</ion-card>
				<input style="display: none" type="file" @change="onFileSelected" ref="fileInput" />

				<!-- <input style="display: none" type="file" @change="onFileSelected" ref="fileInput"/> -->
				<section class="gallery">
					<ion-button class="btm-btn" @click="onUpload">Run Model!</ion-button>
					<ion-card v-if="image2 != null">
						<ion-card-header>
							<img :src="image2" alt="Awaiting model" @click="myModal = true" />
						</ion-card-header>
					</ion-card>
					<!-- <input type="file" @change="onFileSelected" />
        <ion-button @click="onUpload">Click me</ion-button>
        <button class="button" @click="onUpload">Click me</button>
        <button @click="takePhoto">
          Take pick
        </button> -->
				</section>
			</div>
		</ion-content>
	</ion-page>
</template>

<script>
import { camera, trash, close, leafOutline } from 'ionicons/icons';
import axios from 'axios';
import { takePhoto } from '@/composables/PhotoIvy';
import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonButton,
	IonCard,
	IonCardContent,
	IonCardTitle,
	IonCardHeader,
} from '@ionic/vue';

export default {
	name: 'Tab3',
	components: {
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonPage,
		IonButton,
		IonCard,
		IonCardContent,
		IonCardTitle,
		IonCardHeader,
	},
	data() {
		return {
			selectedFile: null,
			takePhoto,
			leafOutline,
			// image: "https://ivy-model.herokuapp.com/static/uploads/bushkillervine.jpg",
			image: null,
			image2: null,
			showLoading: false,
			myModal: false,
		};
	},
	methods: {
		onFileSelected(event) {
			console.log('This is event: ' + event);
			this.selectedFile = event.target.files[0];
			console.log(this.selectedFile);
			this.image = URL.createObjectURL(this.selectedFile);
			// This is the file the user selecetd
		},
		// Now we want to send an HTTP Request to an API endpoint
		// that accepts the file
		// This job can be done in binary format or form data
		// Form data is a JavaScript object that mixes normal fields
		// and files and packeges it into one request body to be sent
		// to the back end
		onUpload() {
			axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
			const fd = new FormData();
			fd.append('photo', this.selectedFile, this.selectedFile.name);
			console.log('this is fd:', fd);
			this.showLoading = true;
			// Ucomment this for detection from an online internet server
			// axios.post('https://ivy-model.herokuapp.com/detect', fd)
			axios
				.post('http://127.0.0.1:5000/fetch', fd)
				// .post('http://127.0.0.1:5000/detect', fd)
				.then((response) => {
					console.log('This is the event object returned: ->' + response);
					// this.image2 = "https://ivy-model.herokuapp.com" + response.data
					this.image2 = 'http://127.0.0.1:5000' + response.data;
					console.log('Success - Data returned! -> ' + this.image2);
					this.showLoading = false;
				})
				.catch(function(e) {
					this.showLoading = false;
					console.log(e);
				});
		},
	},
};
</script>

<style scoped>
.card-top {
	background: linear-gradient(45deg, #e91e62c2, #ffeb3bcc);
	box-shadow: 0px 4px 8px 0 rgba(38, 83, 0, 0.5), 0px 6px 20px 0 rgba(106, 124, 2, 0.5),
		0px -4px 8px 0 rgba(0, 0, 0, 0.25), 0px -6px 20px 0 rgba(0, 0, 0, 0.2);
	text-shadow: 2px 2px 4px white;
	color: white;
}
.card-top ion-card-content {
	text-shadow: 2px 2px 4px black;
}
.content-button > ion-button {
	margin: auto;
	transform: translateY(0);
}
.gallery {
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto;
	justify-content: center;
	transform: translateY(-8vh);
}
.gallery ion-button {
	width: 143px;
	margin: auto;
	margin-bottom: 10vh;
	margin-top: 0;
}
.toolbar {
	--ion-background-color: #307442;
	color: white;
}
.button {
	transform: translateY(150%);
}
.trim {
	max-height: 20vh;
	overflow: hidden;
}
.background {
	background: linear-gradient(135deg, rgb(255, 255, 255), rgb(157, 230, 157));
	width: 100%;
	transform: translateY(-6vh);
	border-radius: 20px 20px 0px 0px;
	box-shadow: 0px -4px 8px 0 rgba(21, 255, 0, 0.25), 0px -6px 20px 0 rgba(0, 0, 0, 0.2);
}
.btm-btn {
	--background: rgb(23, 114, 30);
}
.upload-btn {
	--background: rgb(88, 153, 82);
}
</style>
