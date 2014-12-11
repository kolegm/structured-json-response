STRUCTURED JSON RESPONSE
In practice neither of these proposals adequately covers all cases. Basically, current best practice is to
wrap regular (non-JSONP) responses with the following properties:
• code – contains the HTTP response status code as an integer.
• status – contains the text: “success”, “fail”, or “error”. Where “fail” is for HTTP status
response values from 500-599, “error” is for statuses 400-499, and “success” is for everything
else (e.g. 1XX, 2XX and 3XX responses).
• message – only used for “fail” and “error” statuses to contain the error message. For
internationalization (i18n) purposes, this could contain a message number or code, either alone
or contained within delimiters.
• data – that contains the response body. In the case of “error” or “fail” statuses, this contains the
cause, or exception name.
A successful response in wrapped style looks similar to this:
{"code":200,"status":"success","data":
{"lacksTOS":false,"invalidCredentials":false,"authToken":"4ee683baa2a3332c3c86026d"}}
An example error response in wrapped style looks like this:
{"code":401,"status":"error","message":"token is invalid","data":"UnauthorizedException"}
