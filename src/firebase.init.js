// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB0tHknfKpAQdrtP8KltBhqYYujiSuapPI',
  authDomain: 'real-love-post.firebaseapp.com',
  projectId: 'real-love-post',
  storageBucket: 'real-love-post.appspot.com',
  messagingSenderId: '672306395302',
  appId: '1:672306395302:web:df250777821534ed435c67',
  measurementId: 'G-1PG4Z2P339',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const auth = getAuth(app)
export default auth
