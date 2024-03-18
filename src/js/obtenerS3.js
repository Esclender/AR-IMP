/* eslint-disable no-undef */
require('dotenv').config()

// Import the AWS SDK for JavaScript
import * as AWS from 'aws-sdk'

// Configure AWS SDK with your credentials
AWS.config.update({
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
  region: process.env.region
});

// Create an S3 instance
const s3 = new AWS.S3();

// Function to retrieve folders from S3, save them locally in cache, and generate temporary paths
export default async function retrieveFoldersFromS3AndCache(bucketName, folderPrefix) {
  try {
    // List objects in the specified bucket with the given prefix
    const params = {
      Bucket: bucketName,
      Prefix: folderPrefix
    };
    const data = await s3.listObjectsV2(params).promise();

    // Extract folder names and file paths from the retrieved objects
    const folderData = data.Contents.reduce((folders, item) => {
      const key = item.Key;
      const [folderName, fileName] = key.split('/'); 
      if (!folders[folderName]) {
        folders[folderName] = [];
      }
      folders[folderName].push({
        fileName,
        s3Path: key,
        temporaryPath: `temp/${folderName}/` // Generate temporary paths
      });
      return folders;
    }, {});

    // Store folder data in cache
    localStorage.setItem('cachedFolders', JSON.stringify(folderData));
    
    return folderData;
  } catch (error) {
    console.error("Error retrieving folders from S3:", error);
    return {};
  }
}

// // Example usage
// const bucketName = 'mp-example-bucket';
// const folderPrefix = 'ar-folder/';
// retrieveFoldersFromS3AndCache(bucketName, folderPrefix)
//   .then(folderData => {
//     console.log("Folders retrieved from S3 and cached locally:", folderData);
//   });
