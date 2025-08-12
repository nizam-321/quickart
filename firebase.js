// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBsXnLmVPsa96zjLNXIJqWys2Xn7gqzADg",
//   authDomain: "quckkart.firebaseapp.com",
//   projectId: "quckkart",
//   storageBucket: "quckkart.firebasestorage.app",
//   messagingSenderId: "75953989798",
//   appId: "1:75953989798:web:cee8fda69e3a57dabf2c67",
//   measurementId: "G-GLP35BDS1E"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);

// export { auth };



import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBsXnLmVPsa96zjLNXIJqWys2Xn7gqzADg",
  authDomain: "quckkart.firebaseapp.com",
  projectId: "quckkart",
  storageBucket: "quckkart.firebasestorage.app",
  messagingSenderId: "75953989798",
  appId: "1:75953989798:web:cee8fda69e3a57dabf2c67",
  measurementId: "G-GLP35BDS1E"
};

const app = initializeApp(firebaseConfig);

let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

const auth = getAuth(app);

export { auth, analytics };
