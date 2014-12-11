var util = require('util');

var wrapper = require('./');

const HTTP_STATUS_CODE_OK = 200;
const HTTP_STATUS_CODE_FAIL = 500;

var data = {
  "some_key": "some_value"
};

var messageOk = 'Example message - process was finished successfully';
var messageFail = 'Example message - process was failed';

// [1] example
var resultOk1 = wrapper(HTTP_STATUS_CODE_OK, messageOk, data);
var resultOk2 = wrapper.ok(messageOk, data);

console.log('EX1OK: ' + util.inspect(resultOk1));
console.log('EX2OK: ' + util.inspect(resultOk2));

// [2] example
var resultFail1 = wrapper(HTTP_STATUS_CODE_FAIL, messageFail);
var resultFail2 = wrapper.failured(messageFail);

console.log('EX1FAIL: ' + util.inspect(resultFail1));
console.log('EX2FAIL: ' + util.inspect(resultFail2));

// [3] example
var resultSmth = wrapper(null, ['example message 1', 'example message 2'], 'dsadsa');

console.log('EX1SMTH: ' + util.inspect(resultSmth));
