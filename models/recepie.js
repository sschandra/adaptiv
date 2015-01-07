//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//scheme
var recepieSchema = new mongoose.Schema({
    name:String,
    sku:String,
    details:String,
    steps:String
});

//Return model
module.exports = restful.model('Recepies',recepieSchema);