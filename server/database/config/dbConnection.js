const mongoose = require('mongoose');
require('dotenv').config()
const { dbUrl, Atlas_Url, NODE_ENV } = process.env
const connectionParams = {
  useNewUrlParser:true,
  useUnifiedTopology:true
};
let db = '';
if (NODE_ENV == 'development'){
  db = dbUrl
} else if(NODE_ENV == 'production') {
  db = Atlas_Url
}
const connection = () => mongoose.connect(db, connectionParams);

module.exports = connection