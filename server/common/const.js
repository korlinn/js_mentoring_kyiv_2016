'use strict';

const STATUS = {
    OK: 200,
    CREATED: 201,
    BADREQUEST: 404,
    UNAUTHORIZED: 401,
    NOTFOUND: 404,
    CONFLICT: 409,
    SERVERERROR: 500
};

const JWT_SECRET = 'foodadviser';

module.exports.STATUS = STATUS;
module.exports.JWT_SECRET = JWT_SECRET;