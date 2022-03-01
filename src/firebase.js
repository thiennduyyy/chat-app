import firebase from 'firebase/app'
import 'firebase/auth'


export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyC2cOb-IygLlkaZFFwOhbGEdofwiUVS4sM",
    authDomain: "chat-app-3ed91.firebaseapp.com",
    projectId: "chat-app-3ed91",
    storageBucket: "chat-app-3ed91.appspot.com",
    messagingSenderId: "615432567284",
    appId: "1:615432567284:web:fd9233c9c63856d36621a1",
    measurementId: "G-HK86NH20V7"
}).auth();

export default firebase