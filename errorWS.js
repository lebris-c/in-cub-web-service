const ERROR_MESSAGE = require("./constant")["ERROR_MESSAGE"];

class ErrorWs {
    constructor(code) {
        this.code = code;
        this.message = ERROR_MESSAGE[code];
    }
}


module.exports = ErrorWs;
