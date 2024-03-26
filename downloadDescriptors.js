/* eslint-disable no-undef */
import fs from 'fs'
import path from 'path'
import https from 'https'
import url from 'url'


export default function downloadAndSaveDescriptors(imageUrl, destinationFolder) {
    const parsedUrl = url.parse(imageUrl);
    const fileName = path.basename(parsedUrl.pathname);


    if (!fs.existsSync(destinationFolder)) {
        fs.mkdirSync(destinationFolder, { recursive: true });
    }

    const fileStream = fs.createWriteStream(path.join(destinationFolder, fileName));

    https.get(imageUrl, (response) => {
        response.pipe(fileStream);

        fileStream.on('finish', () => {
            fileStream.close();
            console.log('Image downloaded successfully');
        });

        fileStream.on('error', (err) => {
            console.error('Error downloading image:', err);
            fs.unlinkSync(path.join(destinationFolder, fileName));
        });
    }).on('error', (err) => {
        console.error('Error downloading image:', err);
        fs.unlinkSync(path.join(destinationFolder, fileName));
    });
}

// // Example usage:
// const imageUrl = 'http://localhost:3000/public/static/Alumno01.jpg';
// const destinationFolder = './data';

//downloadAndSaveImage(imageUrl, destinationFolder);