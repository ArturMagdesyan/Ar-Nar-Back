const fs = require('fs');
const path = 'public/product-images/';
const deleteImage = (name) => {
    try{
        fs.unlinkSync(path + name);
    } catch (e) {
        console.log(e);
    }

};

module.exports = deleteImage;
