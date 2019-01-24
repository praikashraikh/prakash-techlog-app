"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var post_service_1 = require("./post.service");
describe('PostService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(post_service_1.PostService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=post.service.spec.js.map