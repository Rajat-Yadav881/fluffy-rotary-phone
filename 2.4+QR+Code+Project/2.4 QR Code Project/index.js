/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qrimage from 'qr-image';
import fs from "fs";
inquirer.prompt([
    /* Pass your questions in here */
    {message : "Type In Your URL: ",name:"URL"}
  ]).then((answers) => {
    // Use user feedback for... whatever!!
    const URL = answers.URL;
    var qr_img = qrimage.image(URL);
    qr_img.pipe(fs.createWriteStream('i_qr.png'));

    fs.writeFile("URL.txt",URL,(err)=>{
        if(err) throw err;
        console.log("the file has been saved");
    })
  }).catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });