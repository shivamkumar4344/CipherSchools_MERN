const jwt = require("jsonwebtoken");
const { isValidObjectId } = require("mongoose");
const CS_SECRET_KEY = "CSSecretKey";

const generateToken = (payload) => {
    const token = jwt.sign(payload, CS_SECRET_KEY);
    return token;
};

const verifyToken = (token) => {
    try {
        const payload = jwt.verify(token, CS_SECRET_KEY);
        return { isValidToken: true, payload };
    } catch (err) {
        console.error(err);
        return { isValidToken: false, payload: undefined };
    }
};

// console.log(generateToken({name:"Shivam"}));

// console.log(verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2hpdmFtIiwiaWF0IjoxNzE5OTk1OTQxfQ.QnRsbYKCRc1iDa-mzEZbmS5ue5iD7UOkmdrg3c7vOtE"));


module.exports = { generateToken, verifyToken };
