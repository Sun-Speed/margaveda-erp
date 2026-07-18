const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        const organizationId = req.params.institutionId;

        const uploadPath = path.join(
            process.cwd(),
            "uploads",
            "organizations",
            organizationId
        );

        fs.mkdirSync(uploadPath, {
            recursive: true,
        });

        cb(null, uploadPath);
    },

    filename: (req, file, cb) => {

        const uniqueName =
            `${Date.now()}-${file.originalname}`;

        cb(null, uniqueName);

    },

});

const upload = multer({
    storage,
});

module.exports = upload;