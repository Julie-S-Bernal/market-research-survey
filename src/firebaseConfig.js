import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const configuration = firebase.initializeApp({
    apiKey: "AIzaSyDEi2b7Lshaz7aQQuMX7m1LKPi7m6CAXY0",
    authDomain: "market-research-survey.firebaseapp.com",
    databaseURL: "https://market-research-survey.firebaseio.com",
    projectId: "market-research-survey",
    storageBucket: "gs://market-research-survey.appspot.com",
    messagingSenderId: "315493474655",
    appId: "1:315493474655:web:97b8202626a97c977696ea",
    measurementId: "G-2YDNH7FD10"
});


// FIX ISSUE with class and many renitioalization of firebase
class FirebaseConfig{
    constructor(){
        firebase.initializeApp(configuration);
        this.auth = firebase.auth();
        this.firestore = firebase.firestore();
    }

    async register(email,password){
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(error => {
            console.log(error);
        });
        return user;
    }

    async login(email,password){
        const user = await firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
            console.log(error);
        });
        return user;
    }

    async logout(){
        await firebase.auth().signOut().catch(error => {
            console.log(error);
        });
    }
}

export default !firebase.apps.length
  ? firebase.initializeApp(configuration).firestore()
  : firebase.app().firestore();