// gestion y validacion de los ficheros
const multer = require("multer")// es el encargado de manipular los archivos y cargarlos los q viene del formulario
const cloudinary = require("cloudinary").v2// aqui es donde la guardo 
const { CloudinaryStorage } = require("multer-storage-cloudinary") // este nos ayuda a subir los archivos

// permite subir a cloudinary las imagenes previamente validadas con el multer
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,// donde lo voy almasenar 
    params: {// cuales son los parametros q las imagenes tienen q cumplir para subir 
        folder: "studentFullStack",// nombre de la carpeta donde se va a guardar
        allowedFormats: ["jpg", "png", "svg", "gif", "jpeg"]
    }
})

// subo la imagen que cumpla con los  parametros definidos
const upload = multer({ storage });// aqui simpre se tiene q llamar storage q es como esta configurado 
module.exports = upload;