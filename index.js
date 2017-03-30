require('dotenv').config({ path: './.env' });

const express = require('express');
const bodyParser = require('body-parser');

const s3Service = require('./services/s3');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/s3_signed_url', s3Service.getSignedUrl);

const port = process.env.PORT;
app.listen(port, () => console.log(`listening on port ${port}`));
