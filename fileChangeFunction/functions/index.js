const functions = require('firebase-functions');
const os = require('os')
const fs = require('fs')
const path = require('path')
const admin = require('firebase-admin');
const spawn = require('child-process-promise').spawn;
admin.initializeApp()
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.onFileChange = functions.storage.object().onFinalize(async (object) => {
    const fileBucket = object.bucket; // The Storage bucket that contains the file.
    const contentType = object.contentType; // File content type.
    const filePath = object.name; // File path in the bucket.
    const fileName = path.basename(filePath);
    // If image not exists
    if (fileName.resourcdState === 'not_exists') {
        console.log("we deleted this file. exit...")
        return;

    }
    // Exit if the image is already a thumbnail.
    if (fileName.startsWith('thumb_')) {
        console.log('Already a Thumbnail.');
        return;
    }
    // Exit if this is triggered on a file that is not an image.
    if (!contentType.startsWith('image/')) {
        console.log('This is not an image.');
        return;
    }



    // Download file from bucket.
    const bucket = admin.storage().bucket(fileBucket);
    const tempFilePath = path.join(os.tmpdir(), fileName);
    const metadata = { contentType };
    await bucket.file(filePath).download({ destination: tempFilePath });
    console.log('Image downloaded locally to', tempFilePath);
    // Generate a thumbnail using ImageMagick.
    await spawn('convert', [tempFilePath, '-thumbnail', '200x200>', tempFilePath]);
    console.log('Thumbnail created at', tempFilePath);
    // We add a 'thumb_' prefix to thumbnails file name. That's where we'll upload the thumbnail.
    const thumbFileName = `thumb_${fileName}`;
    const thumbFilePath = path.join(path.dirname(filePath), thumbFileName);
    // Uploading the thumbnail.
    await bucket.upload(tempFilePath, {
        destination: thumbFilePath,
        metadata: metadata,
    });
    // Once the thumbnail has been uploaded delete the local file to free up disk space.
    return fs.unlinkSync(tempFilePath);
});