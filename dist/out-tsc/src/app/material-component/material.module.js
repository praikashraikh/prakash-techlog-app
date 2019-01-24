"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("hammerjs");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var common_1 = require("@angular/common");
var demo_material_module_1 = require("../demo-material-module");
var table_1 = require("@angular/cdk/table");
var forms_1 = require("@angular/forms");
var flex_layout_1 = require("@angular/flex-layout");
var material_routing_1 = require("./material.routing");
var buttons_component_1 = require("./buttons/buttons.component");
var grid_component_1 = require("./grid/grid.component");
var lists_component_1 = require("./lists/lists.component");
var menu_component_1 = require("./menu/menu.component");
var tabs_component_1 = require("./tabs/tabs.component");
var stepper_component_1 = require("./stepper/stepper.component");
var expansion_component_1 = require("./expansion/expansion.component");
var chips_component_1 = require("./chips/chips.component");
var toolbar_component_1 = require("./toolbar/toolbar.component");
var progress_snipper_component_1 = require("./progress-snipper/progress-snipper.component");
var progress_component_1 = require("./progress/progress.component");
var dialog_component_1 = require("./dialog/dialog.component");
var tooltip_component_1 = require("./tooltip/tooltip.component");
var snackbar_component_1 = require("./snackbar/snackbar.component");
var slider_component_1 = require("./slider/slider.component");
var slide_toggle_component_1 = require("./slide-toggle/slide-toggle.component");
var MaterialComponentsModule = /** @class */ (function () {
    function MaterialComponentsModule() {
    }
    MaterialComponentsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(material_routing_1.MaterialRoutes),
                demo_material_module_1.DemoMaterialModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                flex_layout_1.FlexLayoutModule,
                table_1.CdkTableModule
            ],
            providers: [],
            entryComponents: [dialog_component_1.DialogOverviewExampleDialogComponent],
            declarations: [
                buttons_component_1.ButtonsComponent,
                grid_component_1.GridComponent,
                lists_component_1.ListsComponent,
                menu_component_1.MenuComponent,
                tabs_component_1.TabsComponent,
                stepper_component_1.StepperComponent,
                expansion_component_1.ExpansionComponent,
                chips_component_1.ChipsComponent,
                toolbar_component_1.ToolbarComponent,
                progress_snipper_component_1.ProgressSnipperComponent,
                progress_component_1.ProgressComponent,
                dialog_component_1.DialogComponent,
                dialog_component_1.DialogOverviewExampleDialogComponent,
                tooltip_component_1.TooltipComponent,
                snackbar_component_1.SnackbarComponent,
                slider_component_1.SliderComponent,
                slide_toggle_component_1.SlideToggleComponent
            ]
        })
    ], MaterialComponentsModule);
    return MaterialComponentsModule;
}());
exports.MaterialComponentsModule = MaterialComponentsModule;
//# sourceMappingURL=material.module.js.map