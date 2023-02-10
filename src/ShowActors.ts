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


    let carDeck = document.querySelector('#card');
    let info = document.querySelector('#info') as HTMLElement;
    let infoChild = document.querySelector('#infochild') as HTMLElement
    info.appendChild(infoChild);

    carDeck.addEventListener("click", (e) => {
 
      if (ShowActors.currentDataIndex > -1) {

      info.style.display = "block";

      gsap.to(info, {
      duration: 0.05,
      rotate: 10,
      scale:1.3,
      repeat: 3,
      transformOrigin: "center",
      yoyo: true
      });

      let addInfo = ShowActors.information[ShowActors.currentDataIndex];
      let mstr = document.querySelector('#strength');
      mstr.textContent=`${addInfo.strength}`

      let mLives = document.querySelector('#lives');
      mLives.textContent=`${addInfo.lives}`
    }

  })

    const imgNinja = require("./assets/images/ninja.png");
    const showImg = document.createElement("img");
    showImg.id = "showImg";
    showImg.src = imgNinja;
    document.querySelector('#imagecon').appendChild(showImg);

  } //END Construtor

  changeContent(this: HTMLElement, event: Event) {

    let info = document.querySelector('#info') as HTMLElement;
    info.style.display = "none";

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
