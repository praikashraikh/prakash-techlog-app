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
var post_service_1 = require("../../services/post/post.service");
var streamSaver = require("streamsaver");
var PostListComponent = /** @class */ (function () {
    function PostListComponent(_postService) {
        this._postService = _postService;
        this.displayedColumns = ['title', 'author', 'tags', 'createdDateTime', 'actions'];
    }
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.dataSource.paginator = this.paginator;
        this._postService.getPostList().subscribe(function (posts) {
            _this.dataSource = new material_1.MatTableDataSource(posts['data']);
        }, function (err) {
            console.log(err);
        });
    };
    PostListComponent.prototype.savePost = function (mode, post) {
        if (post === void 0) { post = null; }
        fetch(this._postService.getApiUrl() + 'post').then(function (res) {
            var fileStream = streamSaver.createWriteStream('filename.txt');
            var writer = fileStream.getWriter();
            // Later you will be able to just simply do
            // res.body.pipeTo(fileStream)
            var reader = res.body.getReader();
            var pump = function () { return reader.read()
                .then(function (_a) {
                var value = _a.value, done = _a.done;
                return done
                    // close the stream so we stop writing
                    ? writer.close()
                    // Write one chunk, then get the next one
                    : writer.write(value).then(pump);
            }); };
            // Start the reader
            pump().then(function () {
                return console.log('Closed the stream, Done writing');
            }, function (err) { return console.log(err); });
        });
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], PostListComponent.prototype, "paginator", void 0);
    PostListComponent = __decorate([
        core_1.Component({
            selector: 'app-post-list',
            templateUrl: './post-list.component.html',
            styleUrls: ['./post-list.component.css']
        }),
        __metadata("design:paramtypes", [post_service_1.PostService])
    ], PostListComponent);
    return PostListComponent;
}());
exports.PostListComponent = PostListComponent;
//# sourceMappingURL=post-list.component.js.map