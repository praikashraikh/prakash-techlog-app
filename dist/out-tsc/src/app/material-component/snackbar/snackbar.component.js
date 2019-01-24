"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var SnackbarComponent = /** @class */ (function () {
    function SnackbarComponent(snackBar) {
        this.snackBar = snackBar;
    }
    SnackbarComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    SnackbarComponent = __decorate([
        core_1.Component({
            selector: 'app-snackbar',
            templateUrl: './snackbar.component.html',
            styleUrls: ['./snackbar.component.scss']
        }),
        __metadata("design:paramtypes", [material_1.MatSnackBar])
    ], SnackbarComponent);
    return SnackbarComponent;
}());
exports.SnackbarComponent = SnackbarComponent;
//# sourceMappingURL=snackbar.component.js.map