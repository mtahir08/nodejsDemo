// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCPQLmtEDq4cblHl6PVo3sQElai7QtqkI0',
  authDomain: 'test-project-for-batch3.firebaseapp.com',
  databaseURL: 'https://test-project-for-batch3.firebaseio.com',
  projectId: 'test-project-for-batch3',
  storageBucket: 'test-project-for-batch3.appspot.com',
  messagingSenderId: '89567004593'
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging
  .requestPermission()
  .then(function() {
    console.log('Notification permission granted.');
    // Get Instance ID token. Initially this makes a network call, once retrieved
    // subsequent calls to getToken will return from cache.
    return messaging.getToken();
  })
  .then(function(token) {
    console.log("token");
    console.log(token);
  })
  .catch(function(err) {
    console.log('error', err);
  });


  messaging.onMessage(function(payload) {
    console.log('Message received. ', payload);
  });

 

  