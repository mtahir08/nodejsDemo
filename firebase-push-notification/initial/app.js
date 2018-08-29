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
  })
  .catch(function(err) {
    console.log('Unable to get permission to notify.', err);
  });
