import axios from 'axios'
import fs from 'fs'
const url = "http://localhost:4001/api/galerias/virtuales/descriptors"
// Function to get names of folders from S3 bucket
export default async function getVirtualItemsFromApi() {
  const json = (await axios.get(url)).data

  const jsonString = JSON.stringify(json, null, 2);

  fs.writeFile('data/imgsIds.json', jsonString, (err) => {
      if (err) {
          console.error('Error writing JSON file:', err);
      } else {
          console.log('JSON file has been created successfully.');
      }
  });


  return json
}
