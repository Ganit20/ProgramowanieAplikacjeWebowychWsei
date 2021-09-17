var MainClass = /** @class */ (function () {
    function MainClass() {
        var _this = this;
        var inputFieldNumber = document.querySelector('#inputFieldNumber');
        inputFieldNumber.addEventListener('input', function (event) {
            var target = event.target;
            _this.inputFieldNumber = Number(target.value);
            new generateNumberInput().GenerateBody(_this.inputFieldNumber);
        });
    }
    return MainClass;
}());
var generateNumberInput = /** @class */ (function () {
    function generateNumberInput() {
        this.inputArray = [];
    }
    generateNumberInput.prototype.GenerateBody = function (inputFieldNumber) {
        var _this = this;
        console.log("ok");
        var mainDiv = document.createElement("div");
        var _loop_1 = function (i) {
            var div = document.createElement("div");
            var deleteBtn = document.createElement("button");
            var input = document.createElement("input");
            deleteBtn.innerText = "delete";
            input.type = "number";
            div.id = "MainDiv" + i;
            this_1.inputArray.push(input);
            input.addEventListener('input', function () {
                var sum = 0;
                _this.inputArray.forEach(function (element) {
                    sum += Number(element.value);
                    console.log(element);
                    console.log(sum);
                });
                var mathHelper = new MathHelper();
                var result = "Sum= " + sum + "<BR> Average= " + sum / _this.inputArray.length + "<BR> Min="
                    + mathHelper.GetMinValue(_this.inputArray.map(function (x) { return Number(x.value); })) + "<BR> Max= "
                    + mathHelper.GetMaxValue(_this.inputArray.map(function (x) { return Number(x.value); }));
                var rDiv = document.querySelector("#result");
                rDiv.innerHTML = result;
            });
            deleteBtn.addEventListener('click', function () {
                var index = _this.inputArray.indexOf(input);
                _this.inputArray.splice(index);
                _this.GenerateBody(inputFieldNumber - 1);
            });
            div.appendChild(input);
            div.appendChild(deleteBtn);
            mainDiv.appendChild(div);
        };
        var this_1 = this;
        for (var i = inputFieldNumber; i >= 1; i--) {
            _loop_1(i);
        }
        ;
        console.log(mainDiv);
        var main = document.querySelector("#main");
        main.innerHTML = '';
        main.appendChild(mainDiv);
    };
    return generateNumberInput;
}());
var MathHelper = /** @class */ (function () {
    function MathHelper() {
    }
    MathHelper.prototype.GetMaxValue = function (numbers) {
        return Math.max.apply(Math, numbers);
    };
    MathHelper.prototype.GetMinValue = function (numbers) {
        return Math.min.apply(Math, numbers);
    };
    return MathHelper;
}());
new MainClass();
