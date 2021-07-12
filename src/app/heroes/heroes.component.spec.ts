import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component";

describe("HeroComponent", () => {
  const heroes = [
    { id: 11, name: "Mr. Nice", strength: 10 },
    { id: 12, name: "Narco", strength: 5 },
    { id: 13, name: "Bombasto", strength: 8 },
  ];

  let component;
  let mockHeroService;

  beforeEach(() => {
    mockHeroService = jasmine.createSpyObj([
      "getHeroes",
      "addHero",
      "deleteHero",
    ]);
    component = new HeroesComponent(mockHeroService);
  });

  describe("delete method", () => {
    it("should remove the indicated hero from the hero list", () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = heroes;

      component.delete(heroes[0]);

      expect(component.heroes.length).toBe(2);
    });

    it("should call deleteHero", () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = heroes;

      component.delete(heroes[0]);

      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(heroes[0]);
    });
  });
});
