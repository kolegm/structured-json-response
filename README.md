#Structured JSON response
Module `structured-json-response`  

##Lyrical digression
Services have the opportunity to return both HTTP status codes along with a body in the response. In many JavaScript frameworks, HTTP status response codes are not returned to the end-developer, often preventing the client from determining behavior based on that status code. Additionally, with the myriad response codes in the HTTP spec, often there are only a few that clients care about—frequently boiling down to 'success', 'error', or 'failure'. Consequently, it is beneficial to wrap responses in a representation that contains information about the response as well as the response itself.

Best practice is to wrap regular (non-JSONP) responses with the following properties:
- **code** – contains the HTTP response status code as an integer.
- **status** – contains the text: "success”, “fail”, or “error”. Where “fail” is for HTTP status
response values from 500-599, “error” is for statuses 400-499, and “success” is for everything
else (e.g. 1XX, 2XX and 3XX responses).
- **message** – contains the error message. Often used for “fail” and “error” statuses, rarely for success. For internationalization (i18n) purposes, this could contain a message number or code, either alone or contained within delimiters.
- **data** – that contains the response body. In the case of “error” or “fail” statuses, this contains the cause, or exception name.  
A successful response in wrapped style looks similar to this:
```json
{
  "code":200,
    "status":"success",
    "message":"Process has been winished successfully"
      "data": {
        "token":"5ea612ccdaff153c8701cb",
        "somekey": "somevalue"
      }
}
```
An example error response in wrapped style looks like this:
```json
{
  "code":401,
    "status":"error",
    "message":"token is invalid",
    "data":"Unauthorized"
}
```

##And now the case
Install module `structured-json-response`
```npm
$ npm install structured-json-response -S
```

Usage:
```node.js
var util = require('util');
var wrapper = require('structured-json-response');

const HTTP_STATUS_CODE_OK = 200;
const HTTP_STATUS_CODE_FAIL = 500;

var data = { 
  "some_key": "some_value"
};

var messageOk = 'Example message - process was finished successfully';
var messageFail = 'Example message - process was failured';

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
```
