const functions = require('firebase-functions');
const os = require('os')
const fs = require('fs')
const path = require('path')
const admin = require('firebase-admin');
const spawn = require('child-process-promise');
admin.initializeApp()
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.onFileChange = functions.storage.object().onFinalize((object) => {
    const bucket = object.bucket;
    const contentType = object.contentType;
    const filePath = object.name;
    const fileName = path.basename(filePath);
    if (fileName.startsWith('renamed-')) {
        console.log("we already have this file");
        return;
    }
    // Exit if this is triggered on a file that is not an image.
    if (!contentType.startsWith('image/')) {
        return console.log('This is not an image.');
    }

    const destBucket = admin.storage().bucket(bucket)
    const tempFilePath = path.join(os.tmpdir(), fileName);
    const metadata = { contentType }
    return destBucket.file(filePath).download({
        destination: tempFilePath
    })
        .then(() => {
            return spawn('convert', [tempFilePath, '-resize', '500*500', tempFilePath])
        })
        .then(() => {
            console.log('Thumbnail created at', tempFilePath);
            const thumbFileName = `renamed-${fileName}`;
            const thumbFilePath = path.join(path.dirname(filePath), thumbFileName);
            return destBucket.upload(tempFilePath, {
                destination: thumbFilePath,
                metadata
            })
        })
        .then(() => {
            // Once the thumbnail has been uploaded delete the local file to free up disk space.
            return fs.unlinkSync(tempFilePath);
        })
        .catch((error) => { console.log(error); return; })
});
