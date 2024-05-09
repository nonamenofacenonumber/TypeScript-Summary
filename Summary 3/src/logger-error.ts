/// <reference path="./logger-success.ts" />

namespace LogError {
    export function log(message:string) : void {
        console.log(`%c ${message}` , 'color:red')
    }
}