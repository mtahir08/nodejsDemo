// Initialize Firebase
var config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging
  .requestPermission()
  .then(function () {
    console.log('Notification permission granted.');
    // Get Instance ID token. Initially this makes a network call, once retrieved
    // subsequent calls to getToken will return from cache.
    return messaging.getToken();
  })
  .then(function (token) {
    console.log("token");
    console.log(token);
  })
  .catch(function (err) {
    console.log('error', err);
  });


messaging.onMessage(function (payload) {
  console.log('Message received. ', payload);
});



