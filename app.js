var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (_product) {
        this.products.push(_product);
    };
    Scales.prototype.getSumScale = function () {
        var sumWeight = 0;
        this.products.forEach(function (i) { sumWeight = sumWeight + i.getScale(); });
        return sumWeight;
    };
    Scales.prototype.getNameList = function () {
        var nameList = [];
        this.products.forEach(function (i) { nameList.push(i.getName()); });
        return nameList;
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Apple.prototype.getScale = function () {
        return this.weight;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tomato.prototype.getScale = function () {
        return this.weight;
    };
    Tomato.prototype.getName = function () {
        return this.name;
    };
    return Tomato;
}(Product));
var scales1 = new Scales;
var app1 = new Apple('apple1', 1);
var app2 = new Apple('apple2', 2);
var app3 = new Apple('apple3', 3);
var tom1 = new Tomato('tomato1', 2);
var tom2 = new Tomato('tomato2', 4);
scales1.add(app1);
scales1.add(app2);
scales1.add(app3);
scales1.add(tom1);
scales1.add(tom2);
console.log(scales1.getSumScale());
console.log(scales1.getNameList());
//# sourceMappingURL=app.js.map