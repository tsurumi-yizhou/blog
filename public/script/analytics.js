import {initializeApp} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {getAnalytics} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyA5vwX8B_EqPop5YlS7kucIPZuJH9uaMlY",
    authDomain: "blog-3cfb3.firebaseapp.com",
    projectId: "blog-3cfb3",
    storageBucket: "blog-3cfb3.appspot.com",
    messagingSenderId: "164011308986",
    appId: "1:164011308986:web:f2365efc2778670f26cf83",
    measurementId: "G-YPREBP04T3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
