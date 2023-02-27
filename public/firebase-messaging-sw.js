// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyDCGaqUCFX254RMTF1H10_uLdcMvdzAYpU",
  authDomain: "pushauth-fc821.firebaseapp.com",
  projectId: "pushauth-fc821",
  storageBucket: "pushauth-fc821.appspot.com",
  messagingSenderId: "403884574568",
  appId: "1:403884574568:web:7a99ca22d65af7cc0d78dd",
  measurementId: "G-ZZJZMJYHLJ",
};

firebase.initializeApp(firebaseConfig);
// Retrieve firebase messaging
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
