const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path"); // Import the path module

const RecrutementModel = require('./models/Recrutement');
const ContactModel = require('./models/Contact');


const app = express();

app.use(express.json());
app.use(cors());

// Serve static files from the 'files' folder inside the 'server' folder
app.use('/files', express.static(path.join(__dirname, 'files')));

mongoose.connect("mongodb://admin:V0HHEqivlAvJS81E@ac-vpjf5u0-shard-00-00.hykofdm.mongodb.net:27017,ac-vpjf5u0-shard-00-01.hykofdm.mongodb.net:27017,ac-vpjf5u0-shard-00-02.hykofdm.mongodb.net:27017/Recrutement?ssl=true&replicaSet=atlas-k7paoq-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'files')); // Use path.join to get the correct path
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/register', upload.single("file"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }
        
        const { prenom, nom, email, telephone, nationalite } = req.body;
        const fileName = req.file.filename;
        
        await RecrutementModel.create({ prenom, nom, email, telephone, nationalite, pdf: fileName });
        
        res.send({ status: "ok" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Failed to create recrutement entry" });
    }
});



app.post('/contact',(req ,res)=> {

    ContactModel.create(req.body)
    .then(Contact => res.json(Contact))
    .catch(err => res.json(err))


})


app.listen(3000, () => {
    console.log("server is running");
});
