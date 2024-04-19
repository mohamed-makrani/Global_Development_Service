const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
    entreprise : String,
    email: String,
    telephone: String,
    message: String
});

const ContactModel = mongoose.model('Contact', ContactSchema);

module.exports = ContactModel;

