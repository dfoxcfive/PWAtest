import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { db } from './my-app-database';


@Injectable()
export class HeroService {
   getHeroes(): Promise<Hero[]> {
      // return Promise.resolve(HEROES);
      return Promise.resolve(db.heroes.toArray());
   }
   getHero(id: number): Promise<Hero> {
      return this.getHeroes()
                 .then(heroes => heroes.find(hero => hero.id === id));
   }
   saveHero(id: number, name: string): void {
      db.heroes.put({ id: Number(id), name: name });
   }
   update(hero: Hero): Promise<number> {
      return db.heroes.put({ id: hero.id, name: hero.name });
   }
   delete(hero: Hero): void {
      db.heroes.delete(hero.id);
   }
}
