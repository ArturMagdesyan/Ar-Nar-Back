const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/product-images/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+ '_' + file.originalname);
    }
});

const upload = multer({ storage: storage }).array('files', 10);


module.exports = upload;