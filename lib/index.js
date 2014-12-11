var base = require('./base');

/**
 * http://en.wikipedia.org/wiki/List_of_HTTP_status_codes
 * @todo complete the list
 */

const HTTP_STATUS_CODE_OK = 200;
const HTTP_STATUS_CODE_NO_CONTENT = 204;
const HTTP_STATUS_CODE_MOVED_PARMANENTLY = 301;
const HTTP_STATUS_CODE_MOVED_TEMPORARILY = 302;
const HTTP_STATUS_CODE_BAD_REQUEST = 400;
const HTTP_STATUS_CODE_UNAUTHORIZED = 401;
const HTTP_STATUS_CODE_PAYMENT_REQUIRED = 402;
const HTTP_STATUS_CODE_FORBIDDEN = 403;
const HTTP_STATUS_CODE_NOT_FOUND = 404;
const HTTP_STATUS_CODE_METHOD_NOT_ALLOWED = 405;
const HTTP_STATUS_CODE_REQUST_TIMEOUT = 408;
const HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR = 500;
const HTTP_STATUS_CODE_METHOD_NOT_IMPLEMENTED = 501;

// common method
module.exports = base;

// when process was finished successfully
module.exports.ok = function (_message, _data) {
  return base(
    HTTP_STATUS_CODE_OK,
    _message,
    _data
  );
};

// when process was failured
module.exports.failured = function (_message) {
  return base(
    HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR,
    _message
  );
};

// when process was finished and no content to return
module.exports.noContent = function (_message, _data) {
  return base(
    HTTP_STATUS_CODE_NO_CONTENT,
    _message,
    _data
  );
};

// when resource has been moved permanenetly
module.exports.movedPermanently = function (_message, _data) {
  return base(
    HTTP_STATUS_CODE_MOVED_PARMANENTLY,
    _message,
    _data
  );
};

// when resource has been moved temporarily
module.exports.movedTemporarily = function (_message, _data) {
  return base(
    HTTP_STATUS_CODE_MOVED_TEMPORARILY,
    _message,
    _data
  );
};

module.exports.badRequest = function (_message) {
  return base(
    HTTP_STATUS_CODE_BAD_REQUEST,
    _message
  );
};

module.exports.unauthorized = function (_message) {
  return base(
    HTTP_STATUS_CODE_UNAUTHORIZED,
    _message
  );
};

module.exports.paymentRequired = function (_message, _data) {
  return base(
    HTTP_STATUS_CODE_PAYMENT_REQUIRED,
    _message,
    _data
  );
};

module.exports.forbidden = function (_message) {
  return base(
    HTTP_STATUS_CODE_FORBIDDEN,
    _message
  );
};

module.exports.notFound = function (_message) {
  return base(
    HTTP_STATUS_CODE_NOT_FOUND,
    _message
  );
};

module.exports.notAllowed = function (_message) {
  return base(
    HTTP_STATUS_CODE_METHOD_NOT_ALLOWED,
    _message
  );
};

module.exports.requestTimeout = function (_message) {
  return base(
    HTTP_STATUS_CODE_REQUST_TIMEOUT,
    _message
  );
};

module.exports.methodNotImplemented = function (_message) {
  return base(
    HTTP_STATUS_CODE_METHOD_NOT_IMPLEMENTED,
    _message
  );
};

