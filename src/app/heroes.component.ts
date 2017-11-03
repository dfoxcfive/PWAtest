import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';
import Dexie from 'dexie';
import { db } from './my-app-database';

@Component({
   selector: 'my-heroes',
   templateUrl: './heroes.component.html',
   styleUrls: [ './heroes.component.css' ],
})

export class HeroesComponent implements OnInit{
   heroes: Hero[];
   selectedHero: Hero;
   // private IndxDb: IDBFactory;
   // public db: IDBDatabase;
   constructor( private heroService: HeroService, private router: Router) { }
   getHeroes(): void {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
      // let this.heroes = Promise.resolve(db.heroes.toArray());
      // db.heroes.toArray().then(heroes => this.localHeroes = heroes);
   }
   ngOnInit(): void {
      this.getHeroes();
   }
   onSelect(hero: Hero): void {
      this.selectedHero = hero;
   }
   gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedHero.id]);
   }
   addHero(id: number, name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.heroService.saveHero(id, name);
      this.getHeroes();
      this.selectedHero = null;
   }
   delete(hero: Hero): void {
      this.heroService.delete(hero);
      this.getHeroes();
      this.selectedHero = null;
   }
}


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