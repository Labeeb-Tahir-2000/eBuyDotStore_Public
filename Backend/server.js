const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATA_BASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log("DB Connection Successful")).catch(
    console.log("DB Connection Failed")
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App Running on port ${port}....`);
})