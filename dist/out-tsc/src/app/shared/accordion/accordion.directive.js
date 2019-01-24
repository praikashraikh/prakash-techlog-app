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
var router_1 = require("@angular/router");
var operators_1 = require("rxjs/operators");
var AccordionDirective = /** @class */ (function () {
    function AccordionDirective(router) {
        var _this = this;
        this.router = router;
        this.navlinks = [];
        setTimeout(function () { return _this.checkOpenLinks(); });
    }
    AccordionDirective.prototype.closeOtherLinks = function (selectedLink) {
        this.navlinks.forEach(function (link) {
            if (link !== selectedLink) {
                link.selected = false;
            }
        });
    };
    AccordionDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AccordionDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AccordionDirective.prototype.checkOpenLinks = function () {
        var _this = this;
        this.navlinks.forEach(function (link) {
            if (link.group) {
                var routeUrl = _this.router.url;
                var currentUrl = routeUrl.split('/');
                if (currentUrl.indexOf(link.group) > 0) {
                    link.selected = true;
                    _this.closeOtherLinks(link);
                }
            }
        });
    };
    AccordionDirective.prototype.ngAfterContentChecked = function () {
        var _this = this;
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function (e) { return _this.checkOpenLinks(); });
    };
    AccordionDirective = __decorate([
        core_1.Directive({
            selector: '[appAccordion]'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AccordionDirective);
    return AccordionDirective;
}());
exports.AccordionDirective = AccordionDirective;
//# sourceMappingURL=accordion.directive.js.map