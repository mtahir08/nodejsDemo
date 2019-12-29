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
    const fileName = path.basename(filePath);
    if (fileName.startsWith('renamed-')) {
        console.log("we already have this file");
        return;
    }

    const destBucket = admin.storage().bucket(bucket)
    const tempFilePath = path.join(os.tmpdir(), fileName);
    const metadata = { contentType }
    return destBucket.file(filePath).download({
        destination: tempFilePath
    })
        .then(async () => {
            console.log('Thumbnail created at', tempFilePath);
            const thumbFileName = `renamed-${fileName}`;
            const thumbFilePath = path.join(path.dirname(filePath), thumbFileName);

            return destBucket.upload(tempFilePath, {
                destination: thumbFilePath,
                metadata
            })
        })
        .catch((error) => { console.log(error); return; })
});
