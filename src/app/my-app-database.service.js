"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var dexie_1 = require("dexie");
var hero_1 = require("./hero");
var MyAppDatabase = (function (_super) {
    __extends(MyAppDatabase, _super);
    function MyAppDatabase() {
        var _this = _super.call(this, 'MyAppDatabase') || this;
        var db = _this;
        db.version(1).stores({
            heroes: '++id, name',
        });
        db.heroes.mapToClass(hero_1.Hero);
        return _this;
    }
    return MyAppDatabase;
}(dexie_1.default));
exports.MyAppDatabase = MyAppDatabase;
exports.db = new MyAppDatabase();
//# sourceMappingURL=my-app-database.service.js.map