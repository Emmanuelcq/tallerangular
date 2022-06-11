const Contacto = require("../models/Contacto")

exports.crearContacto = async(req,res)=>{
    try {
        let contacto
        contacto = new Contacto(req.body)
        await contacto.save()
        res.send(contacto)
    } catch (error) {
        res.status(500).send('Hay un problema')
    }
}

exports.obtenerContactos = async (req, res)=>{
    try {
        let contactos =  await Contacto.find();
        res.json(contactos)
    } catch (error) {
       console.log(error)
       res.status(500).send("Hay un problema") 
    }
}
exports.obtenerContacto= async(req, res)=>{
    try {
        let contacto= await Contacto.findById(req.params.id)
        if(!contacto){
            res.status(404).json({mensaje:"No existe la informacion solicitada"})
        }
        res.json(contacto)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema") 
    }
}

exports.actualizarContacto = async(req, res)=>{
    try {
        const {Nombre, Edad, Celular, Email}= req.body
        
        let contacto= await Contacto.findById(req.params.id)
        if(!contacto){
            res.status(404).json({mensaje:"No existe la informacion solicitada"})
        }
        contacto.Nombre = Nombre
        contacto.Edad= Edad
        contacto.Celular= Celular
        contacto.Email= Email

        let procesoUpdate= await Contacto.findByIdAndUpdate({_id: req.params.id}, contacto, {new:true})
        res.json(procesoUpdate)

    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema") 
    }
}

exports.borrarContacto= async (req, res)=>{
    try {
        let contacto= await Contacto.findById(req.params.id)
        if(!contacto){
            res.status(404).json({mensaje:"No existe la informacion solicitada"})}
            await Contacto.findByIdAndRemove({_id: req.params.id})
            res.status(200).json({mensaje:"Dato eliminada satifactoriamente"})
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema") 
    }
}
