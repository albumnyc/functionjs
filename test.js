"use strict";
exports.__esModule = true;
var Validation;
(function (Validation) {
    Validation[Validation["DEFAULT"] = 0] = "DEFAULT";
    Validation[Validation["SUCCESS"] = 1] = "SUCCESS";
    Validation[Validation["FAIL"] = 2] = "FAIL";
})(Validation = exports.Validation || (exports.Validation = {}));
var A = /** @class */ (function () {
    function A() {
        this.name = {
            valadation: Validation.DEFAULT,
            value: '1'
        };
        this.pi = {
            valadation: Validation.DEFAULT,
            value: '1'
        };
        this.age = {
            valadation: Validation.DEFAULT,
            value: function (value) {
                if (value === void 0) { value = 1; }
                console.log({ value: value });
                return;
            }
        };
    }
    A.prototype.ret = function (_a) {
        var key = _a.key, value = _a.value;
        return {
            value: value
        };
    };
    return A;
}());
var a = new A();
a.ret({ value: function () { 1; } });
var func = function (a, b) { return a + b; };
console.log(func('2'));
var objMay = {
    a: 1,
    b: 'w',
    c: undefined
};
var arr = [{ a: 1, b: 'sda' }];
var obj2;
(function (obj2) {
    obj2[obj2["a"] = 1] = "a";
    obj2[obj2["b"] = 2] = "b";
})(obj2 || (obj2 = {}));
console.log(obj2.a);
