const fs = require('fs');
const path = require('path');

// Get the current directory of the script
const currentDir = __dirname;

// Specify the filename
const fileName = 'data.txt';

// Construct the full path to the text file
const filePath = path.join(currentDir, fileName);
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }
  
    // Display the content of the file
    console.log('File content:', data);
  });

