"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var common_1 = require("@angular/common");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var flex_layout_1 = require("@angular/flex-layout");
var full_component_1 = require("./layouts/full/full.component");
var header_component_1 = require("./layouts/full/header/header.component");
var sidebar_component_1 = require("./layouts/full/sidebar/sidebar.component");
var animations_1 = require("@angular/platform-browser/animations");
var demo_material_module_1 = require("./demo-material-module");
var shared_module_1 = require("./shared/shared.module");
var spinner_component_1 = require("./shared/spinner.component");
var post_list_component_1 = require("./components/post-list/post-list.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                full_component_1.FullComponent,
                header_component_1.AppHeaderComponent,
                spinner_component_1.SpinnerComponent,
                sidebar_component_1.AppSidebarComponent,
                post_list_component_1.PostListComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                demo_material_module_1.DemoMaterialModule,
                forms_1.FormsModule,
                flex_layout_1.FlexLayoutModule,
                http_1.HttpClientModule,
                shared_module_1.SharedModule,
                router_1.RouterModule.forRoot(app_routing_1.AppRoutes)
            ],
            providers: [
                {
                    provide: common_1.LocationStrategy,
                    useClass: common_1.PathLocationStrategy
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map