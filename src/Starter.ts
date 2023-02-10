interface Enemy {

  name: string;
  strength: number;
  levelAssign?: number;

}

export class Starter {

  static example = 12;

  constructor() {

    const Alien: Enemy = {

      name: "Ninja Killer",
      strength: 12,
      levelAssign: 12
    }

    const Dog: Enemy = {

      name: "ben Wow",
      strength: 30
    }

  }



}  