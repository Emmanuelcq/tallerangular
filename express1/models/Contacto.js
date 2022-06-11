const mongoose = require('mongoose');
const contactoSchema = mongoose.Schema({
    Nombre:{
        type: String,
        required: true
    },
    
    Edad:{
        type: String,
        required: true
    },
    Celular:{
        type: Number,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    fec_cre:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("contacto", contactoSchema)


// "Nombre":{
//     type: String,
//     required: true
// },

// "Edad":{
//     type: String,
//     required: true
// },
// "Celular":{
//     type: Number,
//     required: true
// },
// "Email":{
//     type: String,
//     required: true
// },
// "fec_cre":{
//     type: Date,
//     default: Date.now
