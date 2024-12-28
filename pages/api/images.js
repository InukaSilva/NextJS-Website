import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const photosDir = path.join(process.cwd(), 'public', 'Photos');

  console.log('Photos directory path:', photosDir);

  fs.readdir(photosDir, (err, files) => {
    if (err) {
      console.error('Error reading photos directory:', err);
      return res.status(500).json({ error: 'Failed to load images' });
    }

    console.log('Files in photos directory:', files);


    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

    console.log('Filtered image files:', imageFiles);

    res.status(200).json(imageFiles);
  });
}