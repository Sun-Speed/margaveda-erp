const express = require("express");
const router = express.Router({ mergeParams: true });

const authMiddleware = require("../../../../middleware/auth.middleware");
const upload = require("../../../../middleware/upload.middleware");

const {
    getIdentityController,
    updateIdentityController,
} = require("./identity.controller");

router.get(
    "/",
    authMiddleware,
    getIdentityController
);

router.put(
    "/",
    authMiddleware,
    upload.fields([
        {
            name: "logo",
            maxCount: 1,
        },
        {
            name: "collegeSeal",
            maxCount: 1,
        },
        {
            name: "principalSignature",
            maxCount: 1,
        },
        {
            name: "letterHead",
            maxCount: 1,
        },
        {
            name: "watermark",
            maxCount: 1,
        },
    ]),
    updateIdentityController
);

module.exports = router;