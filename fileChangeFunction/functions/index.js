const functions = require('firebase-functions');
const gcs = require("@google-cloud/storage")
const os = require('os')
const path = require('path')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.onFileChange = functions.storage.object().onFinalize((event) => {
    console.log(event);
    const object = event.data;
    const bucket = object.bucket;
    const contentType = object.contentType;
    const filePath = object.name;

    if (path.basename(filePath).startsWith('renamed-')) {
        console.log("we already have this file");
        return;
    }

    const destBucket = gcs.bucket(bucket)
    const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath))
    const metadata = { contentType }
    return destBucket.file(file).download({
        destination: tmpFilePath
    })
        .then(() => {
            destBucket.upload({
                destination: 'renamed-' + path.basename(filePath),
                metadata
            })
        })
        .catch(() => { })
});
