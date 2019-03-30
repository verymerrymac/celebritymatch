var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
const Clarifai = require('clarifai');

router.post('/save', ((req, res, next) => {
    // const imgTimeStamp = new Date().getTime().toString();

    // to declare some path to store your converted image
    const curDir = (__dirname);
    const dbDir = curDir.slice(0,curDir.length-6);

    const directory = 'images/';
    const image = `${req.body.username}.jpeg`;

    // image takes from body which you uploaded
    const imgdata = req.body.imageSrc;    

    // to convert base64 format into random filename
    const base64Data = imgdata.replace(/^data:([A-Za-z-+/]+);base64,/, '');

    fs.writeFile(dbDir + directory + image, base64Data, 'base64', (err) => {
        if (err) throw err;
        res.send("Ok")
    });
}));

router.get(`/:username/findImage`, (req, res, next) => {
    const curDir = (__dirname);
    const dbDir = curDir.slice(0,curDir.length-6);
    const directory = 'images/';

    const image = `${req.params.username}.jpeg`;

    const imagePath = dbDir + directory + image;
    console.log(imagePath)
    res.sendFile(path.resolve(imagePath));
})

router.post('/clarifai', (req, res, next) => {
    const imageSrc = req.body.imageSrc;    
    console.log(imageSrc)

    const app = new Clarifai.App({
        apiKey: '8469266d2783471ead47f572d20b4171'
    });

    // Identify the image
    var parsedImageData = imageSrc.split("data:image/jpeg;base64,");

    app.models.predict("e466caa0619f444ab97497640cefc4dc", {base64: parsedImageData[1]})
    .then((response) => {
        console.log("Pleasework")
        res.send(response.outputs[0].data.concepts[0].name)
    })
    // .catch((err) => console.log(err))
})

module.exports = router;


