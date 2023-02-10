import { gsap } from "gsap";
import { container } from "webpack";
import { Containers } from "./containers";

interface Enemy {

  name: string;
  strength: number;
  levelAssing: number;
}

export class ShowActors {

  static nameArray: string[] = [
    "Death Smokie",
    "Black Scum",
    "Pink Pang"
  ]

  static myContentArray: string[] = [
    "Ninja Killer dont touch him",
    "Black Scum is a Ninja Killer",
    "Just som penguin Shit"
  ];

  static imageArray: string[] = [
    "death-smokie.png",
    "black-alien-scum.png",
    "angry-ping.png"
  ]
  static information: { strength: number, lives: number }[] = [
    { "strength": 100, "lives": 10 },
    { "strength": 90, "lives": 5 },
    { "strength": 80, "lives": 4 }
  ];

  static currentDataIndex: number = -1;

  constructor() {

    const Alien: Enemy = {
      name: "Death Smokie",
      strength: 100,
      levelAssing: 0,
    };

    const Black: Enemy = {
      name: "Black Scum",
      strength: 90,
      levelAssing: 5,

    };

    const Red: Enemy = {
      name: "Red Scum",
      strength: 80,
      levelAssing: 4,
    };


    const enemyArray: Array<string> = [Alien.name, Black.name, Red.name];

    new Containers();

    let getMenuItems = document.querySelectorAll("#menuItemContainer > .menuItem");

    getMenuItems.forEach((element: any, index: number) => {

      element.setAttribute("data-index", index);
      element.textContent = enemyArray[index];
      element?.addEventListener("click", this.changeContent);

    })

    const imgNinja = require("./assets/images/ninja.png");
    const showImg = document.createElement("img");
    showImg.id = "showImg";
    showImg.src = imgNinja;
    document.querySelector('#imagecon').appendChild(showImg);

  } //END Construtor

  changeContent(this: HTMLElement, event: Event) {

    ShowActors.currentDataIndex = parseInt(this.dataset.index);

    let mHeadline = document.querySelector('#headline') as HTMLElement;
    mHeadline.textContent = ShowActors.nameArray[ShowActors.currentDataIndex];


    const imageSrc = ShowActors.imageArray[ShowActors.currentDataIndex];
    const img = require("./assets/images/" + imageSrc);
    let mImg = document.querySelector('#showImg') as HTMLImageElement;
    mImg.src = img;

    let mContent = document.querySelector('#content') as HTMLElement;
    mContent.textContent = ShowActors.myContentArray[ShowActors.currentDataIndex];


    let elem = document.querySelector('#cardContainer') as HTMLElement;

    gsap.to(elem, {

      duration: 0.05,
      scaleX: -1,
      alpha: 0,
      repeat: 3,
      yoyo: true
    })


  }


} //End Class
