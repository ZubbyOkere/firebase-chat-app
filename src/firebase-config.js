// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA8fkxUbBjchVD7t01pPutCne9waUYcjPk',
  authDomain: 'chat-app-3e49f.firebaseapp.com',
  projectId: 'chat-app-3e49f',
  storageBucket: 'chat-app-3e49f.appspot.com',
  messagingSenderId: '524641203332',
  appId: '1:524641203332:web:eafb4937c5bb6b5880bed1',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
