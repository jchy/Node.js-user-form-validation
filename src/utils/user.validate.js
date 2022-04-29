const {body} = require("express-validator");

const validateUser = () =>([
    body("first_name")
    .not().isEmpty().withMessage("first_name  should not be empty")
    .isString().withMessage("first_name should be string"),
    body("last_name")
    .not().isEmpty().withMessage("last_name  should not be empty")
    .isString().withMessage("last_name should be string"),
    body("email")
    .not().isEmpty().withMessage("email  should not be empty")
    .isEmail().withMessage("Please enter a valid email"),
    body("age")
    .not().isEmpty().withMessage("age should not be empty")
    .isNumeric().withMessage("age should be numbera Number")
])

module.exports = validateUser;