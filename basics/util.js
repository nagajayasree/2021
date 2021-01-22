var Utility;
(function (Utility) {
    var Useful = /** @class */ (function () {
        function Useful() {
        }
        Useful.prototype.timesTwo = function (n) {
            return 2 * n;
        };
        return Useful;
    }());
    Utility.Useful = Useful;
})(Utility || (Utility = {}));
var use = new Utility.Useful();
console.log(use.timesTwo(6));
