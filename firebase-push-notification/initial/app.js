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
  })
  .catch(function (err) {
    console.log('Unable to get permission to notify.', err);
  });
