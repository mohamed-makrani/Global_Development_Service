const mongoose = require('mongoose');

const RecrutementSchema = new mongoose.Schema({
    prenom: String,
    nom: String,
    email: { type: String, unique: true },
    telephone: { type: String, unique: true },
    nationalite: String,
    pdf: String,
});

// Create unique indexes on email and telephone fields
RecrutementSchema.index({ email: 1, telephone: 1 }, { unique: true });

const RecrutementModel = mongoose.model('recrutement', RecrutementSchema);
module.exports = RecrutementModel;


