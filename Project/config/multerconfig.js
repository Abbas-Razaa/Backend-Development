const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/uploads');
    },
    filename: (req, file, cb) => {
        crypto.randomBytes(12, function (err, bytes) {
            const fn = bytes.toString('hex') + path.extname(file.originalname);
            cb(null, fn);
        });
    }
});

const upload = multer({ storage: storage });

module.exports = upload;