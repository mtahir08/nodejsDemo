const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

//  Create and Deploy Your First Cloud Functions
//  https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.notify = functions.https.onRequest((request, response) => {

  // https://us-central1-test-project-for-batch3.cloudfunctions.net/notify
  if (request.body && request.body.token) {
    const messaging = admin.messaging();
    const payload = {
      notification: {
        title: request.body.title,
        body: request.body.message,
        status: 'Wohoo its work',
        click_action: request.body.url || 'https://example.com'
      }
    };
    messaging.sendToDevice(request.body.token, payload);
  }
  response.send('Hello from Firebase!');
});
