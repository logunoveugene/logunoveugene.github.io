<template>
  <div class="about">
    <div v-if="authUser">
      <h2>Signed in as {{authUser.email}}
        <img v-if="linkedGoogle"
             src="https://www.gstatic.com/mobilesdk/160512_mobilesdk/auth_service_google.svg" alt="">
        <img v-if="linkedPassword"
             src="https://www.gstatic.com/mobilesdk/160409_mobilesdk/images/auth_service_email.svg" alt="">
      </h2>
      <img :src="authUser.photoURL" height="150">
      <p>👩‍🍳 Hi, {{authUser.displayName || 'friend'}} we know you like {{authUser.favoriteFood || 'food'}}.</p>
      <button @click="signOut">Sign out</button>
      <button v-if="!linkedGoogle" @click="linkGoogle">Link Google Account</button>
      <button v-else @click="unlinkGoogle">Unlink Google Account</button>

      <form @submit.prevent="updateProfile">
        <h2>Update Profile</h2>
        <input v-model="displayName" placeholder="Your name">
        <input v-model="photoURL" placeholder="Your photo url">
        <button>Update</button>
      </form>

      <form @submit.prevent="updateCustomDetails">
        <h2>Update Additional Details</h2>
        <input v-model="favoriteFood" placeholder="Your favorite food">
        <button>Update</button>
      </form>

      <form @submit.prevent="updateEmail">
        <h2>Update Email</h2>
        <input v-model="email" placeholder="Your email">
        <button>Update</button>
      </form>


    </div>

    <div v-else>
      <div>
        <button @click="signInWithGoogle">Войти с помощью Google</button>
      </div>

    </div>
  </div>
</template>

<script>
    // @ is an alias to /src

    import * as firebase from 'firebase';

    var config = {
        apiKey: "AIzaSyDyo2BElrfnbRLwphitvqnGcdUpbCb2IRQ",
        authDomain: "pwa-app-3c506.firebaseapp.com",
        databaseURL: "https://pwa-app-3c506.firebaseio.com",
        projectId: "pwa-app-3c506",
        storageBucket: "pwa-app-3c506.appspot.com",
        messagingSenderId: "149010982851"
    };
    firebase.initializeApp(config);

    export default {
        name: 'home',
        component: {

        },
        data: function () {
            return {
                email: '',
                password: '',
                displayName: null,
                photoURL: null,
                newPassword: null,
                favoriteFood: null,
                authUser: null
            }
        },
        computed: {
            linkedGoogle() {
                return !!this.authUser.providerData.find(provider => provider.providerId === 'google.com')
            },
            linkedPassword() {
                return !!this.authUser.providerData.find(provider => provider.providerId === 'password')
            }
        },
        methods: {
            register() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .catch(error => alert('🤕' + error.message))
            },
            signOut() {
                firebase.auth().signOut()
            },
            signInWithGoogle() {
                const provider = new firebase.auth.GoogleAuthProvider()
                firebase.auth().signInWithPopup(provider)
                    .catch(error => alert('🤕' + error.message))
                    .then(data => console.log(data.user, data.credential.accessToken))
            },
            linkGoogle() {
                const provider = new firebase.auth.GoogleAuthProvider()
                this.authUser.linkWithPopup(provider)
                    .catch(error => alert('🤕' + error.message))
            },
            unlinkGoogle() {
                this.authUser.unlink('google.com')
            },
            updateProfile() {
                this.authUser.updateProfile({
                    displayName: this.displayName,
                    photoURL: this.photoURL
                })
            },
            updateCustomDetails() {
                firebase.database().ref('users').child(this.authUser.uid)
                    .update({favoriteFood: this.favoriteFood})
            },
            updateEmail() {
                this.authUser.updateEmail(this.email)
            },
            updatePassword() {
                this.authUser.updatePassword(this.newPassword)
                    .then(() => {
                        this.newPassword = null
                    })
                    .catch(error => alert('🤕' + error.message))
            }
        },
        created() {
            firebase.auth().onAuthStateChanged(user => {
                this.authUser = user
                if (user) {
                    this.displayName = user.displayName
                    this.photoURL = user.photoURL
                    this.email = user.email
                    firebase.database().ref('users').child(user.uid).once('value', snapshot => {
                        if (snapshot.val()) {
                            this.favoriteFood = snapshot.val().favoriteFood
                            this.authUser, 'favoriteFood', this.favoriteFood
                        }
                    })
                }
            })
        }

    }
</script>
