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
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var router_1 = require("@angular/router");
var HeroesComponent = (function () {
    // private IndxDb: IDBFactory;
    // public db: IDBDatabase;
    function HeroesComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
        // let this.heroes = Promise.resolve(db.heroes.toArray());
        // db.heroes.toArray().then(heroes => this.localHeroes = heroes);
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HeroesComponent.prototype.addHero = function (id, name) {
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.saveHero(id, name);
        this.getHeroes();
        this.selectedHero = null;
    };
    HeroesComponent.prototype.delete = function (hero) {
        this.heroService.delete(hero);
        this.getHeroes();
        this.selectedHero = null;
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        templateUrl: './heroes.component.html',
        styleUrls: ['./heroes.component.css'],
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService, router_1.Router])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
// this.IndxDb = window.indexedDB;
// let open = this.IndxDb.open('MyDatabase', 1);
// open.onupgradeneeded = function() {
//    let db = open.result;
//    let store = db.createObjectStore('MyObjectStore', {keyPath: 'id'});
//    let index = store.createIndex('NameIndex', ['name.last', 'name.first']);
// };
// open.onsuccess = function() {
//    // Start a new transaction
//    let db = open.result;
//    let tx = db.transaction('MyObjectStore', 'readwrite');
//    let store = tx.objectStore('MyObjectStore');
//    let index = store.index('NameIndex');
//    // Add some data
//    store.put({id: 1, name: 'John Doe'});
//    store.put({id: 2, name: 'Bob Smith'});
//    tx.oncomplete = function() {
//       db.close();
//    };
// } 
//# sourceMappingURL=heroes.component.js.map