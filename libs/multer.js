var multer = require('multer');
var { v4: uuidv4 } = require('uuid');
var path = require('path');

let storage = multer.diskStorage({
    destination: 'public/images',
    filename: (req, file, cb) => {
        // Todos los archivos que se reciben son renombrados
        cb(null, uuidv4() + path.extname(file.originalname));
    }
});

module.exports = multer({storage});