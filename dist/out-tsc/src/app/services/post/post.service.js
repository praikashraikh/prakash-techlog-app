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
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.getApiUrl = function () {
        return "https://prakash-techlog.herokuapp.com/api/v1/";
    };
    PostService.prototype.getPostList = function (query, endPoint) {
        if (query === void 0) { query = {}; }
        if (endPoint === void 0) { endPoint = 'post'; }
        var url = this.getApiUrl() + endPoint;
        console.log(url);
        return this.http.get(url, {
            params: query
        })
            .pipe(operators_1.retry(3));
    };
    PostService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map