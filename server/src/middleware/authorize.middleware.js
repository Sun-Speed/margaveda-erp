module.exports = (...allowedRoles) => {

    return (req, res, next) => {

        if (!req.currentMembership) {

            return res.status(401).json({
                success: false,
                message: "Unauthorized.",
            });

        }

        const currentRole =
            req.currentMembership.roleId.name;

        if (!allowedRoles.includes(currentRole)) {

            return res.status(403).json({
                success: false,
                message: "Access denied.",
            });

        }

        next();

    };

};