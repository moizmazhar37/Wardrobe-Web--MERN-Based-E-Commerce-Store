const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const mongoose = require('mongoose');
const Product = require('./Models/Products')

const DBstring = "mongodb://127.0.0.1:27017/WardrobeWeb";
mongoose.set('strictQuery',true)
const ConnectToMongo = async () => {
  try {
    await mongoose.connect(DBstring);
    console.log("Connected to database successfully!");
  } catch (error) {
    console.error("Error connecting to database: ", error);
  }
};
ConnectToMongo();





app.use(bodyParser.json({ limit: "100mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb)=> {
      cb(null, file.originalname);
    },
  });
  
const upload = multer({ storage });

app.use(express.json())
app.use(cors());
app.use('/admin' , require('./Routes/Admin_Route'))
app.use('/customer' , require('./Routes/Customer_Route'))
app.use('/Products' , require('./Routes/Products_Route'))
app.use('/Cart' , require('./Routes/Cart_Routes'))

app.post('/addProduct',upload.single('testImage'),  async (req, res) => {
    try {
        const saveImage = new Product({
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        productDescription: req.body.productDescription,
        img: {
          data: fs.readFileSync('uploads/' + req.file.filename),
          contentType: 'image/*'
        },
        productQuantity: req.body.productQuantity,
        sizes: req.body.sizes,
        category: req.body.category,
        subCategory: req.body.subCategory,
        color1: req.body.color1,
        color2: req.body.color2,  
        color3: req.body.color3,
      });
      
      const addedProduct = await saveImage.save();
      res.status(200).send({ success: true , addedProduct });
    } catch (error) {
      res.status(404).json({ success: false, error });
    }
  });


app.listen( 3001 , ()=> {console.log("LISTENING AT PORT: 3001")} )
