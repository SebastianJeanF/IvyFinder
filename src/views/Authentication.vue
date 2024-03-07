<template>
  <ion-page>

    <ion-header>
      <ion-toolbar class="test">
        <ion-title>Sign In/Up</ion-title>
      </ion-toolbar>
    </ion-header>
  
    <ion-content :fullscreen="true" class="contents">
      
      <ion-card class="card">
        <div class="border"></div>
        <ion-card-header>
          <ion-card-title> Welcome to IvyFinder </ion-card-title>
          <ion-card-subtitle> Sign In/Up </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content> <!-- .prevent prevents the page from being reloaded -->
          <form
            @submit.prevent=" 
              mode === AuthMode.SignIn
                ? signInWithEmailAndPassword(email, password)
                : signUpWithEmailAndPassword(name, email, password)
            "
          >
            <ion-item v-if="mode === AuthMode.SignUp">
              <ion-label position="floating">Name</ion-label>
              <ion-input v-model="name"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input v-model="email"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Password</ion-label>
              <ion-input v-model="password" type="password"></ion-input>
            </ion-item>
            <ion-button
              expand="block"
              color="primary"
              class="ion-margin-top"
              type="submit"
            >
              {{ mode === AuthMode.SignIn ? "Sign In" : "Sign Up" }}
            </ion-button>
            <ion-button
              expand="block"
              color="secondary"
              class="ion-margin-top"
              @click="mode = mode === AuthMode.SignIn ? AuthMode.SignUp : AuthMode.SignIn ">
              {{ mode === AuthMode.SignIn ? "Sign Up" : "Cancel" }}
            </ion-button> 
          </form>
        </ion-card-content>
        <ion-card-content v-if="errorMsg" class="error-message">
            {{errorMsg}}
        </ion-card-content>
      </ion-card>
    
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonInput,
  IonButton,
  IonLabel,
  IonItem,
} from "@ionic/vue";

import { auth, db } from "../main";
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
//import { collection, addDoc } from "firebase/firestore"; 
enum AuthMode {
  SignIn,
  SignUp,
}

export default {
  name: "Authentication",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonInput,
    IonButton,
    IonLabel,
    IonItem,
    IonCardHeader
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      name: "",
      email: "",
      password: "",
      mode: AuthMode.SignIn,
      errorMsg: "",
    });

    const signInWithEmailAndPassword = async (
      email: string,
      password: string
    ) => {
      try {
        if (!email || !password) { //If you dont't have email or password
          state.errorMsg = "Email and password required!";
          return;
        }
        // This needs to be an async function since there is an "await"
        await auth.signInWithEmailAndPassword(email, password);
        router.push("/tabs/tab1");
      } catch (error) {
        state.errorMsg = error.message;
      }
    };

    const signUpWithEmailAndPassword = async (
      name: string,
      email: string,
      password: string
    ) => {
      try {
        if (!name || !email || !password) {
          state.errorMsg = "Name, email, and password required!";
          return;
        }

        const authRes = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        /* eslint-disasble */
        // Question mark checks if it't not null

        // We are going to make an entry in Firestore in a users' collection
        // We uid as document
        // await setDoc(doc(db, authRes.user?.uid), {
        //         name,
        //         email
        //         });
        db.collection("users").doc(authRes.user?.uid).set({
          name,
          email,
        });
        



        router.push("/tabs/tab1");
      } catch (error) {
        state.errorMsg = "Please try again";
      }
    };

    return {
      ...toRefs(state), //this is a spread operator
      signInWithEmailAndPassword,
      signUpWithEmailAndPassword,
      AuthMode,
    };
  },
};
</script>

<style scoped>
.center {
  display: flex;
  height: 90vh;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.error-message {
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
  text-align: center;
}
.test{
  
}
.border{
background: linear-gradient(
-71deg
,#4a6ee0,#15c39a 95%);
padding: 10px;
}
.card{
  margin-top: 10px red

}
.contents{
  position: relative;
  background-image: url("./Photos/background.jpeg");
    background-size: cover;
  height: 100vh;

  /* transform: translateY(10%) */
}
ion-content{
  --background: url("./Photos/leaves.jpg") no-repeat center center / cover; 

} 


</style>