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
var layout_1 = require("@angular/cdk/layout");
var core_1 = require("@angular/core");
var menu_items_1 = require("../../shared/menu-items/menu-items");
/** @title Responsive sidenav */
var FullComponent = /** @class */ (function () {
    function FullComponent(changeDetectorRef, media, menuItems) {
        this.menuItems = menuItems;
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    FullComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    FullComponent.prototype.ngAfterViewInit = function () { };
    FullComponent = __decorate([
        core_1.Component({
            selector: 'app-full-layout',
            templateUrl: 'full.component.html',
            styleUrls: []
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            layout_1.MediaMatcher,
            menu_items_1.MenuItems])
    ], FullComponent);
    return FullComponent;
}());
exports.FullComponent = FullComponent;
//# sourceMappingURL=full.component.js.map