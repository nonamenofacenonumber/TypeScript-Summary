"use strict";
var LogSuccess;
(function (LogSuccess) {
    function log(message) {
        console.log(`%c ${message}`, 'color:green');
    }
    LogSuccess.log = log;
})(LogSuccess || (LogSuccess = {}));
/// <reference path="./logger-success.ts" />
var LogError;
(function (LogError) {
    function log(message) {
        console.log(`%c ${message}`, 'color:red');
    }
    LogError.log = log;
})(LogError || (LogError = {}));
/// <reference path="./logger-success.ts" />
/// <reference path="./logger-error.ts" />
LogSuccess.log('Hello Roocket');
LogError.log('Hello Roocket');
