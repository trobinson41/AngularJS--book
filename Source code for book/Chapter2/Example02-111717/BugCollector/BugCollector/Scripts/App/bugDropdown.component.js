"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var bugList = require("./bugList");
var BugDropdown = (function () {
    function BugDropdown() {
        this.selectedBug = bugList.bugs[0];
    }
    BugDropdown.prototype.getImage = function (name) {
        return "/bugImages/" + name + ".jpg";
    };
    BugDropdown.prototype.getBug = function (name) {
        for (var i in bugList) {
            if (name == bugList[i].CommonName)
                return bugList[i];
        }
    };
    ;
    BugDropdown.prototype.onChange = function (bug) {
        alert(bug.CommonName);
        //this.selectedBug = this.getBug(name);
    };
    return BugDropdown;
}());
BugDropdown = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'bug-dropdown',
        templateUrl: 'bugDropdown.component.html'
    })
], BugDropdown);
exports.BugDropdown = BugDropdown;
//# sourceMappingURL=bugDropdown.component.js.map