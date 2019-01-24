"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var demo_material_module_1 = require("../demo-material-module");
var flex_layout_1 = require("@angular/flex-layout");
var starter_component_1 = require("./starter.component");
var starter_routing_1 = require("./starter.routing");
var StarterModule = /** @class */ (function () {
    function StarterModule() {
    }
    StarterModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                demo_material_module_1.DemoMaterialModule,
                flex_layout_1.FlexLayoutModule,
                router_1.RouterModule.forChild(starter_routing_1.StarterRoutes)
            ],
            declarations: [starter_component_1.StarterComponent]
        })
    ], StarterModule);
    return StarterModule;
}());
exports.StarterModule = StarterModule;
//# sourceMappingURL=starter.module.js.map