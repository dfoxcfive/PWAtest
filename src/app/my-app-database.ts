import Dexie from 'dexie';
import { Hero } from './hero';

export class MyAppDatabase extends Dexie {
   heroes: Dexie.Table<Hero, number>;

   constructor () {
      super('MyAppDatabase');
      let db = this;
      db.version(1).stores({
         heroes: '++id, name',
      });
      db.heroes.mapToClass(Hero);
   }
}

export var db = new MyAppDatabase();


