var http = require('http');

var httpStatusList = http.STATUS_CODES;

function _searchStatusByCode(code) {
  var status = '';
  if (httpStatusList.hasOwnProperty(code)) {
    status = httpStatusList[code];
  }
  return status;
}

module.exports = function wrap(_code, _message, _data) {
  var _status;

  _code = +_code; // to integer
  if (_code == 0) {
    _code = '';
  }
  _status = _searchStatusByCode(_code);
  _message = _message || null;
  _data = _data || null;

  return {
    code: _code,
    status: _status,
    message: _message,
    data: _data
  };
};
