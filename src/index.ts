import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import './config/db';

const app = express();

app.use(cors());
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');

    next();
});

app.use(compression());
app.use(cookieParser());

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3050;

app.use('/api', require('./routes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// mongoose.connect('mongodb://localhost:27017/loginsystem_db', {});

// // Define a schema for your Sample model
// const sampleSchema = new mongoose.Schema({
//     name: String
// });

// // Create a model using the schema
// const SampleModel = mongoose.model('Sample', sampleSchema);

// const sampleDocument = new SampleModel({ name: 'Sajid Here' });

// sampleDocument.save()
//     .then(() => console.log('Sample data inserted'))
//     .catch(error => console.error(error));
