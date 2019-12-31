import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.MARKET_RESEARCH_FIREBASE_KEY,
  authDomain: process.env.MARKET_RESEARCH_FIREBASE_DOMAIN,
  databaseURL: process.env.MARKET_RESEARCH_FIREBASE_DATABASE,
  projectId: process.env.MARKET_RESEARCH_FIREBASE_PROJECT_ID,
  storageBucket: process.env.MARKET_RESEARCH_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.MARKET_RESEARCH_FIREBASE_SENDER_ID
});

export default app;
