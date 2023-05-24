const express = require('express')
const app = express()
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose");

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
dotenv.config();


DB_CONNECTION = process.env.DB_CONNECTION
DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD))
    .then(() => console.log("Mongo DB Connected!"));

const ImmgSchema = new mongoose.Schema({
    img: String,
    country: String,
    title: String,
    desc: String,
    price:Number
});
const ImmgModel = mongoose.model("ImmgModel", ImmgSchema)


//post
app.post("/immigrants", async (req, res) => {
    const { img, title, desc, country,price} = req.body;
    const newImmg = new ImmgModel({
        img: img,
        title: title,
        desc: desc,
        country: country,
        price: price
    });
    await newImmg.save();
    res.status(201).send(newImmg);
});


//get all
app.get("/immigrants", async (req, res) => {
    const immigrants = await ImmgModel.find();
    res.status(200).send(immigrants)
});

//get by id
app.get("/immigrants/:id", async (req, res) => {
    const id = req.params.id
    const singleImmigrant = await ImmgModel.findById(id)
    if (!singleImmigrant) {
        res.status(204).send("item not found!");
    }
    else {
        res.status(200).send(singleImmigrant);
    }
});

//delete
app.delete("/immigrants/:id", async (req, res) => {
    const id = req.params.id
    const deleteImmigrant = await ImmgModel.findByIdAndDelete(id)
    if (!deleteImmigrant) {
        res.status(204).send("item not found!");
    }
    else {
        res.status(200).send(deleteImmigrant);
    }
});

//put
app.put("/immigrants/:id", async (req, res) => {
    const id = req.params.id
    const { img, title, desc, country,price } = req.body;
    const existedImmg = await ImmgModel.findByIdAndUpdate(id, {
        img: img,
        title: title,
        desc: desc,
        country: country,
        price:price
    });
    if (existedImmg === undefined) {
        res.status(404).send("immigrant not found!");
    } else {
        res.status(200).send(`${title} updated successfully!`);
    }
});





PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})