const express = require('express');
const multer = require('multer');
const fs = require('fs');

const app = express();
const port = 3000;

const uploadDir = 'uploads';
if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir)
}

const storage = multer.diskStorage({
    destination : function(req , file , cb){
        cb(null , 'uploads');
    },
    filename : function(req ,file , cb){
        cb(null , Date.now() + '-' + file.originalname )
    }
})

const upload = multer({storage : storage});

app.post('/upload' , upload.single('file') , (req , res) => {
    res.send('File Uploaded')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

app.listen(port, () => {
    console.log(`Server is running ${port} port`)
})



