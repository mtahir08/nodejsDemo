const functions = require('firebase-functions');
const os = require('os')
const path = require('path')
const admin = require('firebase-admin');
admin.initializeApp()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.onFileChange = functions.storage.object().onFinalize((object) => {
    const bucket = object.bucket;
    const contentType = object.contentType;
    const filePath = object.name;

    if (path.basename(filePath).startsWith('renamed-')) {
        console.log("we already have this file");
        return;
    }

    const destBucket = admin.storage().bucket(bucket)
    const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath))
    const metadata = { contentType }
    return destBucket.file(file).download({
        destination: tmpFilePath
    })
        .then(() => {
            return destBucket.upload({
                destination: 'renamed-' + path.basename(filePath),
                metadata
            })
        })
        .catch((error) => { console.log(error); return; })
});
