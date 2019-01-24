"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var keycodes_1 = require("@angular/cdk/keycodes");
var ChipsComponent = /** @class */ (function () {
    function ChipsComponent() {
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.availableColors = [
            { name: 'none', color: 'gray' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
        // Enter, comma
        this.separatorKeysCodes = [keycodes_1.ENTER, keycodes_1.COMMA];
        this.fruits = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];
    }
    ChipsComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    ChipsComponent.prototype.remove = function (fruit) {
        var index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    ChipsComponent = __decorate([
        core_1.Component({
            selector: 'app-chips',
            templateUrl: './chips.component.html',
            styleUrls: ['./chips.component.scss']
        })
    ], ChipsComponent);
    return ChipsComponent;
}());
exports.ChipsComponent = ChipsComponent;
//# sourceMappingURL=chips.component.js.map